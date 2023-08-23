import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeSkeleton, BadgeView, Time, getTimeProps } from '@/components';
import { Passage, PassageTask } from '@/models';
import { cn } from '@/lib/utils';

function PassageInfoTaskSkeleton(): JSX.Element {
  return (
    <Card className='w-72 flex-none first:ml-2 last:mr-2'>
      <CardHeader className='gap-2'>
        <CardTitle className='flex flex-col flex-wrap gap-2'>
          <Skeleton className='h-[22px] w-36' />
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeSkeleton />
            <BadgeSkeleton />
          </div>
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeSkeleton />
          </div>
        </CardTitle>
        <Skeleton className='h-[32px] w-full' />
      </CardHeader>
    </Card>
  );
}

function PassageInfoSkeleton(): JSX.Element {
  return (
    <>
      <Separator />
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <Skeleton className='h-[28px] w-48 mobile:h-[32px]' />
        <Skeleton className='h-[28px] w-full max-w-[700px]' />
      </div>
      <div className='hide-scroll-bar flex items-start gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-2 shadow-sm'>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((key) => <PassageInfoTaskSkeleton key={key} />)}
      </div>
    </>
  );
}

function PassageInfoMetaView({ passage }: { passage: Passage }): JSX.Element {
  return (
    <>
      <div className='flex flex-row flex-wrap gap-2'>
        <Badge variant='outline' className='w-fit px-3 pt-1'>
          <Time props={getTimeProps(passage.start, passage.end)} />
        </Badge>
        <Badge variant={passage.passed ? 'success' : 'fail'} className='w-fit'>
          {`Вы набрали ${passage.score}`}
        </Badge>
        <Badge variant={passage.passed ? 'success' : 'fail'} className='w-fit'>
          {passage.score > passage.points ? 'Тест пройден' : 'Тест не пройден'}
        </Badge>
      </div>
      <p className='max-w-[700px] text-lg text-muted-foreground'>
        Тест завершен. Ваши ответы были записаны в системе для дальнейшего анализа. Спасибо, вы хороший киндер!
      </p>
    </>
  );
}

function PassageInfoTaskView({ idx, task }: { idx: number, task: PassageTask }): JSX.Element {
  return (
    <Card className={cn('w-72 flex-none first:ml-2 last:mr-2', task.correct ? 'border-success/80' : 'border-destructive/80')}>
      <CardHeader className='gap-2'>
        <CardTitle className='flex flex-col flex-wrap gap-2'>
          Задача №{idx + 1}
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeView str={task.points} />
            <BadgeView type='complexity' str={task.tags.complexity} />
          </div>
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeView str={task.timeSpent === undefined ? 'Не приступил' : `${task.timeSpent}`} />
          </div>
        </CardTitle>
        <div className='hide-scroll-bar flex max-w-full gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-1 shadow-sm'>
          {task.tags.themes.map((theme, key) => <BadgeView key={key} type='theme' str={theme} />)}
        </div>
      </CardHeader>
    </Card>
  );
}

function PassageInfoView({ passage }: { passage: Passage }): JSX.Element {
  return (
    <>
      <Separator />
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-xl font-semibold leading-tight tracking-tighter mobile:text-2xl'>
          Задачи
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Инофрмация о решенных/нерешенных задачах.
        </p>
      </div>
      <div className='hide-scroll-bar flex items-start gap-2 overflow-x-scroll rounded-lg border bg-foreground/5 py-2 shadow-sm'>
        {passage.tasks.map((task, idx) => <PassageInfoTaskView key={idx} idx={idx} task={task} />)}
      </div>
    </>
  );
}

export { PassageInfoSkeleton, PassageInfoMetaView, PassageInfoView };
