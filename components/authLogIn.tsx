'use client';

import * as React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';

import {
  APIAuth, ErrorDefault, ErrorDefaultAuthMessage,
  PasswordSaltByEmailRequest,
  AuthenticationRequest,
} from '@/api';

import { AppContext } from '@/components/providers';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AuthAlert, AuthAlertProps, AuthContentState } from '@/components';

const loginSchema = z.object({
  email: z.string({
    required_error: 'Введите email',
  }).nonempty('Введите email').email('Введите корректный email'),
  password: z.string({
    required_error: 'Введите пароль',
  }).nonempty('Введите пароль'),
});

function AuthLogIn({
  authAlert,
  setState,
}: {
  authAlert: AuthAlertProps
  setState: React.Dispatch<React.SetStateAction<AuthContentState>>,
}): JSX.Element {
  const { login } = React.useContext(AppContext);
  const [authAlertProps, setAuthAlertProps] = React.useState<AuthAlertProps>(authAlert);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    /** Get password salt */
    const passwordSaltByEmailRequest = new PasswordSaltByEmailRequest({ email: values.email });
    const responsePasswordSaltByEmail = await APIAuth.passwordSaltByEmail(passwordSaltByEmailRequest);
    if (responsePasswordSaltByEmail instanceof ErrorDefault) {
      if (responsePasswordSaltByEmail.message === ErrorDefaultAuthMessage.ErrEmailNotExist) {
        form.setError('email', { message: 'Пользователя с таким email не существует' }, { shouldFocus: true });
      } else {
        setAuthAlertProps({ show: true, type: 'Error' });
      }

      return;
    }

    /** Get hash password */
    const hashPassword = await bcrypt.hash(values.password, responsePasswordSaltByEmail.passwordSalt).catch(() => {
      return new ErrorDefault(500, 'Internal Service Error', 'Uncorrect Salt');
    });
    if (hashPassword instanceof ErrorDefault) {
      setAuthAlertProps({ show: true, type: 'Error' });

      return;
    }

    /** Authorize user by email and hash password */
    const authenticationRequest = new AuthenticationRequest({ email: values.email, password: hashPassword });
    const responseAuthentication = await APIAuth.authentication(authenticationRequest);
    if (responseAuthentication instanceof ErrorDefault) {
      if (responseAuthentication.message === ErrorDefaultAuthMessage.ErrEmailNotExist) {
        form.setError('email', { message: 'Пользователя с таким email не существует' }, { shouldFocus: true });
      } else if (responseAuthentication.message === ErrorDefaultAuthMessage.ErrEmailNotVerified) {
        form.setError('email', { message: 'Этот email не подтвержден' }, { shouldFocus: true });
      } else if (responseAuthentication.message === ErrorDefaultAuthMessage.ErrWrongPassword) {
        form.setError('password', { message: 'Неверный пароль' }, { shouldFocus: true });
      } else {
        setAuthAlertProps({ show: true, type: 'Error' });
      }

      return;
    }

    login(responseAuthentication.accessToken, responseAuthentication.refreshToken);
    setState({ open: false, authType: 'logIn', authAlert: { show: false } } as AuthContentState);
  }

  return (
    <Form {...form}>
      <AuthAlert show={authAlertProps.show} type={authAlertProps.type} />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel> Email </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='mt-2'>
              <FormLabel> Пароль </FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='mt-4'> Войти </Button>
      </form>
    </Form>
  );
}

export { AuthLogIn };
