interface ITestTask {
  complexity: string;
  themes: Array<string>;
  points: string;
}

class TestTask {
  public complexity: string;

  public themes: Array<string>;

  public points: string;

  constructor(obj: ITestTask) {
    this.complexity = obj.complexity;
    this.themes = obj.themes;
    this.points = obj.points;
  }
}

export { TestTask, type ITestTask };
