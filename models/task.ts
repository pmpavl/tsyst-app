import { TaskTags } from '@/models';

export default class Task {
  condition: string;

  answer: string;

  tags: TaskTags;

  radio: Array<string>;

  constructor(_condition = '', _answer = '', _tags = new TaskTags, _radio = new Array<string>) {
    this.condition = _condition;
    this.answer = _answer;
    this.tags = _tags;
    this.radio = _radio;
  }

  toJSON() {
    return {
      condition: this.condition,
      answer: this.answer,
      tags: this.tags,
      radio: this.radio,
    };
  }
}
