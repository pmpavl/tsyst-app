import { TestTags, TestRepeat, TestTask } from '@/models';

export default class Test {
  path: string;

  name: string;

  description: string;

  tags: TestTags;

  repeat: TestRepeat;

  tasks: Array<TestTask>;

  constructor(_path = '', _name = '', _description = '', _tags = new TestTags, _repeat = new TestRepeat, _tasks = new Array<TestTask>) {
    this.path = _path;
    this.name = _name;
    this.description = _description;
    this.tags = _tags;
    this.repeat = _repeat;
    this.tasks = _tasks;
  }

  toJSON() {
    return {
      path: this.path,
      name: this.name,
      description: this.description,
      tags: this.tags,
      repeat: this.repeat,
      tasks: this.tasks,
    };
  }
}
