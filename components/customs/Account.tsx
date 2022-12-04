import React from 'react';
import { Container, Grid, InputAdornment, Modal, TextField, Typography, useTheme } from '@mui/material';
import { AppMetaContext } from '@/context';
import { ButtonHeader, ButtonIcon, ButtonLogin } from '@/customs';
import { getCardStyleSX, getTextFieldStyleSX } from '@/styles';

const bcrypt = require('bcryptjs');

const saltRounds = 10;
const myPlaintextPassword = 'testpassword';

// Technique 1 (generate a salt and hash on separate function calls):
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
// Store hash in your password DB.

// Technique 2 (auto-gen a salt and hash):
const hash2 = bcrypt.hashSync(myPlaintextPassword, saltRounds);
// Store hash in your password DB.

console.log(myPlaintextPassword, salt, hash, hash2);


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

function Login(): JSX.Element {
  const theme = useTheme();
  const { setIsAuth } = React.useContext(AppMetaContext);

  const [openModalLogin, setOpenModalLogin] = React.useState(false);
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
    setOpenModalLogin(false);
    setIsAuth(true);
  };

  return (
    <>
      <ButtonHeader style='standard' size='medium' onClick={() => setOpenModalLogin(true)}>
        Вход
      </ButtonHeader>
      <Modal
        open={openModalLogin}
        onClose={() => {
          setOpenModalLogin(false);
          setLoginState(new LoginState);
        }}
        sx={{
          '& div.MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Container
          disableGutters
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',

            paddingInline: '32px',
            paddingBlock: '32px',
            ...getCardStyleSX(theme, 'outlined'),
            boxShadow: theme.elevation.elevation1,
          }}
        >
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <Typography textAlign='center' variant='h4' fontWeight='600'>
                Вход
              </Typography>
              <Typography textAlign='center' variant='subtitle2' fontWeight='400' marginTop='1rem'>
                Войдите на сайт, чтобы получить доступ к ...
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
                        size='large'
                        onClick={() => setLoginState({ ...loginState, showPassword: !loginState.showPassword })}
                      />
                    </InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <ButtonLogin style='filled' size='large' onClick={onClickLogin}>
                Войти
              </ButtonLogin>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: '1rem' }}>
              <ButtonLogin disabled style='outlined' size='large'>
                Регистрация
              </ButtonLogin>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  );
}

export default function Account(): JSX.Element {
  const { isAuth } = React.useContext(AppMetaContext);



  if (!isAuth) {
    return (
      <Login />
    );
  }

  return (
    <>
      <ButtonHeader style='standard' size='medium'>
        Аккаунт
      </ButtonHeader>
    </>
  );
}
