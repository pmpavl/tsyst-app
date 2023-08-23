import Link from 'next/link';

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BadgeSkeleton, BadgeView } from '@/components';
import { ITestCard, TestCard } from '@/models';
import { cn } from '@/lib/utils';

function TestCardSkeleton(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex flex-row flex-wrap items-center gap-2'>
          <Skeleton className='h-[18px] w-48' />
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeSkeleton />
            <BadgeSkeleton />
          </div>
        </CardTitle>
        <Skeleton className='h-[60px] w-full' />
      </CardHeader>
    </Card>
  );
}

function TestCardView({ icard }: { icard: ITestCard }): JSX.Element {
  const card = new TestCard(icard);

  return (
    <Link href={`/test/${card.path}`} target='_self'>
      <Card className={cn(
        'cursor-pointer hover:bg-accent',
        card.lastPassage === undefined ? '' : card.lastPassage.border(),
      )}>
        <CardHeader>
          <CardTitle className='flex flex-row flex-wrap items-center gap-2'>
            {card.name}
            <div className='flex flex-row flex-wrap gap-2'>
              <BadgeView str={card.tags.classes} />
              <BadgeView type='complexity' str={card.tags.complexity} />
            </div>
          </CardTitle>
          <CardDescription className='line-clamp-3 h-[60px]'> {card.description} </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export { TestCardSkeleton, TestCardView };
