interface ITestPassage {
  id: string;
  passed: boolean;
  start: string;
  end: string
}

class TestPassage {
  public id: string;

  public passed: boolean;

  public start: Date;

  public end: Date;

  public state: 'process' | 'success' | 'fail';

  constructor(obj: ITestPassage) {
    this.id = obj.id;
    this.passed = obj.passed;
    this.start = new Date(obj.start);
    this.end = new Date(obj.end);

    this.state = new Date().getTime() < this.end.getTime() ? 'process' : this.passed ? 'success' : 'fail';
  }

  public border(): string {
    switch (this.state) {
      case 'process':
        return 'border-warning/80';
      case 'success':
        return 'border-success/80';
      case 'fail':
        return 'border-destructive/80';
    }
  }
}

export { TestPassage, type ITestPassage };
