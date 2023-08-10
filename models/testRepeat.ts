export default class TestTags {
  type: string;

  timeToRepeat: number;

  constructor(_type = '', _timeToRepeat = 0) {
    this.type = _type;
    this.timeToRepeat = _timeToRepeat;
  }

  toJSON() {
    return {
      type: this.type,
      timeToRepeat: this.timeToRepeat,
    };
  }
}
