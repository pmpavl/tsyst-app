'use client';

import * as React from 'react';

import { AppContext, Icons } from '@/components';

function LoaderProvider({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <AppContext.Consumer>
      {({ loading }) => loading
        ? (
          <main className='flex min-h-screen grow flex-col items-center justify-center px-2'>
            <Icons.loader className='h-7 w-7 animate-spin' />
          </main>
        ) : (children)
      }
    </AppContext.Consumer>
  );
}

export { LoaderProvider };
