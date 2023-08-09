export default class UserTokens {
  accessToken: string;

  refreshToken: string;

  constructor(_accessToken = '', _refreshToken = '') {
    this.accessToken = _accessToken;
    this.refreshToken = _refreshToken;
  }

  toJSON() {
    return {};
  }
}
