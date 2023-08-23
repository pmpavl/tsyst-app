import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import {
  BadgeSkeleton, BadgeView,
  TestCreatePassage,
  TestPassageSkeleton, TestPassageView,
  TestTaskSkeleton, TestTaskView,
} from '@/components';
import { ITest, Test } from '@/models';

function TestSkeleton(): JSX.Element {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <Skeleton className='h-[36px] w-48 mobile:h-[40px]' />
        <div className='flex flex-row flex-wrap gap-2'>
          <BadgeSkeleton />
          <BadgeSkeleton />
          <BadgeSkeleton />
        </div>
        <div className='flex flex-row flex-wrap gap-2'>
          <BadgeSkeleton />
          <BadgeSkeleton />
        </div>
        <Skeleton className='h-[112px] w-full max-w-[700px]' />
      </div>
      <Separator />
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <Skeleton className='h-[28px] w-48 mobile:h-[32px]' />
        <Skeleton className='h-[28px] w-full max-w-[700px]' />
      </div>
      <div className='hide-scroll-bar flex items-start gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-2 shadow-sm'>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((key) => <TestTaskSkeleton key={key} />)}
      </div>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <Skeleton className='h-[28px] w-48 mobile:h-[32px]' />
        <Skeleton className='h-[28px] w-full max-w-[700px]' />
      </div>
      <div className='hide-scroll-bar flex items-start gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-2 shadow-sm'>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((key) => <TestPassageSkeleton key={key} />)}
      </div>
    </section>
  );
}

function TestView({ itest }: { itest: ITest }): JSX.Element {
  const test = new Test(itest);

  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter mobile:text-4xl'>
          {test.name}
        </h1>
        <div className='flex flex-row flex-wrap gap-2'>
          <BadgeView str={test.tags.classes} />
          <BadgeView str={test.tags.timePassing} />
          <BadgeView type='complexity' str={test.tags.complexity} />
        </div>
        <div className='flex flex-row flex-wrap gap-2'>
          <BadgeView str={test.repeat.type} />
          <BadgeView str={test.tags.points} />
        </div>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          {test.description}
        </p>
      </div>
      <Separator />
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-xl font-semibold leading-tight tracking-tighter mobile:text-2xl'>
          Список задач
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Описание задач из которых состоит тест.
        </p>
      </div>
      <div className='hide-scroll-bar flex items-start gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-2 shadow-sm'>
        {test.tasks.map((task, idx) => <TestTaskView key={idx} idx={idx} task={task} />)}
      </div>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-xl font-semibold leading-tight tracking-tighter mobile:text-2xl'>
          Прохождения
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Список ваших прохождений.
        </p>
      </div>
      <div className='hide-scroll-bar flex items-start gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-2 shadow-sm'>
        {test.passages === undefined
          ? (
            <div className='m-auto'>
              <TestCreatePassage path={test.path} />
            </div>
          ) : (
            <>
              {test.passages.map((passage, key) => <TestPassageView key={key} passage={passage} />)}
              {test.repeat.isDisposable() ||
                (test.repeat.isRepeatable() && !test.repeat.isCreatable(test.passages[0]?.end))
                ? <></>
                : <TestCreatePassage path={test.path} />
              }
            </>
          )
        }
      </div>
    </section>
  );
}

export { TestSkeleton, TestView };
