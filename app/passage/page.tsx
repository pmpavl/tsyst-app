import * as React from 'react';
import { cookies } from 'next/headers';

import {
  APIPassage, ErrorDefault, ErrorDefaultPassageMessage,
  PassageReadRequest,
} from '@/api';

import { PassageAlert, PassageView } from '@/components';

type PageProps = { searchParams: { id: string } };

export default async function Page({ searchParams }: PageProps): Promise<JSX.Element> {
  //? Костыль получения ACCESS_TOKEN в server компоненте
  const cookieStore = cookies();
  const accessToken = cookieStore.get('ACCESS_TOKEN')?.value;

  const passageReadRequest = new PassageReadRequest({ accessToken: accessToken, id: searchParams.id });
  const response = await APIPassage.read(passageReadRequest);
  if (response instanceof ErrorDefault) {
    switch (response.message) {
      case ErrorDefaultPassageMessage.ErrPassageIDNotExist:
        return <PassageAlert type='ErrPassageIDNotExist' />;
      case ErrorDefaultPassageMessage.ErrIncorrectPassageUser:
        return <PassageAlert type='ErrIncorrectPassageUser' />;
      default:
        return <PassageAlert type='Error' />;
    }
  }

  return <PassageView id={searchParams.id} ipassage={response} />;
}
