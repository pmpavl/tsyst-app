'use client';

import * as React from 'react';
import Link from 'next/link';

import { Skeleton } from '@/components/ui/skeleton';
import {
  BadgeSkeleton,
  PassageInfoMetaView, PassageInfoSkeleton, PassageInfoView,
  PassageTaskMetaView, PassageTaskView,
} from '@/components';
import { IPassage, Passage } from '@/models';

function PassageSkeleton(): JSX.Element {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <Skeleton className='h-[36px] w-72 mobile:h-[40px]' />
        <div className='flex flex-row flex-wrap gap-2'>
          <BadgeSkeleton />
          <BadgeSkeleton />
          <BadgeSkeleton />
        </div>
        <Skeleton className='h-[56px] w-full max-w-[700px]' />
      </div>
      <PassageInfoSkeleton />
    </section>
  );
}

function PassageView({ id, ipassage }: { id: string, ipassage: IPassage }): JSX.Element {
  const [passage, setPassage] = React.useState<Passage>(new Passage(id, ipassage));

  // currentTask === undefined ? 'info' : 'task'
  const currentTask = passage.currentTask();

  return (
    <section className='container grid items-center gap-6 pb-8 pt-6'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter mobile:text-4xl'>
          Прохождение теста <Link className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' href={`/test/${passage.path}`}> {passage.name} </Link>
        </h1>
        {passage.finished() || currentTask === undefined
          ? <PassageInfoMetaView passage={passage} />
          : <PassageTaskMetaView end={new Date(passage.end)} />
        }
      </div>
      {passage.finished() || currentTask === undefined
        ? <PassageInfoView passage={passage} />
        : <PassageTaskView
          id={passage.id}
          idx={passage.currentTaskIndex()}
          count={passage.tasks.length}
          task={currentTask}
          setPassage={setPassage}
        />
      }
    </section>
  );
}

export { PassageSkeleton, PassageView };
