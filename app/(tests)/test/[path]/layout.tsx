import React, { Suspense } from 'react';

import { TestSkeleton } from '@/components';

export default function LandingLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <Suspense fallback={<TestSkeleton />}>
      {children}
    </Suspense>
  );
}
