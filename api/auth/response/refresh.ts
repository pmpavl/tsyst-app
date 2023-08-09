export default class RefreshResponse {
  accessToken: string;

  constructor(_accessToken: string) {
    this.accessToken = _accessToken;
  }

  toJSON() {
    return {};
  }
}
