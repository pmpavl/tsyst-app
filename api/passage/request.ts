import { Composer } from '@/api';

interface IPassageCreateRequest {
  accessToken?: string;
  path: string;
}

class PassageCreateRequest implements Composer {
  public accessToken: string;

  public path: string;

  private searchParams: URLSearchParams;

  private _method = 'POST';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IPassageCreateRequest) {
    this.accessToken = obj.accessToken || '';
    this.path = obj.path;
    this.searchParams = new URLSearchParams({ path: obj.path });
  }

  public compose = (host: string): Request => new Request(
    `${host}/passage?${this.searchParams.toString()}`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json', 'X-Access-Token': this.accessToken }),
      body: JSON.stringify(this),
    },
  );

  public toJSON() { return {}; }
}

interface IPassageReadRequest {
  accessToken?: string;
  id: string;
}

class PassageReadRequest implements Composer {
  public accessToken: string;

  public id: string;

  private searchParams: URLSearchParams;

  private _method = 'GET';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IPassageReadRequest) {
    this.accessToken = obj.accessToken || '';
    this.id = obj.id;
    this.searchParams = new URLSearchParams({ id: this.id });
  }

  public compose = (host: string): Request => new Request(
    `${host}/passage?${this.searchParams.toString()}`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json', 'X-Access-Token': this.accessToken }),
    },
  );

  public toJSON() { return {}; }
}

interface IPassageUpdateRequest {
  accessToken?: string;
  id: string;
  num: number;
  answerUser: string;
}

class PassageUpdateRequest implements Composer {
  public accessToken: string;

  public id: string;

  public num: number;

  public answerUser: string;

  private searchParams: URLSearchParams;

  private _method = 'PATCH';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IPassageUpdateRequest) {
    this.accessToken = obj.accessToken || '';
    this.id = obj.id;
    this.num = obj.num;
    this.answerUser = obj.answerUser;
    this.searchParams = new URLSearchParams({ id: this.id });
  }

  public compose = (host: string): Request => new Request(
    `${host}/passage?${this.searchParams.toString()}`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json', 'X-Access-Token': this.accessToken }),
      body: JSON.stringify(this),
    },
  );

  public toJSON() {
    return {
      num: this.num,
      answerUser: this.answerUser,
    };
  }
}

interface IPassageEndRequest {
  accessToken?: string;
  id: string;
}

class PassageEndRequest implements Composer {
  public accessToken: string;

  public id: string;

  private searchParams: URLSearchParams;

  private _method = 'PATCH';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: IPassageEndRequest) {
    this.accessToken = obj.accessToken || '';
    this.id = obj.id;
    this.searchParams = new URLSearchParams({ id: this.id });
  }

  public compose = (host: string): Request => new Request(
    `${host}/passage/end?${this.searchParams.toString()}`,
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
  PassageCreateRequest, type IPassageCreateRequest,
  PassageReadRequest, type IPassageReadRequest,
  PassageUpdateRequest, type IPassageUpdateRequest,
  PassageEndRequest, type IPassageEndRequest,
};
