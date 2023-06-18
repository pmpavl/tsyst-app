'use client';

import * as React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

function progressProps(password: string): {
  value: number,
  max: number,
  variant: 'default' | 'destructive' | 'warning' | 'success',
} {
  let complexity = 0;
  let variant: 'default' | 'destructive' | 'warning' | 'success' = 'default';

  if (password.length >= 3) complexity++;
  if (password.length >= 8) complexity++;
  if (/[А-ЯЁA-Z]/.test(password)) complexity++;
  if (/[а-яёa-z]/.test(password)) complexity++;
  if (/[0-9]/.test(password)) complexity++;
  if (/\~|\!|\@|\#|\$|\%|\^|\&|\*|\_|\-|\+|\=|\'|\||\\|\(|\)|\{|\}|\[|\]|\:|\;|\"|\<|\>|\,|\.|\?|\ |\//.test(password)) complexity++;

  if (complexity <= 2) variant = 'destructive';
  if (2 < complexity && complexity <= 4) variant = 'warning';
  if (4 < complexity) variant = 'success';

  return { value: complexity, max: 6, variant: variant };
}

const regSchema = z.object({
  email: z.string({ required_error: 'Введите email' }).
    nonempty('Введите email').
    email('Введите корректный email'),
  password: z.string({ required_error: 'Придумайте пароль' }).
    nonempty('Придумайте пароль').
    refine(value => (progressProps(value).value > 2), { message: 'Слабый пароль' }),
  passwordRepeat: z.string(),
}).refine(schema => (schema.password !== schema.passwordRepeat) ? false : true, {
  message: 'Пароли не совпадают',
  path: ['passwordRepeat'],
});

export function AuthReg() {
  const form = useForm<z.infer<typeof regSchema>>({
    resolver: zodResolver(regSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordRepeat: '',
    },
  });

  function onSubmit(values: z.infer<typeof regSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
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
        <div className='mt-2 grid grid-cols-2 gap-2'>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel> Пароль </FormLabel>
                <FormControl>
                  <Input type='password' {...field} />
                </FormControl>
                <Progress {...progressProps(field.value)} className='mt-2 h-2 ' />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='passwordRepeat'
            render={({ field }) => (
              <FormItem>
                <FormLabel> Подтвердите пароль </FormLabel>
                <FormControl>
                  <Input type='password' {...field} />
                </FormControl>
                <Progress {...progressProps(field.value)} className='mt-2 h-2' />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit' className='mt-4'> Зарегистрироваться </Button>
      </form>
    </Form>
  );
}
