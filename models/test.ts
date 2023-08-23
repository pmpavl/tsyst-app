import {
  TestTags, ITestTags,
  TestRepeat, ITestRepeat,
  TestTask, ITestTask,
  TestPassage, ITestPassage,
} from '@/models';

interface ITest {
  path: string;
  name: string;
  description: string;
  tags: ITestTags;
  repeat: ITestRepeat;
  tasks: Array<ITestTask>;
  passages?: Array<ITestPassage>;
}

class Test {
  public path: string;

  public name: string;

  public description: string;

  public tags: TestTags;

  public repeat: TestRepeat;

  public tasks: Array<TestTask>;

  public passages?: Array<TestPassage>;

  constructor(obj: ITest) {
    this.path = obj.path;
    this.name = obj.name;
    this.description = obj.description;
    this.tags = new TestTags(obj.tags);
    this.repeat = new TestRepeat(obj.repeat);
    this.tasks = obj.tasks.map<TestTask>((task) => new TestTask(task));
    this.passages = obj.passages === undefined ? undefined : obj.passages.map<TestPassage>((passage) => new TestPassage(passage));
  }
}

export { Test, type ITest };
