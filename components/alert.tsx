import Link from 'next/link';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
import { Icons } from '@/components';

type AuthAlertProps = {
  show: boolean,
  type: 'ErrorReg' | 'ErrorLogIn' | 'EmailSend',
};

function AuthAlert({ show, type }: AuthAlertProps): JSX.Element {
  switch (type) {
    case 'ErrorReg':
      return (
        <Alert variant='destructive' className={show ? 'block' : 'hidden'}>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Ошибка при регистрации </AlertTitle>
          <AlertDescription>
            Что-то пошло не так, перезагрузите страницу или попробуйте позже.
          </AlertDescription>
        </Alert>
      );
    case 'ErrorLogIn':
      return (
        <Alert variant='destructive' className={show ? 'block' : 'hidden'}>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Ошибка при входе </AlertTitle>
          <AlertDescription>
            Что-то пошло не так, перезагрузите страницу или попробуйте позже.
          </AlertDescription>
        </Alert>
      );
    case 'EmailSend':
      return (
        <Alert variant='success' className={show ? 'block' : 'hidden'}>
          <Icons.mail className='h-4 w-4' />
          <AlertTitle> Вам письмо </AlertTitle>
          <AlertDescription>
            На Вашу почту пришло письмо, необходимо пройти по ссылке в письме для подтверждения регистрации.
          </AlertDescription>
        </Alert>
      );
  }
}

type SearchAlertProps = {
  type: 'NothingFound' | 'ErrorSearch',
};

function SearchAlert({ type }: SearchAlertProps): JSX.Element {
  switch (type) {
    case 'NothingFound':
      return (
        <Alert className='mx-auto max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Ничего не найдено </AlertTitle>
          <AlertDescription>
            Попробуйте ввести другие параметры поиска.
          </AlertDescription>
        </Alert>
      );
    case 'ErrorSearch':
      return (
        <Alert variant='destructive' className='mx-auto max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Ошибка при поиске </AlertTitle>
          <AlertDescription>
            Что-то пошло не так, перезагрузите страницу или попробуйте позже.
          </AlertDescription>
        </Alert>
      );
  }
}

type TestAlertProps = {
  type: 'NothingFound' | 'ErrorTest',
};

function TestAlert({ type }: TestAlertProps): JSX.Element {
  switch (type) {
    case 'NothingFound':
      return (
        <Alert className='mx-auto mt-6 max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Такого теста не существует </AlertTitle>
          <AlertDescription>
            Поищите другой тест на странице <Link className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' href='/search'>поиска</Link>.
          </AlertDescription>
        </Alert>
      );
    case 'ErrorTest':
      return (
        <Alert variant='destructive' className='mx-auto mt-6 max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Ошибка при загрузке </AlertTitle>
          <AlertDescription>
            Что-то пошло не так, перезагрузите страницу или попробуйте позже.
          </AlertDescription>
        </Alert>
      );
  }
}

export {
  type AuthAlertProps, AuthAlert,
  type SearchAlertProps, SearchAlert,
  type TestAlertProps, TestAlert,
};
