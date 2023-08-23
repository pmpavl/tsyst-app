import Link from 'next/link';

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { TestPassage } from '@/models';
import { cn } from '@/lib/utils';

function TestPassageSkeleton(): JSX.Element {
  return (
    <Card className='w-72 flex-none first:ml-2 last:mr-2'>
      <CardHeader className='gap-2'>
        <CardTitle className='flex flex-col flex-wrap items-center gap-2'>
          <Skeleton className='h-[18px] w-36' />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

function TestPassageView({ passage }: { passage: TestPassage }): JSX.Element {
  return (
    <Link href={`/passage?id=${passage.id}`} target='_self' className='first:ml-2 last:mr-2'>
      <Card className={cn(
        'w-72 flex-none cursor-pointer hover:bg-accent',
        passage === undefined ? '' : passage.border(),
      )}>
        <CardHeader className='gap-2'>
          <CardTitle className='flex flex-col flex-wrap gap-2 text-center'>
            {passage.start.toLocaleDateString()}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}

export { TestPassageSkeleton, TestPassageView };
