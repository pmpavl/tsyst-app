import { Composer } from '@/api';

interface IRegistrationRequest {
  email: string;
  password: string;
  passwordSalt: string;
}

class RegistrationRequest implements Composer {
  public email: string;

  public password: string;

  public passwordSalt: string;

  private _method = 'POST';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  public constructor(obj: IRegistrationRequest) {
    this.email = obj.email;
    this.password = obj.password;
    this.passwordSalt = obj.passwordSalt;
  }

  public compose = (host: string): Request => new Request(
    `${host}/auth/registration`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(this),
    },
  );

  public toJSON() {
    return {
      email: this.email,
      password: this.password,
      passwordSalt: this.passwordSalt,
    };
  }
}

interface IPasswordSaltByEmailRequest { email: string }

class PasswordSaltByEmailRequest implements Composer {
  public email: string;

  private searchParams: URLSearchParams;

  private _method = 'GET';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IPasswordSaltByEmailRequest) {
    this.email = obj.email;
    this.searchParams = new URLSearchParams({ email: obj.email });
  }

  public compose = (host: string): Request => new Request(
    `${host}/auth/passwordSaltByEmail?${this.searchParams.toString()}`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json' }),
    },
  );

  public toJSON() { return {}; }
}

interface IAuthenticationRequest {
  email: string;
  password: string;
}

class AuthenticationRequest implements Composer {
  public email: string;

  public password: string;

  private _method = 'POST';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IAuthenticationRequest) {
    this.email = obj.email;
    this.password = obj.password;
  }

  public compose = (host: string): Request => new Request(
    `${host}/auth/authentication`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(this),
    },
  );

  public toJSON() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}

interface IRefreshRequest { refreshToken: string; }

class RefreshRequest implements Composer {
  public refreshToken: string;

  private _method = 'POST';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IRefreshRequest) {
    this.refreshToken = obj.refreshToken;
  }

  public compose = (host: string): Request => new Request(
    `${host}/auth/refresh`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json', 'X-Refresh-Token': this.refreshToken }),
    },
  );

  public toJSON() { return {}; }
}

interface IIdentificationRequest { accessToken: string; }

class IdentificationRequest implements Composer {
  public accessToken: string;

  private _method = 'GET';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IIdentificationRequest) {
    this.accessToken = obj.accessToken;
  }

  public compose = (host: string): Request => new Request(
    `${host}/auth/identification`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json', 'X-Access-Token': this.accessToken }),
    },
  );

  public toJSON() { return {}; }
}

export {
  RegistrationRequest, type IRegistrationRequest,
  PasswordSaltByEmailRequest, type IPasswordSaltByEmailRequest,
  AuthenticationRequest, type IAuthenticationRequest,
  RefreshRequest, type IRefreshRequest,
  IdentificationRequest, type IIdentificationRequest,
};
