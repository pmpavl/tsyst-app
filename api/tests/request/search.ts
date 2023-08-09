export default class SearchRequest {
  accessToken: string;

  name: string;

  class: number;

  complexity: string;

  page: number;

  constructor(_name = '', _class = 0, _complexity = '', _page = 0, _accessToken = '') {
    this.accessToken = _accessToken;
    this.name = _name;
    this.class = _class;
    this.complexity = _complexity;
    this.page = _page;
  }

  URLSearchParams(): URLSearchParams {
    return new URLSearchParams({
      name: this.name,
      class: this.class === 0 ? '' : this.class.toString(),
      complexity: this.complexity,
      page: this.page === 0 ? '' : this.page.toString(),
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
