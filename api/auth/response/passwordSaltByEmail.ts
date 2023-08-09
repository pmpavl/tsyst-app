export default class PasswordSaltByEmailResponse {
  passwordSalt: string;

  constructor(_passwordSalt: string) {
    this.passwordSalt = _passwordSalt;
  }

  toJSON() {
    return {};
  }
}
