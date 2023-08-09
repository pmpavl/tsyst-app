export default class RefreshRequest {
  refreshToken: string;

  constructor(_refreshToken: string) {
    this.refreshToken = _refreshToken;
  }

  Headers(): Headers {
    return new Headers({
      'Content-Type': 'application/json',
      'X-Refresh-Token': this.refreshToken,
    });
  }

  toJSON() {
    return {};
  }
}
