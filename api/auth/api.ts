import { convertSecondsToMilliseconds } from '@/lib/utils';
import {
  ErrorDefault,
  ErrorRequestTimeout,
  ErrorServiceUnavailable,
} from '@/api/errorDefault';
import {
  RegistrationRequest,
  PasswordSaltByEmailRequest,
  PasswordSaltByEmailResponse,
  AuthenticationRequest,
  AuthenticationResponse,
  RefreshRequest,
  RefreshResponse,
  IdentificationRequest,
} from '@/api';

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
   * Registration user.
   *
   * Status: `200` | `400` | `408` | `409` | `500` | `503`.
   *
   * @param request
   */
  public async registration(request: RegistrationRequest): Promise<ErrorDefault | null> {
    const response: ErrorDefault | null = await this.request<null>(
      new Request(`${this.url}/auth/registration`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: request.Headers(),
        body: JSON.stringify(request),
      }),
    );

    return response;
  }

  /**
   * Get user password salt by email.
   *
   * Status: `200` | `400` | `404` | `408` | `500` | `503`.
   *
   * @param request
   */
  public async passwordSaltByEmail(request: PasswordSaltByEmailRequest): Promise<ErrorDefault | PasswordSaltByEmailResponse> {
    const response: ErrorDefault | PasswordSaltByEmailResponse = await this.request<PasswordSaltByEmailResponse>(
      new Request(`${this.url}/auth/passwordSaltByEmail?${request.URLSearchParams().toString()}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: request.Headers(),
      }),
    );

    return response;
  }

  /**
   * Authentication user by email and hash password.
   *
   * Status: `200` | `400` | `403` | `404` | `408` | `500` | `503`.
   *
   * @param request
   */
  public async authentication(request: AuthenticationRequest): Promise<ErrorDefault | AuthenticationResponse> {
    const response: ErrorDefault | AuthenticationResponse = await this.request<AuthenticationResponse>(
      new Request(`${this.url}/auth/authentication`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: request.Headers(),
        body: JSON.stringify(request),
      }),
    );

    return response;
  }

  /**
   * Refresh access token by refresh token.
   *
   * Status: `200` | `400` | `404` | `408` | `500` | `503`.
   *
   * @param request
   */
  public async refresh(request: RefreshRequest): Promise<ErrorDefault | RefreshResponse> {
    const response: ErrorDefault | RefreshResponse = await this.request<RefreshResponse>(
      new Request(`${this.url}/auth/refresh`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: request.Headers(),
      }),
    );

    return response;
  }

  /**
   * Identification user by access token.
   *
   * Status: `200` | `400` | `404` | `408` | `500` | `503`.
   *
   * @param request
   */
  public async identification(request: IdentificationRequest): Promise<ErrorDefault | null> {
    const response: ErrorDefault | null = await this.request<null>(
      new Request(`${this.url}/auth/identification`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: request.Headers(),
      }),
    );

    return response;
  }
}

const APIauth: API = new API(process.env.NEXT_PUBLIC_HOST || 'http://localhost:7784');

export default APIauth;
