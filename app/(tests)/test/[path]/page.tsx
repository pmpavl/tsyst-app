'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import {
  APITests, ErrorDefault, ErrorDefaultTestsMessage,
  TestsLandingRequest,
  ITestsLandingResponse,
} from '@/api';

import { AppContext } from '@/components/providers';
import {
  TestSkeleton, TestView,
  TestsLandingAlert,
} from '@/components';

export default function Page(): JSX.Element {
  const params = useParams();
  const { tokens } = React.useContext(AppContext);
  const [data, setData] = React.useState<ErrorDefault | ITestsLandingResponse | undefined>(undefined);

  React.useEffect(() => {
    const fetch = async () => setData(await APITests.landing(new TestsLandingRequest({
      accessToken: tokens?.accessToken,
      path: String(params.path),
    })));

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loading skeleton
  if (data === undefined) return <TestSkeleton />;

  // Error
  if (data instanceof ErrorDefault) {
    if (data.message === ErrorDefaultTestsMessage.ErrNothingFound) {
      return <TestsLandingAlert type='ErrNothingFound' />;
    }

    return <TestsLandingAlert type='Error' />;
  }

  // View
  return <TestView itest={data} />;
}
