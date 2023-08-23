import { convertNanosecondsToMilliseconds } from '@/lib/utils';

interface ITestRepeat {
  type: string;
  timeToRepeat: number;
}

class TestRepeat {
  public type: string;

  public timeToRepeat: number;

  constructor(obj: ITestRepeat) {
    this.type = obj.type;
    this.timeToRepeat = obj.timeToRepeat;
  }

  isDisposable = (): boolean => this.type === 'Тест можно пройти только один раз';

  isRepeatable = (): boolean => this.type === 'Тест можно пройти повторно';

  isCreatable = (end?: Date): boolean => {
    return end === undefined
      ? true
      : end.getTime() + convertNanosecondsToMilliseconds(this.timeToRepeat) < new Date().getTime();
  };
}

export { TestRepeat, type ITestRepeat };
