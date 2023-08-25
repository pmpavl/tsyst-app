'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { AppContext } from '@/components/providers';
import { ProfileView } from '@/components';

export default function Page(): JSX.Element {
  const router = useRouter();
  const { auth, tokens } = React.useContext(AppContext);

  if (!auth || tokens === undefined) {
    router.push('/');
    return <></>;
  }

  return <ProfileView />;
}
