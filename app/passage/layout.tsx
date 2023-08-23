'use client';

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';

import { AppContext } from '@/components/providers';
import { PassageSkeleton } from '@/components';

export default function PassageLayout({ children }: React.PropsWithChildren): JSX.Element {
  const router = useRouter();
  const { auth, tokens } = React.useContext(AppContext);

  if (!auth || tokens === undefined) {
    router.push('/');
    return <></>;
  }

  return (
    <Suspense fallback={<PassageSkeleton />}>
      {children}
    </Suspense>
  );
}
