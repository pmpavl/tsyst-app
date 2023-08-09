import Link from 'next/link';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  BadgeSkeleton,
  BadgeComplexityRender,
  BadgeClassesRender,
} from '@/components';
import { TestCard } from '@/models';

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

function TestCardRender({ card }: { card: TestCard }): JSX.Element {
  return (
    <Link href={`/test/${card.path}`} target='_self'>
      <Card className='cursor-pointer hover:bg-accent'>
        <CardHeader>
          <CardTitle className='flex flex-row flex-wrap items-center gap-2'>
            {card.name}
            <div className='flex flex-row flex-wrap gap-2'>
              <BadgeClassesRender classes={card.tags.classes} />
              <BadgeComplexityRender complexity={card.tags.complexity} />
            </div>
          </CardTitle>
          <CardDescription className='line-clamp-3 h-[60px]'> {card.description} </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export { TestCardSkeleton, TestCardRender };
