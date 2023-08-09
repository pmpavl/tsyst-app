export default class TestTags {
  complexity: string;

  classes: string;

  constructor(_complexity = '', _classes = '') {
    this.complexity = _complexity;
    this.classes = _classes;
  }

  toJSON() {
    return {
      complexity: this.complexity,
      classes: this.classes,
    };
  }
}
