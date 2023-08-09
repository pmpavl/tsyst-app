import { TestTags } from '@/models';

export default class TestCard {
  path: string;

  name: string;

  description: string;

  tags: TestTags;

  constructor(_path = '', _name = '', _description = '', _tags = new TestTags) {
    this.path = _path;
    this.name = _name;
    this.description = _description;
    this.tags = _tags;
  }

  toJSON() {
    return {
      path: this.path,
      name: this.name,
      description: this.description,
      tags: this.tags,
    };
  }
}
