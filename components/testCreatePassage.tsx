'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import {
  APIPassage, ErrorDefault, ErrorDefaultPassageMessage,
  PassageCreateRequest,
} from '@/api';
import { cn } from '@/lib/utils';

import { AppContext } from '@/components/providers';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import {
  Icons,
  pasToast, pdToast, pttrToast, swwToast,
  AuthContent, AuthContentProps, AuthContentState,
} from '@/components';

function TestCreatePassage({ path }: { path: string }): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const { auth, tokens, logout } = React.useContext(AppContext);
  const [authState, setAuthState] = React.useState<AuthContentState>({
    open: false,
    authType: 'logIn',
    authAlert: { show: true, type: 'NeedAuth' },
  });
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);

  const createPassage = async (): Promise<void> => {
    if (!auth || tokens === undefined) {
      setAuthState({ ...authState, open: true });
      return;
    }

    setButtonDisabled(true);
    const response = await APIPassage.create(new PassageCreateRequest({ accessToken: tokens.accessToken, path: path }));
    if (response instanceof ErrorDefault) {
      setButtonDisabled(false);
      if (response.message === ErrorDefaultPassageMessage.ErrAccessTokenNotExist) {
        logout();
        setAuthState({ ...authState, open: true });
        return;
      }

      if (response.message === ErrorDefaultPassageMessage.ErrAlreadyStart) {
        toast(pasToast);
      } else if (response.message === ErrorDefaultPassageMessage.ErrDisposable) {
        toast(pdToast);
      } else if (response.message === ErrorDefaultPassageMessage.ErrTimeToRepeat) {
        toast(pttrToast);
      } else {
        toast(swwToast);
      }

      return;
    }

    router.push(`/passage?id=${response.id}`);
  };

  return (
    <>
      <Button
        variant='outline'
        className='bg-background py-8 font-medium'
        onClick={createPassage}
        disabled={buttonDisabled}
      >
        <Icons.loader2 className={cn('mr-2 h-4 w-4 animate-spin', buttonDisabled ? 'block' : 'hidden')} />
        Начать тест
      </Button>
      <Dialog open={authState.open}>
        <AuthContent props={{ ...authState, setState: setAuthState } as AuthContentProps} />
      </Dialog>
    </>
  );
}

export { TestCreatePassage };
