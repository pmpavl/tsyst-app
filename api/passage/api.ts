import { convertSecondsToMilliseconds } from '@/lib/utils';
import {
  ErrorDefault, ErrorRequestTimeout, ErrorServiceUnavailable,
  Composer,
  PassageCreateRequest, IPassageCreateResponse,
  PassageReadRequest, IPassageReadResponse,
  PassageUpdateRequest, IPassageUpdateResponse,
  PassageEndRequest, IPassageEndResponse,
} from '@/api';

const DEFAULT_TIMEOUT: number = convertSecondsToMilliseconds(2);

class API {
  private host: string;

  private timeout: number;

  constructor(host: string) {
    this.host = host;
    this.timeout = DEFAULT_TIMEOUT;
  }

  /**
   * Generic do request method for using fetch with timeout and service unavailable.
   *
   * Additional status: `200` | `408` | `503`.
   *
   * @param input request information to send with fetch.
   * @returns a Promise containing the `ErrorDefault` and `T`.
   */
  private async do<T>(input: RequestInfo | URL, init?: RequestInit): Promise<ErrorDefault | T> {
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

  /** Generic compose request and do method. */
  private async send<C extends Composer, T>(req: C): Promise<ErrorDefault | T> { return this.do(req.compose(this.host)); }

  /**
   * Create passage.
   *
   * Status: `400` | `403` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async create(req: PassageCreateRequest):
    Promise<ErrorDefault | IPassageCreateResponse> { return this.send(req); }

  /**
   * Read passage.
   *
   * Status: `400` | `403` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async read(req: PassageReadRequest):
    Promise<ErrorDefault | IPassageReadResponse> { return this.send(req); }

  /**
   * Update passage.
   *
   * Status: `400` | `403` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async update(req: PassageUpdateRequest):
    Promise<ErrorDefault | IPassageUpdateResponse> { return this.send(req); }

  /**
   * End passage.
   *
   * Status: `400` | `403` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async end(req: PassageEndRequest):
    Promise<ErrorDefault | IPassageEndResponse> { return this.send(req); }
}

const APIPassage: API = new API(process.env.NEXT_PUBLIC_HOST || 'http://localhost:7784');

export default APIPassage;
