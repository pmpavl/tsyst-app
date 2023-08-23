import Link from 'next/link';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Icons } from '@/components';

function SWWAlert(): JSX.Element {
  return (
    <>
      <AlertTitle> Что-то пошло не так! </AlertTitle>
      <AlertDescription> Перезагрузите страницу или попробуйте позже. </AlertDescription>
    </>
  );
}

interface AuthAlertProps {
  show: boolean,
  type?: 'NeedAuth' | 'EmailSend' | 'Error',
}

function AuthAlert({ show, type }: AuthAlertProps): JSX.Element {
  switch (type) {
    case 'NeedAuth':
      return (
        <Alert variant='destructive' className={show ? 'block' : 'hidden'}>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Необходимо авторизоваться </AlertTitle>
          <AlertDescription>
            Для дальнейшего использования сайта, необходимо авторизоваться в системе.
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
    case 'Error':
      return (
        <Alert variant='destructive' className={show ? 'block' : 'hidden'}>
          <Icons.alertTriangle className='h-4 w-4' />
          <SWWAlert />
        </Alert>
      );
    default: return <></>;
  }
}

interface TestsSearchAlertProps {
  type: 'ErrNothingFound' | 'Error',
}

function TestsSearchAlert({ type }: TestsSearchAlertProps): JSX.Element {
  switch (type) {
    case 'ErrNothingFound':
      return (
        <Alert className='mx-auto max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Ничего не найдено </AlertTitle>
          <AlertDescription>
            Попробуйте ввести другие параметры поиска.
          </AlertDescription>
        </Alert>
      );
    case 'Error':
      return (
        <Alert variant='destructive' className='mx-auto max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <SWWAlert />
        </Alert>
      );
    default: return <></>;
  }
}

interface TestsLandingAlertProps {
  type: 'ErrNothingFound' | 'Error',
}

function TestsLandingAlert({ type }: TestsLandingAlertProps): JSX.Element {
  switch (type) {
    case 'ErrNothingFound':
      return (
        <Alert className='mx-auto mt-6 max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Теста не существует </AlertTitle>
          <AlertDescription>
            Поищите другой тест на странице <Link className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' href='/search'>поиска</Link>.
          </AlertDescription>
        </Alert>
      );
    case 'Error':
      return (
        <Alert variant='destructive' className='mx-auto mt-6 max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <SWWAlert />
        </Alert>
      );
    default: return <></>;
  }
}

interface PassageAlertProps {
  type: 'ErrPassageIDNotExist' | 'ErrIncorrectPassageUser' | 'Error',
}

function PassageAlert({ type }: PassageAlertProps): JSX.Element {
  switch (type) {
    case 'ErrPassageIDNotExist':
      return (
        <Alert className='mx-auto mt-6 max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Такого прохождения не существует </AlertTitle>
          <AlertDescription>
            Поищите подходящий для себя тест на странице <Link className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' href='/search'>поиска</Link>.
          </AlertDescription>
        </Alert>
      );
    case 'ErrIncorrectPassageUser':
      return (
        <Alert className='mx-auto mt-6 max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <AlertTitle> Это не ваше прохождение </AlertTitle>
          <AlertDescription>
            Поищите тест на странице <Link className='inline cursor-pointer bg-gradient-to-br from-blue-600 to-emerald-400 bg-clip-text font-extrabold text-transparent' href='/search'>поиска</Link>.
          </AlertDescription>
        </Alert>
      );
    case 'Error':
      return (
        <Alert variant='destructive' className='mx-auto mt-6 max-w-fit'>
          <Icons.alertTriangle className='h-4 w-4' />
          <SWWAlert />
        </Alert>
      );
    default: return <></>;
  }
}

export {
  AuthAlert, type AuthAlertProps,
  TestsSearchAlert, type TestsSearchAlertProps,
  TestsLandingAlert, type TestsLandingAlertProps,
  PassageAlert, type PassageAlertProps,
};
