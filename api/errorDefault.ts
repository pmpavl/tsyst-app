export enum ErrorDefaultMessage {
  'ErrRequestTimeout' = 'service waiting timeout',
  'ErrServiceUnavailable' = 'service does not answer',
}

export enum ErrorDefaultAuthMessage {
  'ErrAcessTokenNotExist' = 'access token not exist',
  'ErrRefreshTokenNotExist' = 'refresh token not exist',
  'ErrEmailNotExist' = 'email not exist',
  'ErrEmailAlreadyExist' = 'email already exist',
  'ErrEmailNotVerified' = 'email not verified',
  'ErrWrongPassword' = 'wrong password',
}

export enum ErrorDefaultTestsMessage {
  'ErrNothingFound' = 'nothing found',
}

export class ErrorDefault extends Error {
  private status: number;

  private code: string;

  constructor(status: number, code: string, message: string) {
    super(message);

    this.status = status;
    this.code = code;
  }

  /** 400 */
  isBadRequest(): boolean { return this.status === 400; }

  /** 403 */
  isForbidden(): boolean { return this.status === 403; }

  /** 404 */
  isNotFound(): boolean { return this.status === 404; }

  /** 408 */
  isRequestTimeout(): boolean { return this.status === 408; }

  /** 500 */
  isInternalServerError(): boolean { return this.status === 500; }

  /** 503 */
  isServiceUnavailable(): boolean { return this.status === 503; }
}

export const ErrorRequestTimeout = new ErrorDefault(408, 'Request Timeout', ErrorDefaultMessage.ErrRequestTimeout);

export const ErrorServiceUnavailable = new ErrorDefault(503, 'Service Unavailable', ErrorDefaultMessage.ErrServiceUnavailable);
