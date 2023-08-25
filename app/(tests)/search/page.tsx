'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import {
  APITests, ErrorDefault, ErrorDefaultTestsMessage,
  TestsSearchRequest,
  ITestsSearchResponse,
} from '@/api';

import { AppContext } from '@/components/providers';
import {
  SearchPagination,
  TestCardSkeleton, TestCardView,
  TestsSearchAlert,
} from '@/components';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function Page(): JSX.Element {
  const searchParams = useSearchParams();
  const { tokens } = React.useContext(AppContext);
  const [data, setData] = React.useState<ErrorDefault | ITestsSearchResponse | undefined>(undefined);

  React.useEffect(() => {
    const fetch = async () => setData(await APITests.search(new TestsSearchRequest({
      accessToken: tokens?.accessToken,
      name: searchParams.get('name') || undefined,
      class: Number(searchParams.get('class')) || undefined,
      complexity: searchParams.get('complexity') || undefined,
      page: Number(searchParams.get('page')) || undefined,
    })));

    fetch();
  }, [searchParams, tokens?.accessToken]);

  // Loading skeleton
  if (data === undefined) return (
    <div className='grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2'>
      {Array.from({ length: 20 }, (_, i) => i + 1).map((key) => <TestCardSkeleton key={key} />)}
    </div>
  );

  // Error
  if (data instanceof ErrorDefault) {
    if (data.message === ErrorDefaultTestsMessage.ErrNothingFound) {
      return <TestsSearchAlert type='ErrNothingFound' />;
    }

    return <TestsSearchAlert type='Error' />;
  }

  // View
  return (
    <>
      <div className='grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2'>
        {data.cards.map((icard, key) => <TestCardView key={key} icard={icard} />)}
      </div>
      <SearchPagination countPages={data.countPages} currentPage={Number(searchParams.get('page')) || 1} />
    </>
  );
}
