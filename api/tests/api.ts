import { convertSecondsToMilliseconds } from '@/lib/utils';
import {
  ErrorDefault,
  ErrorRequestTimeout,
  ErrorServiceUnavailable,
} from '@/api/errorDefault';
import {
  SearchRequest,
  SearchResponse,
  LandingRequest,
} from '@/api';
import { Test } from '@/models';

const DEFAULT_TIMEOUT: number = convertSecondsToMilliseconds(2);

class API {
  private url: string;

  private timeout: number;

  constructor(url: string) {
    this.url = url;
    this.timeout = DEFAULT_TIMEOUT;
  }

  /**
   * Generic request method for using fetch with timeout.
   *
   * Status: `200` | `408` | `503`.
   *
   * @param input request information to send with fetch.
   * @returns a Promise containing the `ErrorDefault` and `T`.
   */
  private async request<T>(input: RequestInfo | URL, init?: RequestInit): Promise<ErrorDefault | T> {
    try {
      const controller: AbortController = new AbortController();
      const timeout: NodeJS.Timeout = setTimeout(() => controller.abort(), this.timeout);

      const response: Response = await fetch(input, { ...init, signal: controller.signal });
      clearTimeout(timeout);

      const body: any = await response.json();

      if (!response.ok) {
        throw new ErrorDefault(response.status, body.code, body.message);
      }

      return body as T;
    } catch (error: any) {
      if (error instanceof ErrorDefault) {
        return error;
      }

      if (error.name === 'AbortError') {
        return ErrorRequestTimeout;
      }

      return ErrorServiceUnavailable;
    }
  }

  /**
   * Search tests.
   *
   * Status: `200` | `400` | `408` | `500` | `503`.
   *
   * @param request
   */
  public async search(request: SearchRequest): Promise<ErrorDefault | SearchResponse> {
    const response: ErrorDefault | SearchResponse = await this.request<SearchResponse>(
      new Request(`${this.url}/tests/search?${request.URLSearchParams().toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: request.Headers(),
      }),
    );

    return response;
  }

  /**
   * Landing test page.
   *
   * Status: `200` | `400` | `404` | `408` | `500` | `503`.
   *
   * @param request
   */
  public async landing(request: LandingRequest): Promise<ErrorDefault | Test> {
    const response: ErrorDefault | Test = await this.request<Test>(
      new Request(`${this.url}/tests/landing?${request.URLSearchParams().toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: request.Headers(),
      }),
    );

    return response;
  }
}

const APItests: API = new API(process.env.NEXT_PUBLIC_HOST || 'http://localhost:7784');

export default APItests;
