import { IPassage } from '@/models';

interface IPassageCreateResponse { id: string }
interface IPassageReadResponse extends IPassage { }
interface IPassageUpdateResponse extends IPassage { }
interface IPassageEndResponse extends IPassage { }

export {
  type IPassageCreateResponse,
  type IPassageReadResponse,
  type IPassageUpdateResponse,
  type IPassageEndResponse,
};
