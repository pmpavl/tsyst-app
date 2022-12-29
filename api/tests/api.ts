import { ErrorDefault, SearchCountPagesResponse, SearchResponse } from '@/api';

class APITests {
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

  public async search(pageStr = '', name = '', classStr = ''): Promise<ErrorDefault | SearchResponse> {
    const query = new URLSearchParams({ page: pageStr, name: name, class: classStr });

    const response: ErrorDefault | SearchResponse = await this.request<SearchResponse>(
      new Request(`${this.url}/tests/search?${query.toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }),
    );

    return response;
  }

  public async searchCountPages(name = '', classStr = ''): Promise<ErrorDefault | SearchCountPagesResponse> {
    const query = new URLSearchParams({ name: name, class: classStr });

    const response: ErrorDefault | SearchCountPagesResponse = await this.request<SearchCountPagesResponse>(
      new Request(`${this.url}/tests/searchCountPages?${query.toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }),
    );

    return response;
  }
}

const apiTests: APITests = new APITests(
  process.env.NEXT_PUBLIC_HOST || 'http://localhost:7784',
);

export default apiTests;
