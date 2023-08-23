import { PassageTask, IPassageTask } from '@/models';

interface IPassage {
  path: string;
  name: string;
  points: string;
  score: string;
  passed: boolean;
  tasks: Array<IPassageTask>;
  start: string;
  end: string;
}

class Passage {
  public id: string;

  public path: string;

  public name: string;

  public points: string;

  public score: string;

  public passed: boolean;

  public tasks: Array<PassageTask>;

  public start: Date;

  public end: Date;

  constructor(id: string, obj: IPassage) {
    this.id = id;
    this.path = obj.path;
    this.name = obj.name;
    this.points = obj.points;
    this.score = obj.score;
    this.passed = obj.passed;
    this.tasks = obj.tasks.map<PassageTask>((task) => new PassageTask(task));
    this.start = new Date(obj.start);
    this.end = new Date(obj.end);
  }

  public finished(): boolean { return this.end.getTime() < new Date().getTime() || this.currentTaskIndex() === -1; }

  public currentTask(): PassageTask | undefined { return this.tasks.find((task) => !task.isAnswered()); }

  public currentTaskIndex(): number { return this.tasks.findIndex((task) => !task.isAnswered()); }
}

export { Passage, type IPassage };
