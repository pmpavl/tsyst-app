export default class ErrorDefault extends Error {
  private status: number;

  private code: string;

  constructor(status: number, code: string, message: string) {
    super(message);

    this.status = status;
    this.code = code;
  }

  isServerError(): boolean { return this.status >= 500 && this.status < 600; }

  isClientError(): boolean { return this.status >= 400 && this.status < 500; }

  isForbidden(): boolean { return this.status === 403; }
}
