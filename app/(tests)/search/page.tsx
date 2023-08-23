import * as React from 'react';
import { cookies } from 'next/headers';

import {
  APITests, ErrorDefault, ErrorDefaultTestsMessage,
  TestsSearchRequest,
} from '@/api';

import { SearchPagination, TestCardView, TestsSearchAlert } from '@/components';

type PageProps = { searchParams: { name: string, class: number, complexity: string, page: number } };

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }: PageProps): Promise<JSX.Element> {
  //? Костыль получения ACCESS_TOKEN в server компоненте
  const cookieStore = cookies();
  const accessToken = cookieStore.get('ACCESS_TOKEN')?.value;

  const testsSearchRequest = new TestsSearchRequest({
    accessToken: accessToken,
    name: searchParams.name,
    class: searchParams.class,
    complexity: searchParams.complexity,
    page: searchParams.page,
  });
  const response = await APITests.search(testsSearchRequest);
  if (response instanceof ErrorDefault) {
    if (response.message === ErrorDefaultTestsMessage.ErrNothingFound) {
      return <TestsSearchAlert type='ErrNothingFound' />;
    }

    return <TestsSearchAlert type='Error' />;
  }

  return (
    <>
      <div className='grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2'>
        {response.cards.map((icard, key) => <TestCardView key={key} icard={icard} />)}
      </div>
      <SearchPagination countPages={response.countPages} currentPage={Number(searchParams.page) || 1} />
    </>
  );
}
