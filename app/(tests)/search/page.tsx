import * as React from 'react';
import { cookies } from 'next/headers';

import {
  APItests,
  SearchRequest,
  ErrorDefault, ErrorDefaultTestsMessage,
} from '@/api';
import { SearchAlert, SearchPagination, TestCardRender } from '@/components';

type PageProps = { searchParams: { name: string, class: number, complexity: string, page: number } };

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }: PageProps): Promise<JSX.Element> {
  //? Костыль получения ACCESS_TOKEN в server компоненте
  const cookieStore = cookies();
  const accessToken = cookieStore.get('ACCESS_TOKEN')?.value;

  const response = await APItests.search(new SearchRequest(
    searchParams.name,
    searchParams.class,
    searchParams.complexity,
    searchParams.page,
    accessToken,
  ));
  if (response instanceof ErrorDefault) {
    if (response.message === ErrorDefaultTestsMessage.ErrNothingFound) {
      return <SearchAlert type='NothingFound' />;
    }

    return <SearchAlert type='ErrorSearch' />;
  }

  return (
    <>
      <div className='grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2'>
        {response.cards.map((card, key) => <TestCardRender key={key} card={card} />)}
      </div>
      <SearchPagination countPages={response.countPages} currentPage={Number(searchParams.page) || 1} />
    </>
  );
}
