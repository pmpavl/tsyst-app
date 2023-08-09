export default class LandingRequest {
  accessToken: string;

  path: string;

  constructor(_path = '', _accessToken = '') {
    this.accessToken = _accessToken;
    this.path = _path;
  }

  URLSearchParams(): URLSearchParams {
    return new URLSearchParams({
      path: this.path,
    });
  }

  Headers(): Headers {
    return this.accessToken === ''
      ? new Headers({
        'Content-Type': 'application/json',
      })
      : new Headers({
        'Content-Type': 'application/json',
        'X-Access-Token': this.accessToken,
      });
  }

  toJSON() {
    return {};
  }
}
