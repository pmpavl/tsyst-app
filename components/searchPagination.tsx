'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

function getQuery(searchParamsStr: string, page: string): string {
  const query = new URLSearchParams(searchParamsStr);

  query.set('page', page);

  return `/search?${query.toString()}`;
}

type SearchPaginationProps = {
  countPages: number
  currentPage: number
};

function SearchPagination({ countPages, currentPage }: SearchPaginationProps): JSX.Element {
  const router = useRouter();
  const searchParamsStr = useSearchParams().toString();

  const prevPage = (): void => router.push(getQuery(searchParamsStr, (currentPage - 1).toString()));
  const nextPage = (): void => router.push(getQuery(searchParamsStr, (currentPage + 1).toString()));
  const prevsPage = (): void => {
    router.push(getQuery(searchParamsStr, (currentPage - 10 < 1 ? 1 : currentPage - 10).toString()));
  };
  const nextsPage = (): void => {
    router.push(getQuery(searchParamsStr, (currentPage + 10 > countPages ? countPages : currentPage + 10).toString()));
  };

  if (countPages <= 1) { return <></>; }

  return (
    <div className='my-4 flex w-full items-center justify-center gap-2'>
      <Button disabled={currentPage <= 1} variant='outline' size='sm' className='h-10 w-10 p-0' onClick={prevsPage}>
        <Icons.chevronsLeft className='h-6 w-6' />
      </Button>
      <Button disabled={currentPage <= 1} variant='outline' size='sm' className='h-10 w-10 p-0' onClick={prevPage}>
        <Icons.chevronLeft className='h-6 w-6' />
      </Button>
      <div className='mx-2 w-28 text-center text-base font-semibold max-[500px]:grow'>
        {`${currentPage} из ${countPages}`}
      </div>
      <Button disabled={currentPage >= countPages} variant='outline' size='sm' className='h-10 w-10 p-0' onClick={nextPage}>
        <Icons.chevronRight className='h-6 w-6' />
      </Button>
      <Button disabled={currentPage >= countPages} variant='outline' size='sm' className='h-10 w-10 p-0' onClick={nextsPage}>
        <Icons.chevronsRight className='h-6 w-6' />
      </Button>
    </div>
  );
}

export { SearchPagination, type SearchPaginationProps };
