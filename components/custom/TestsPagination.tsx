'use client';
import { useRouter, useSearchParams } from 'next/navigation';

function getQuery(searchParamsStr: string, page: string): string {
  const query = new URLSearchParams(searchParamsStr);

  query.set('page', page);

  return `/tests?${query.toString()}`;
}

export type TestsPaginationProps = {
  currentPage: number
  countPages: number
};

export default function TestsPagination({ currentPage, countPages }: TestsPaginationProps): JSX.Element {
  const router = useRouter();
  const searchParamsStr = useSearchParams().toString();

  function pushPage(page: number): void { router.push(getQuery(searchParamsStr, page.toString())); }
  function buttonNum(num: number): JSX.Element {
    return (
      <button
        key={num}
        className={num === currentPage ? 'btn btn-square' : 'btn btn-ghost btn-square'}
        onClick={() => pushPage(num)}
      >
        {`${num}`}
      </button>
    );
  }

  if (countPages === 1) return <></>;

  if (countPages <= 5) {
    return (
      <div className='btn-group my-4 flex w-full justify-center'>
        {Array.from({ length: countPages }, (_, i) => i + 1).map((num) => buttonNum(num))}
      </div>
    );
  }

  if (currentPage <= 3) {
    return (
      <div className='btn-group my-4 flex w-full justify-center'>
        {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => buttonNum(num))}
        <button className='btn-disabled btn btn-ghost btn-square'>...</button>
        <button className='btn btn-ghost btn-square'
          onClick={() => pushPage(countPages)}> {`${countPages}`} </button>
      </div>
    );
  }

  if (currentPage > countPages - 3) {
    return (
      <div className='btn-group my-4 flex w-full justify-center'>
        <button className='btn btn-ghost btn-square' onClick={() => pushPage(1)}> 1 </button>
        <button className='btn-disabled btn btn-ghost btn-square'>...</button>
        {Array.from({ length: 4 }, (_, i) => countPages - 3 + i).map((num) => buttonNum(num))}
      </div>
    );
  }

  return (
    <div className='btn-group my-4 flex w-full justify-center'>
      <button className='btn btn-ghost btn-square' onClick={() => pushPage(1)}>1</button>
      <button className='btn-disabled btn btn-ghost btn-square'>...</button>
      {Array.from({ length: 3 }, (_, i) => currentPage + i - 1).map((num) => buttonNum(num))}
      <button className='btn-disabled btn btn-ghost btn-square'>...</button>
      <button className='btn btn-ghost btn-square' onClick={() => pushPage(countPages)}> {`${countPages}`} </button>
    </div>
  );
}
