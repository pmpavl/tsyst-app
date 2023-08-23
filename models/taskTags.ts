interface ITaskTags {
  type: string;
  complexity: string;
  themes: Array<string>;
}

class TaskTags {
  public type: string;

  public complexity: string;

  public themes: Array<string>;

  constructor(obj: ITaskTags) {
    this.type = obj.type;
    this.complexity = obj.complexity;
    this.themes = obj.themes;
  }
}

export { TaskTags, type ITaskTags };
