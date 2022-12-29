import { Test } from '@/api';

export interface SearchResponse {
  tests: Array<Test>
}

export interface SearchCountPagesResponse {
  countPages: number
}
