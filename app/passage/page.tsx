'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  APIPassage, ErrorDefault, ErrorDefaultPassageMessage,
  PassageReadRequest,
  IPassageReadResponse,
} from '@/api';

import { AppContext } from '@/components/providers';
import {
  PassageSkeleton, PassageView,
  PassageAlert,
} from '@/components';

export default function Page(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { auth, tokens } = React.useContext(AppContext);
  const [data, setData] = React.useState<ErrorDefault | IPassageReadResponse | undefined>(undefined);

  React.useEffect(() => {
    const fetch = async () => setData(await APIPassage.read(new PassageReadRequest({
      accessToken: tokens?.accessToken,
      id: searchParams.get('id') || '',
    })));

    fetch();
  }, [searchParams, tokens?.accessToken]);

  if (!auth || tokens === undefined) {
    router.push('/');
    return <></>;
  }

  // Loading skeleton
  if (data === undefined) return <PassageSkeleton />;

  // Error
  if (data instanceof ErrorDefault) {
    switch (data.message) {
      case ErrorDefaultPassageMessage.ErrPassageIDNotExist:
        return <PassageAlert type='ErrPassageIDNotExist' />;
      case ErrorDefaultPassageMessage.ErrIncorrectPassageUser:
        return <PassageAlert type='ErrIncorrectPassageUser' />;
      default:
        return <PassageAlert type='Error' />;
    }
  }

  // View
  return <PassageView id={searchParams.get('id') || ''} ipassage={data} />;
}
