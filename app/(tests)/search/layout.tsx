import React, { Suspense } from 'react';

import { Search, TestCardSkeleton } from '@/components';

export default function SearchLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter mobile:text-4xl'>
          Найти тест
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Ищите и проходите различные математические тесты.
        </p>
      </div>
      <Search />
      <Suspense fallback={
        <div className='grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2'>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((key) => <TestCardSkeleton key={key} />)}
        </div>
      }>
        {children}
      </Suspense>
    </section>
  );
}
