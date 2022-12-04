import React from 'react';
import { PaletteMode } from '@mui/material';

export type AppMeta = {
  isLoading: boolean
  isAuth: boolean,
  paletteMode: PaletteMode,
  setIsAuth: (isAuth: boolean) => void
  setPaletteMode: (paletteMode: PaletteMode) => void
};

export const AppMetaContext = React.createContext<AppMeta>({} as AppMeta);

export default class AppMetaProvider extends React.Component<React.PropsWithChildren> {
  localStorageKey = {
    isAuth: 'isAuth',
    paletteMode: 'paletteMode',
  };

  state = {
    isLoading: true,
    isAuth: false,
    paletteMode: 'light' as PaletteMode,
  };

  componentDidMount() {
    const lsIsAuth = localStorage.getItem(this.localStorageKey.isAuth);
    const lsPaletteMode = localStorage.getItem(this.localStorageKey.paletteMode);

    this.setState({
      isLoading: false,
      isAuth: lsIsAuth === 'true',
      paletteMode: lsPaletteMode === null ? 'light' : lsPaletteMode as PaletteMode,
    });
  }

  setIsAuth = (isAuth: boolean) => {
    this.setState({ isAuth });
    localStorage.setItem(this.localStorageKey.isAuth, String(isAuth));
  };

  setPaletteMode = (paletteMode: PaletteMode) => {
    this.setState({ paletteMode });
    localStorage.setItem(this.localStorageKey.paletteMode, paletteMode);
  };

  render() {
    const { children } = this.props;
    const { isLoading, isAuth, paletteMode } = this.state;
    const { setIsAuth, setPaletteMode } = this;

    return (
      <AppMetaContext.Provider
        value={{
          isLoading, isAuth, paletteMode,
          setIsAuth, setPaletteMode,
        }}
      >
        {children}
      </AppMetaContext.Provider>
    );
  }
}
