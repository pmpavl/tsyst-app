export default class TaskTags {
  type: string;

  complexity: string;

  themes: Array<string>;

  constructor(_type = '', _complexity = '', _themes = new Array<string>) {
    this.type = _type;
    this.complexity = _complexity;
    this.themes = _themes;
  }

  toJSON() {
    return {
      type: this.type,
      complexity: this.complexity,
      themes: this.themes,
    };
  }
}
