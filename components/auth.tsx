'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Icons } from '@/components/icons';
import { AuthLogIn } from '@/components/authLogIn';
import { AuthReg } from '@/components/authReg';

type AuthType = 'logIn' | 'reg';

function AuthContent({
  authType,
  setAuthType,
}: {
  authType: AuthType,
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>,
}): JSX.Element {
  switch (authType) {
    case 'logIn':
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-xl'> Вход в систему </DialogTitle>
            <DialogDescription>
              Если у Вас ещё нет аккаунта, пройдите <span className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' onClick={() => { setAuthType('reg'); }}>регистрацию</span>.
            </DialogDescription>
          </DialogHeader>
          <AuthLogIn />
        </DialogContent>
      );
    case 'reg':
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-xl'> Регистрация </DialogTitle>
            <DialogDescription>
              Если у Вас уже есть аккаунт, <span className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' onClick={() => { setAuthType('logIn'); }}>войдите</span> в него.
            </DialogDescription>
          </DialogHeader>
          <AuthReg />
        </DialogContent>
      );
  }
}

export function Auth() {
  const [authType, setAuthType] = React.useState<AuthType>('logIn');

  return (
    <Dialog onOpenChange={() => { setAuthType('logIn'); }}>
      <DialogTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Icons.login className='h-5 w-5' />
        </Button>
      </DialogTrigger>
      <AuthContent authType={authType} setAuthType={setAuthType} />
    </Dialog>
  );
}
