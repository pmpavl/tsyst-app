'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Grid, InputAdornment, TextField, Theme, Typography, useTheme } from '@mui/material';
import { MetaContext } from '@/context';
import { ButtonForm, ButtonIcon, getCardStyleSX, getTextFieldStyleSX } from '@/components';

const validEmail = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;

class LoginState {
  email: string;

  password: string;

  showPassword: boolean;

  errorEmail?: string;

  errorPassword?: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.showPassword = false;
  }
}

export default function Page(): JSX.Element {
  const theme: Theme = useTheme();
  const router = useRouter();
  const { setIsAuth } = React.useContext(MetaContext);
  const [loginState, setLoginState] = React.useState<LoginState>(new LoginState);

  const formLoginValidate = (): boolean => {
    // TODO: Реализовать проверку с бекенда
    if (loginState.email !== 'test@test.ru' || loginState.password !== 'test') {
      return false;
    }

    return true;
  };

  const onClickLogin = (): void => {
    /** Validate correct email */
    if (!validEmail.test(loginState.email)) {
      setLoginState({ ...loginState, errorEmail: 'Некорректный email', errorPassword: undefined });

      return;
    }

    /** Validate user */
    if (!formLoginValidate()) {
      setLoginState({ ...loginState, errorPassword: 'Неверный пароль' });

      return;
    } else if (loginState.errorPassword !== undefined) {
      setLoginState({ ...loginState, errorPassword: undefined });
    }

    /** User account login */
    setIsAuth(true);
    router.push('/');
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        ...getCardStyleSX(theme, 'outlined'),
        width: { zero: '100%', mobile: '400px' },
        paddingInline: '32px',
        paddingBlock: '32px',
      }}
    >
      <Grid container rowSpacing={3}>
        <Grid item zero={12}>
          <Typography textAlign='center' variant='h4' fontWeight='600'>
            Вход
          </Typography>
          <Typography textAlign='center' variant='subtitle2' fontWeight='400' marginTop='1rem'>
            Войдите на сайт для доступа к тесирующей системе
          </Typography>
        </Grid>
        <Grid item zero={12}>
          <TextField fullWidth variant='outlined' sx={{ ...getTextFieldStyleSX(theme) }}
            label='Email'
            id='email'
            type='email'
            value={loginState.email}
            onChange={(e): void => {
              const nextEmail = e.target.value;

              if (validEmail.test(nextEmail) && loginState.errorEmail != undefined) {
                setLoginState({ ...loginState, email: nextEmail, errorEmail: undefined });

                return;
              }

              setLoginState({ ...loginState, email: nextEmail });
            }}
            error={loginState.errorEmail !== undefined}
            helperText={loginState.errorEmail}
          />
        </Grid>
        <Grid item zero={12}>
          <TextField fullWidth variant='outlined' sx={{ ...getTextFieldStyleSX(theme) }}
            label='Пароль'
            id='password'
            value={loginState.password}
            type={loginState.showPassword ? 'text' : 'password'}
            onChange={(e): void => {
              setLoginState({ ...loginState, [e.target.id]: e.target.value });
            }}
            error={loginState.errorPassword !== undefined}
            helperText={loginState.errorPassword}
            InputProps={{
              endAdornment:
                <InputAdornment position='end'>
                  <ButtonIcon
                    icon={loginState.showPassword ? 'eyeSlash' : 'eye'}
                    style='standard'
                    onClick={() => setLoginState({ ...loginState, showPassword: !loginState.showPassword })}
                  />
                </InputAdornment>,
            }}
          />
        </Grid>
        <Grid item zero={12}>
          <ButtonForm style='tonal' onClick={onClickLogin}>
            Войти
          </ButtonForm>
        </Grid>
        <Grid item zero={12} style={{ paddingTop: '1rem' }}>
          <ButtonForm style='outlined' href='/reg'>
            Регистрация
          </ButtonForm>
        </Grid>
      </Grid>
    </Container>
  );
}
