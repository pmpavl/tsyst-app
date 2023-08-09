import { TestCard } from '@/models';

export default class SearchResponse {
  countPages: number;

  cards: Array<TestCard>;

  constructor(_countPages: number, _cards: Array<TestCard>) {
    this.countPages = _countPages;
    this.cards = _cards;
  }

  toJSON() {
    return {
      countPages: this.countPages,
      cards: this.cards,
    };
  }
}
