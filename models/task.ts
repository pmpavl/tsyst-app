import { TaskTags, ITaskTags } from '@/models';

interface ITask {
  condition: string;
  answer: string;
  tags: ITaskTags;
  radio: Array<string>;
}

class Task {
  public condition: string;

  public answer: string;

  public tags: TaskTags;

  public radio: Array<string>;

  constructor(obj: ITask) {
    this.condition = obj.condition;
    this.answer = obj.answer;
    this.tags = new TaskTags(obj.tags);
    this.radio = obj.radio;
  }
}

export { Task, type ITask };
