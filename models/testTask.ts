export default class TestTask {
  complexity: string;

  themes: Array<string>;

  points: string;

  constructor(_complexity = '', _themes = new Array<string>, _points = '') {
    this.complexity = _complexity;
    this.themes = _themes;
    this.points = _points;
  }

  toJSON() {
    return {
      complexity: this.complexity,
      themes: this.themes,
      points: this.points,
    };
  }
}
