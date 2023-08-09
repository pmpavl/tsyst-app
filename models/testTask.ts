export default class TestTask {
  complexity: string;

  themes: Array<string>;

  constructor(_complexity = '', _themes = new Array<string>) {
    this.complexity = _complexity;
    this.themes = _themes;
  }

  toJSON() {
    return {
      complexity: this.complexity,
      themes: this.themes,
    };
  }
}
