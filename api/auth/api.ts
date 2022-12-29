import { AuthenticationRequest, AuthenticationResponse, EmailExistResponse, EmailSaltResponse, ErrorDefault, IdentificationResponse, RefreshRequest, RefreshResponse, RegistrationRequest, RegistrationResponse } from '@/api';
import { ACCESS_TOKEN, deleteCookie, getCookie, REFRESH_TOKEN, setCookie } from '@/utils';

class APIAuth {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  /**
   * Generic request method for using fetch.
   * @param requestInfo request information to send with fetch.
   * @returns a Promise containing the `ErrorDefault` and `T`.
   */
  private async request<T>(requestInfo: RequestInfo): Promise<ErrorDefault | T> {
    try {
      const response: Response = await fetch(requestInfo);
      const body = await response.json();

      if (!response.ok) {
        throw new ErrorDefault(response.status, body.code, body.message);
      }

      return body as T;
    } catch (error) {
      if (error instanceof ErrorDefault) {
        return error;
      }

      return new ErrorDefault(503, 'Service Unavailable', 'Service Does Not Answer');
    }
  }

  public async registration(req: RegistrationRequest): Promise<ErrorDefault | RegistrationResponse> {
    const response: ErrorDefault | RegistrationResponse = await this.request<RegistrationResponse>(
      new Request(`${this.url}/auth/registration`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(req),
      }),
    );

    return response;
  }

  public async authentication(req: AuthenticationRequest): Promise<ErrorDefault | AuthenticationResponse> {
    const response: ErrorDefault | AuthenticationResponse = await this.request<AuthenticationResponse>(
      new Request(`${this.url}/auth/authentication`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(req),
      }),
    );

    return response;
  }

  public async auth(): Promise<ErrorDefault | boolean> {
    if (getCookie(ACCESS_TOKEN) === '') { // Refresh if access token is expire
      const responseRefresh = await this.refresh();

      if (responseRefresh instanceof ErrorDefault) return responseRefresh;
      if (!responseRefresh) return false; // Not valid refresh token
    }

    const ident = await this.identification();
    if (ident instanceof ErrorDefault) return ident;

    if (!ident) { // If not exist try to refresh access and identification again
      const responseRefresh = await this.refresh();

      if (responseRefresh instanceof ErrorDefault) return responseRefresh;
      if (!responseRefresh) return false;

      return this.identification();
    }

    return true;
  }

  public async identification(): Promise<ErrorDefault | boolean> {
    const query = new URLSearchParams({ access: getCookie(ACCESS_TOKEN) });
    const response: ErrorDefault | IdentificationResponse = await this.request<IdentificationResponse>(
      new Request(`${this.url}/auth/identification?${query.toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }),
    );

    if (response instanceof ErrorDefault) return response;

    return response.exist;
  }

  public async refresh(): Promise<ErrorDefault | boolean> {
    const refreshToken = getCookie(REFRESH_TOKEN);
    if (refreshToken === '') return false;

    const response: ErrorDefault | RefreshResponse = await this.request<RefreshResponse>(
      new Request(`${this.url}/auth/refresh`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ refreshToken: refreshToken } as RefreshRequest),
      }),
    );

    if (response instanceof ErrorDefault) {
      if (response.isForbidden()) {
        deleteCookie(ACCESS_TOKEN);
        deleteCookie(REFRESH_TOKEN);

        return false;
      }

      return response;
    }

    setCookie(ACCESS_TOKEN, response.accessToken, response.accessTokenMaxAge);

    return true;
  }

  public async emailExist(email: string): Promise<ErrorDefault | EmailExistResponse> {
    const query = new URLSearchParams({ email: email });

    const response: ErrorDefault | EmailExistResponse = await this.request<EmailExistResponse>(
      new Request(`${this.url}/auth/emailExist?${query.toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }),
    );

    return response;
  }

  public async emailSalt(email: string): Promise<ErrorDefault | EmailSaltResponse> {
    const query = new URLSearchParams({ email: email });

    const response: ErrorDefault | EmailSaltResponse = await this.request<EmailSaltResponse>(
      new Request(`${this.url}/auth/emailSalt?${query.toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }),
    );

    return response;
  }
}

const apiAuth: APIAuth = new APIAuth(
  process.env.NEXT_PUBLIC_HOST || 'http://localhost:7784',
);

export default apiAuth;
