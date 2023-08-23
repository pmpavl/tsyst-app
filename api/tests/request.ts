import { Composer } from '@/api';

interface ITestsSearchRequest {
  accessToken?: string;
  name?: string;
  class?: number;
  complexity?: string;
  page?: number;
}

class TestsSearchRequest implements Composer {
  public accessToken: string;

  public name: string;

  public class: number;

  public complexity: string;

  public page: number;

  private searchParams: URLSearchParams;

  private _method = 'GET';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: ITestsSearchRequest) {
    this.accessToken = obj?.accessToken || '';
    this.name = obj?.name || '';
    this.class = obj?.class || 0;
    this.complexity = obj?.complexity || '';
    this.page = obj?.page || 0;
    this.searchParams = new URLSearchParams({
      name: this?.name || '',
      class: this.class === 0 ? '' : this.class.toString(),
      complexity: this.complexity,
      page: this.page === 0 ? '' : this.page.toString(),
    });
  }

  public compose = (host: string): Request => new Request(
    `${host}/tests/search?${this.searchParams.toString()}`,
    {
      method: this._method,
      mode: this._mode,
      cache: this._cache,
      headers: new Headers({ 'Content-Type': 'application/json', 'X-Access-Token': this.accessToken }),
    },
  );

  public toJSON() { return {}; }
}

interface ITestsLandingRequest {
  accessToken?: string;
  path: string;
}

class TestsLandingRequest implements Composer {
  public accessToken: string;

  public path: string;

  private searchParams: URLSearchParams;

  private _method = 'GET';

  private _mode: RequestMode = 'cors';

  private _cache: RequestCache = 'no-cache';

  constructor(obj: ITestsLandingRequest) {
    this.accessToken = obj.accessToken || '';
    this.path = obj.path;
    this.searchParams = new URLSearchParams({ path: this.path });
  }

  public compose = (host: string): Request => new Request(
    `${host}/tests/landing?${this.searchParams.toString()}`,
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
  TestsSearchRequest, type ITestsSearchRequest,
  TestsLandingRequest, type ITestsLandingRequest,
};
