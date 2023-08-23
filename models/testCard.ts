import {
  TestTags, ITestTags,
  TestPassage, ITestPassage,
} from '@/models';

interface ITestCard {
  path: string;
  name: string;
  description: string;
  tags: ITestTags;
  lastPassage?: ITestPassage
}

class TestCard {
  public path: string;

  public name: string;

  public description: string;

  public tags: TestTags;

  public lastPassage?: TestPassage;

  constructor(obj: ITestCard) {
    this.path = obj.path;
    this.name = obj.name;
    this.description = obj.description;
    this.tags = new TestTags(obj.tags);
    this.lastPassage = obj.lastPassage === undefined ? undefined : new TestPassage(obj.lastPassage);
  }
}

export { TestCard, type ITestCard };
