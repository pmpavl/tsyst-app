'use client';

import React from 'react';

import {
  APIAuth, ErrorDefault,
  RefreshRequest,
  IdentificationRequest,
} from '@/api';
import {
  setCookie, getCookie, deleteCookie,
  ACCESS_TOKEN, ACCESS_TOKEN_MAX_AGE,
  REFRESH_TOKEN, REFRESH_TOKEN_MAX_AGE,
} from '@/lib/utils';
import { UserTokens } from '@/models';

type AppState = {
  loading: boolean

  auth: boolean
  tokens?: UserTokens
};

type App = AppState & {
  login(accessToken: string, refreshToken: string): void
  logout(): void
};

const AppContext = React.createContext<App>({} as App);

class AppProvider extends React.Component<React.PropsWithChildren, AppState> {
  public state: AppState = { loading: true, auth: false };

  async componentDidMount(): Promise<void> {
    const accessToken = getCookie(ACCESS_TOKEN);
    const refreshToken = getCookie(REFRESH_TOKEN);

    if (accessToken === '' && refreshToken === '') { // No tokens
      return this.setState({ loading: false });
    }

    if (accessToken === '' && refreshToken !== '') { // Only refresh token
      const response = await APIAuth.refresh(new RefreshRequest({ refreshToken }));
      if (response instanceof ErrorDefault) return this.refreshProcessError(response);

      setCookie(ACCESS_TOKEN, response.accessToken, ACCESS_TOKEN_MAX_AGE);
      return this.setTokens(response.accessToken, refreshToken);
    }

    // Have access token
    const response = await APIAuth.identification(new IdentificationRequest({ accessToken }));
    if (response instanceof ErrorDefault) return this.identificationProcessError(response);

    return this.setTokens(accessToken, refreshToken);
  }

  private setTokens = (accessToken: string, refreshToken: string): void => {
    this.setState({ loading: false, auth: true, tokens: new UserTokens({ accessToken, refreshToken }) });
  };

  private refreshProcessError = (response: ErrorDefault): void => {
    // 400 || 403 || 404
    if (response.isBadRequest() || response.isForbidden() || response.isNotFound()) {
      deleteCookie(REFRESH_TOKEN);
      return this.setState({ loading: false, auth: false });
    }

    // 408 || 500 || 503 || unexpected error
    return this.setState({ loading: false, auth: false });
  };

  private identificationProcessError = (response: ErrorDefault): void => {
    // 400 || 403 || 404
    if (response.isBadRequest() || response.isForbidden() || response.isNotFound()) {
      deleteCookie(ACCESS_TOKEN);
      deleteCookie(REFRESH_TOKEN);
      return this.setState({ loading: false, auth: false });
    }

    // 408 || 500 || 503 || unexpected error
    return this.setState({ loading: false, auth: false });
  };

  public login = (accessToken: string, refreshToken: string): void => {
    setCookie(ACCESS_TOKEN, accessToken, ACCESS_TOKEN_MAX_AGE);
    setCookie(REFRESH_TOKEN, refreshToken, REFRESH_TOKEN_MAX_AGE);

    this.setState({ auth: true, tokens: new UserTokens({ accessToken, refreshToken }) });
  };

  public logout = (): void => {
    deleteCookie(ACCESS_TOKEN);
    deleteCookie(REFRESH_TOKEN);

    this.setState({ auth: false, tokens: undefined });
  };

  public render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export {
  type App, type AppState,
  AppContext, AppProvider,
};
