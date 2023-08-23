interface ITestTags {
  complexity: string;
  classes: string;
  points: string;
  timePassing: string;
}

class TestTags {
  public complexity: string;

  public classes: string;

  public points: string;

  public timePassing: string;

  constructor(obj: ITestTags) {
    this.complexity = obj.complexity;
    this.classes = obj.classes;
    this.points = obj.points;
    this.timePassing = obj.timePassing;
  }
}

export { TestTags, type ITestTags };
