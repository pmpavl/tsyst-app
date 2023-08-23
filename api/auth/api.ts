import { convertSecondsToMilliseconds } from '@/lib/utils';
import {
  ErrorDefault, ErrorRequestTimeout, ErrorServiceUnavailable,
  Composer,
  RegistrationRequest,
  PasswordSaltByEmailRequest, IPasswordSaltByEmailResponse,
  AuthenticationRequest, IAuthenticationResponse,
  RefreshRequest, IRefreshResponse,
  IdentificationRequest,
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
   * User registration in system.
   *
   * Status: `400` | `409` | `503`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async registration(req: RegistrationRequest):
    Promise<ErrorDefault | null> { return this.send(req); }

  /**
   * Get user password salt by email.
   *
   * Status: `400` | `404` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async passwordSaltByEmail(req: PasswordSaltByEmailRequest):
    Promise<ErrorDefault | IPasswordSaltByEmailResponse> { return this.send(req); }

  /**
   * Authentication user by email and hash password.
   *
   * Status: `400` | `403` | `404` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async authentication(req: AuthenticationRequest):
    Promise<ErrorDefault | IAuthenticationResponse> { return this.send(req); }

  /**
   * Refresh access token by refresh token.
   *
   * Status: `400` | `404` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async refresh(req: RefreshRequest):
    Promise<ErrorDefault | IRefreshResponse> { return this.send(req); }

  /**
   * Identification user by access token.
   *
   * Status: `400` | `403` | `500`.
   *
   * Additional status: `200` | `408` | `503`.
   */
  public async identification(req: IdentificationRequest):
    Promise<ErrorDefault | null> { return this.send(req); }
}

const APIAuth: API = new API(process.env.NEXT_PUBLIC_HOST || 'http://localhost:7784');

export default APIAuth;
