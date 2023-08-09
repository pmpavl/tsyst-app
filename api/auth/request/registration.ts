export default class RegistrationRequest {
  email: string;

  password: string;

  passwordSalt: string;

  constructor(_email: string, _password: string, _passwordSalt: string) {
    this.email = _email;
    this.password = _password;
    this.passwordSalt = _passwordSalt;
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
      passwordSalt: this.passwordSalt,
    };
  }
}
