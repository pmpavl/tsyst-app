import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeSkeleton, BadgeView } from '@/components';
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

function TestTaskView({ idx, task }: { idx: number, task: TestTask }): JSX.Element {
  return (
    <Card className='w-72 flex-none first:ml-2 last:mr-2'>
      <CardHeader className='gap-2'>
        <CardTitle className='flex flex-col flex-wrap gap-2'>
          Задача №{idx + 1}
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeView str={task.points} />
            <BadgeView type='complexity' str={task.complexity} />
          </div>
        </CardTitle>
        <div className='hide-scroll-bar flex max-w-full gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-1 shadow-sm'>
          {task.themes.map((theme, key) => <BadgeView key={key} type='theme' str={theme} />)}
        </div>
      </CardHeader>
    </Card>
  );
}

export { TestTaskSkeleton, TestTaskView };
