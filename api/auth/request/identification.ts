export default class IdentificationRequest {
  accessToken: string;

  constructor(_accessToken: string) {
    this.accessToken = _accessToken;
  }

  Headers(): Headers {
    return new Headers({
      'Content-Type': 'application/json',
      'X-Access-Token': this.accessToken,
    });
  }

  toJSON() {
    return {};
  }
}
