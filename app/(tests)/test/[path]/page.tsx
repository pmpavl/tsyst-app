import * as React from 'react';
import { cookies } from 'next/headers';

import {
  APITests, ErrorDefault, ErrorDefaultTestsMessage,
  TestsLandingRequest,
} from '@/api';

import { TestView, TestsLandingAlert } from '@/components';

type PageProps = { params: { path: string } };

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  //? Костыль получения ACCESS_TOKEN в server компоненте
  const cookieStore = cookies();
  const accessToken = cookieStore.get('ACCESS_TOKEN')?.value;

  const testsLandingRequest = new TestsLandingRequest({ accessToken: accessToken, path: params.path });
  const response = await APITests.landing(testsLandingRequest);
  if (response instanceof ErrorDefault) {
    if (response.message === ErrorDefaultTestsMessage.ErrNothingFound) {
      return <TestsLandingAlert type='ErrNothingFound' />;
    }

    return <TestsLandingAlert type='Error' />;
  }

  return <TestView itest={response} />;
}
