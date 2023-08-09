import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  BadgeSkeleton,
  BadgeComplexityRender,
  BadgeThemesRender,
} from '@/components';
import { TestTask } from '@/models';

function TestTaskSkeleton(): JSX.Element {
  return (
    <Card className='w-72 flex-none first:ml-2 last:mr-2'>
      <CardHeader>
        <CardTitle className='flex flex-row flex-wrap items-center gap-2'>
          <Skeleton className='h-[22px] w-36' />
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeSkeleton />
          </div>
        </CardTitle>
        <Skeleton className='h-[22px] w-full' />
      </CardHeader>
    </Card>
  );
}

function TestTaskRender({ num, task }: { num: number, task: TestTask }): JSX.Element {
  return (
    <Card className='w-72 flex-none first:ml-2 last:mr-2'>
      <CardHeader>
        <CardTitle className='flex flex-row flex-wrap items-center gap-2'>
          Задача №{num}
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeComplexityRender complexity={task.complexity} />
          </div>
        </CardTitle>
        <BadgeThemesRender themes={task.themes} />
      </CardHeader>
    </Card>
  );
}

export { TestTaskSkeleton, TestTaskRender };
