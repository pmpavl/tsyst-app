import { TaskTags, ITaskTags } from '@/models';

interface IPassageTask {
  condition: string;
  answer: string;
  tags: ITaskTags;
  radio?: Array<string>;
  points: string;
  correct: boolean;
  answerUser?: string;
  timeSpent?: string;
}

class PassageTask {
  public condition: string;

  public answer: string;

  public tags: TaskTags;

  public radio?: Array<string>;

  public points: string;

  public correct: boolean;

  public answerUser?: string;

  public timeSpent?: string;

  constructor(obj: IPassageTask) {
    this.condition = obj.condition;
    this.answer = obj.answer;
    this.tags = new TaskTags(obj.tags);
    this.radio = obj.radio;
    this.points = obj.points;
    this.correct = obj.correct;
    this.answerUser = obj.answerUser;
    this.timeSpent = obj.timeSpent;
  }

  public isAnswered(): boolean { return this.answerUser !== undefined; }
}

export { PassageTask, type IPassageTask };
