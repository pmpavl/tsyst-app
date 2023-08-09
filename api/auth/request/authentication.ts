export default class AuthenticationRequest {
  email: string;

  password: string;

  constructor(_email: string, _password: string) {
    this.email = _email;
    this.password = _password;
  }

  Headers(): Headers {
    return new Headers({
      'Content-Type': 'application/json',
    });
  }

  toJSON() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
