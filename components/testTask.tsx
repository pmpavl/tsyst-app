import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  BadgeSkeleton,
  BadgeComplexityRender,
  BadgePointsRender,
  BadgeThemesRender,
} from '@/components';
import { TestTask } from '@/models';

function TestTaskSkeleton(): JSX.Element {
  return (
    <Card className='w-72 flex-none first:ml-2 last:mr-2'>
      <CardHeader className='gap-2'>
        <CardTitle className='flex flex-col flex-wrap gap-2'>
          <Skeleton className='h-[22px] w-36' />
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeSkeleton />
            <BadgeSkeleton />
          </div>
        </CardTitle>
        <Skeleton className='h-[32px] w-full' />
      </CardHeader>
    </Card>
  );
}

function TestTaskRender({ num, task }: { num: number, task: TestTask }): JSX.Element {
  return (
    <Card className='w-72 flex-none first:ml-2 last:mr-2'>
      <CardHeader className='gap-2'>
        <CardTitle className='flex flex-col flex-wrap gap-2'>
          Задача №{num}
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgePointsRender points={task.points} />
            <BadgeComplexityRender complexity={task.complexity} />
          </div>
        </CardTitle>
        <BadgeThemesRender themes={task.themes} />
      </CardHeader>
    </Card>
  );
}

export { TestTaskSkeleton, TestTaskRender };
