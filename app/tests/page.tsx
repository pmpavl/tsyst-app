import React from 'react';
import { APITests, ErrorDefault } from '@/api';
import { CardTest, ErrorReload, ErrorNotFound, TestsPagination } from '@/components';

type PageProps = { searchParams: { page: string, name: string, class: string } };

function Error({ error }: { error: ErrorDefault }): JSX.Element {
  return (
    <div className='my-auto flex w-full justify-center'>
      {error.isServerError() ? <ErrorReload /> : <ErrorNotFound />}
    </div>
  );
}

export default async function Page({ searchParams }: PageProps): Promise<JSX.Element> {
  const responseSearch = await APITests.search(searchParams.page, searchParams.name, searchParams.class);
  const responseSearchCountPages = await APITests.searchCountPages(searchParams.name, searchParams.class);

  if (responseSearch instanceof ErrorDefault) {
    return <Error error={responseSearch} />;
  }

  if (responseSearchCountPages instanceof ErrorDefault) {
    return <Error error={responseSearchCountPages} />;
  }

  return (
    <>
      <div className='grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
        {responseSearch.tests.map((test) => <CardTest key={test.id} {...test} />)}
      </div>
      <TestsPagination currentPage={Number(searchParams.page) || 1} countPages={responseSearchCountPages.countPages} />
    </>
  );
}
