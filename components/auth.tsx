'use client';

import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Icons, AuthLogIn, AuthReg } from '@/components';

type AuthType = 'logIn' | 'reg';

type AuthContentState = {
  open: boolean,
  authType: AuthType,
  emailSend: boolean,
};

type AuthContentProps = AuthContentState & {
  setState: React.Dispatch<React.SetStateAction<AuthContentState>>
};

function AuthContent({ props }: { props: AuthContentProps }): JSX.Element {
  function setClose() { props.setState({ ...props, open: false }); }
  function setReg() { props.setState({ ...props, authType: 'reg' }); }
  function setLogIn() { props.setState({ ...props, authType: 'logIn' }); }

  switch (props.authType) {
    case 'logIn':
      return (
        <DialogContent setClose={setClose}>
          <DialogHeader>
            <DialogTitle className='text-xl'> Вход в систему </DialogTitle>
            <DialogDescription>
              Если у Вас ещё нет аккаунта, пройдите <span className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' onClick={setReg}>регистрацию</span>.
            </DialogDescription>
          </DialogHeader>
          <AuthLogIn emailSend={props.emailSend} setState={props.setState} />
        </DialogContent>
      );
    case 'reg':
      return (
        <DialogContent setClose={setClose}>
          <DialogHeader>
            <DialogTitle className='text-xl'> Регистрация </DialogTitle>
            <DialogDescription>
              Если у Вас уже есть аккаунт, <span className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' onClick={setLogIn}>войдите</span> в него.
            </DialogDescription>
          </DialogHeader>
          <AuthReg setState={props.setState} />
        </DialogContent>
      );
  }
}

function Auth(): JSX.Element {
  const [state, setState] = React.useState<AuthContentState>({
    open: false,
    authType: 'logIn',
    emailSend: false,
  } as AuthContentState);

  return (
    <Dialog open={state.open} onOpenChange={() => { setState({ ...state, open: true, authType: 'logIn' }); }}>
      <DialogTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Icons.login className='h-5 w-5' />
        </Button>
      </DialogTrigger>
      <AuthContent
        props={{
          open: state.open,
          authType: state.authType,
          emailSend: state.emailSend,
          setState: setState,
        } as AuthContentProps}
      />
    </Dialog>
  );
}

export { Auth, type AuthType, type AuthContentState };
