export default class PasswordSaltByEmailRequest {
  email: string;

  constructor(_email: string) {
    this.email = _email;
  }

  Headers(): Headers {
    return new Headers({
      'Content-Type': 'application/json',
    });
  }

  URLSearchParams(): URLSearchParams {
    return new URLSearchParams({
      email: this.email,
    });
  }

  toJSON() {
    return {
      email: this.email,
    };
  }
}
