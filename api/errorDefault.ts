enum ErrorDefaultMessage {
  'ErrRequestTimeout' = 'service waiting timeout',
  'ErrServiceUnavailable' = 'service does not answer',
}

enum ErrorDefaultAuthMessage {
  'ErrAcessTokenNotExist' = 'access token not exist',
  'ErrRefreshTokenNotExist' = 'refresh token not exist',
  'ErrEmailNotExist' = 'email not exist',
  'ErrEmailAlreadyExist' = 'email already exist',
  'ErrEmailNotVerified' = 'email not verified',
  'ErrWrongPassword' = 'wrong password',
}

enum ErrorDefaultPassageMessage {
  'ErrAccessTokenNotExist' = 'access token not exist',
  'ErrTestPathNotExist' = 'test path not exist',
  'ErrAlreadyStart' = 'already start',
  'ErrDisposable' = 'disposable',
  'ErrTimeToRepeat' = 'time to repeat',
  'ErrIncorrectlyCompiledTest' = 'incorrectly compiled test',
  'ErrPassageIDNotExist' = 'passage id not exist',
  'ErrIncorrectPassageUser' = 'incorrect passage user',
  'ErrAlreadyEnd' = 'already end',
  'ErrNotActualTaskNum' = 'not actual task num',
}

enum ErrorDefaultTestsMessage {
  'ErrNothingFound' = 'nothing found',
}

class ErrorDefault extends Error {
  private status: number;

  private code: string;

  constructor(status: number, code: string, message: string) {
    super(message);

    this.status = status;
    this.code = code;
  }

  /** `400` */
  public isBadRequest(): boolean { return this.status === 400; }

  /** `403` */
  public isForbidden(): boolean { return this.status === 403; }

  /** `404` */
  public isNotFound(): boolean { return this.status === 404; }

  /** `408` */
  public isRequestTimeout(): boolean { return this.status === 408; }

  /** `409` */
  public isConflict(): boolean { return this.status === 409; }

  /** `500` */
  public isInternalServerError(): boolean { return this.status === 500; }

  /** `503` */
  public isServiceUnavailable(): boolean { return this.status === 503; }
}

const ErrorRequestTimeout = new ErrorDefault(408, 'Request Timeout', ErrorDefaultMessage.ErrRequestTimeout);

const ErrorServiceUnavailable = new ErrorDefault(503, 'Service Unavailable', ErrorDefaultMessage.ErrServiceUnavailable);

export {
  ErrorDefaultMessage, ErrorDefaultAuthMessage, ErrorDefaultPassageMessage, ErrorDefaultTestsMessage,
  ErrorDefault,
  ErrorRequestTimeout, ErrorServiceUnavailable,
};
