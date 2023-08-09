import * as React from 'react';
import { cookies } from 'next/headers';

import {
  APItests,
  LandingRequest,
  ErrorDefault, ErrorDefaultTestsMessage,
} from '@/api';

import { TestAlert, TestRender } from '@/components';

type PageProps = { params: { path: string } };

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  //? Костыль получения ACCESS_TOKEN в server компоненте
  const cookieStore = cookies();
  const accessToken = cookieStore.get('ACCESS_TOKEN')?.value;

  const response = await APItests.landing(new LandingRequest(params.path, accessToken));
  if (response instanceof ErrorDefault) {
    if (response.message === ErrorDefaultTestsMessage.ErrNothingFound) {
      return <TestAlert type='NothingFound' />;
    }

    return <TestAlert type='ErrorTest' />;
  }

  return <TestRender test={response} />;
}
