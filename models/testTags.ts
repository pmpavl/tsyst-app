export default class TestTags {
  complexity: string;

  classes: string;

  points: string;

  constructor(_complexity = '', _classes = '', _points = '') {
    this.complexity = _complexity;
    this.classes = _classes;
    this.points = _points;
  }

  toJSON() {
    return {
      complexity: this.complexity,
      classes: this.classes,
      points: this.points,
    };
  }
}
