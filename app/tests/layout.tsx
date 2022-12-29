import React, { Suspense } from 'react';
import { CardTestLoader, TestsSearch } from '@/components';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TestsLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <>
      <TestsSearch />
      <Suspense fallback={
        <div className='grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => <CardTestLoader key={num} />)}
        </div>
      }>
        {children}
      </Suspense>
    </>
  );
}
