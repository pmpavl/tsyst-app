import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  BadgeSkeleton,
  BadgeComplexityRender,
  BadgeClassesRender,
  BadgeRepeatRender,
  TestTaskRender, TestTaskSkeleton,
} from '@/components';
import { Test } from '@/models';

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
    </section>
  );
}

function TestRender({ test }: { test: Test }): JSX.Element {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter mobile:text-4xl'>
          {test.name}
        </h1>
        <div className='flex flex-row flex-wrap gap-2'>
          <BadgeClassesRender classes={test.tags.classes} />
          <BadgeRepeatRender type={test.repeat.type} />
          <BadgeComplexityRender complexity={test.tags.complexity} />
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
        {test.tasks.map((task, key) => <TestTaskRender key={key} num={key + 1} task={task} />)}
      </div>
    </section>
  );
}

export { TestSkeleton, TestRender };
