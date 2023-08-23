import { ITest, ITestCard } from '@/models';

interface ITestsSearchResponse { countPages: number; cards: Array<ITestCard>; }
interface ITestsLandingResponse extends ITest { }

export {
  type ITestsSearchResponse,
  type ITestsLandingResponse,
};
