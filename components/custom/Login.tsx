'use client';
import React from 'react';
import bcrypt from 'bcryptjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { APIAuth, AuthenticationRequest, ErrorDefault } from '@/api';
import { ErrorEmailNotVerified, ErrorReload } from '@/components';
import { Eye, EyeSlash } from '@/icon';
import { ACCESS_TOKEN, REFRESH_TOKEN, setCookie } from '@/utils';

const validEmail = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;

const errorInputClassAdd = ['border-error', 'focus:border-error'];
const errorInputClassRemove = ['focus:border-base-content'];

const messageEmailNotVerified = 'Email Not Verified';
const messageWrongPassword = 'Wrong Password';

const emailNotExist = 'Пользователя с таким email не существует';
const wrongPassword = 'Неверный пароль';

const wrongEmail = 'Некорректный email';

function setInputClass(id: 'email' | 'password', error: boolean) {
  const classList = document.getElementById(id)?.classList;

  if (error) {
    classList?.add(...errorInputClassAdd);
    classList?.remove(...errorInputClassRemove);
  } else {
    classList?.remove(...errorInputClassAdd);
    classList?.add(...errorInputClassRemove);
  }
}

function setErrorModal(open: boolean) {
  const classList = document.getElementById('error-modal')?.classList;

  if (open) {
    classList?.add('modal-open');
  } else {
    classList?.remove('modal-open');
  }
}

function setErrorEmailNotVerifiedModal(open: boolean) {
  const classList = document.getElementById('error-email-not-verified-modal')?.classList;

  if (open) {
    classList?.add('modal-open');
  } else {
    classList?.remove('modal-open');
  }
}

type LoginState = {
  email: string
  password: string
  showPassword: boolean
  errorEmail?: string
  errorPassword?: string
};

export default function Login(): JSX.Element {
  const router = useRouter();
  const [state, setState] = React.useState<LoginState>({
    email: '',
    password: '',
    showPassword: false,
  } as LoginState);

  return (
    <>
      <div className='card-bordered card w-full shadow-2xl max-mobile:card-compact mobile:w-[450px]'>
        <div className='card-body items-center gap-0'>
          <h2 className='card-title text-2xl'> Вход </h2>
          <p className='mt-2 w-full text-center'> Войдите, чтобы получить доступ к тестам 🤗 </p>
          <div className='form-control mt-8 w-full'>
            <input id='email' type='email' placeholder='Email' className='input-bordered input w-full focus:border-base-content focus:outline-none'
              onChange={(e) => {
                switch (state.errorEmail) {
                  case wrongEmail:
                    if (validEmail.test(e.target.value)) {
                      state.errorEmail = undefined;
                      setInputClass('email', false);
                    }

                    break;
                  case emailNotExist:
                    state.errorEmail = undefined;
                    setInputClass('email', false);
                }

                setState({ ...state, email: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  document.getElementById('password')?.focus();
                }
              }}
            />
            <label className='label'>
              <span className='label-text-alt h-4 text-error'> {state.errorEmail} </span>
            </label>
          </div>
          <div className='form-control w-full'>
            <div className='input-group'>
              <input id='password' type={state.showPassword ? 'text' : 'password'} placeholder='Пароль' className='input-bordered input w-full focus:border-base-content focus:outline-none'
                onChange={(e) => {
                  switch (state.errorPassword) {
                    case wrongPassword:
                      state.errorPassword = undefined;
                      setInputClass('password', false);
                  }

                  setState({ ...state, password: e.target.value });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('password')?.blur();
                    document.getElementById('login')?.click();
                  }

                  if (e.key === 'Tab') {
                    e.preventDefault();
                    setState({ ...state, showPassword: !state.showPassword });
                  }
                }}
              />
              <button className='btn-square btn flex' onClick={() => setState({ ...state, showPassword: !state.showPassword })}>
                {state.showPassword ? <EyeSlash width='24px' height='24px' /> : <Eye width='24px' height='24px' />}
              </button>
            </div>
            <label className='label'>
              <span className='label-text-alt h-4 text-error'> {state.errorPassword} </span>
            </label>
          </div>
          <div className='card-actions input-group mt-4 w-full gap-0'>
            <Link className='btn flex-1 normal-case' href='/reg' target='_self'>
              Регистрация
            </Link>
            <button id='login' className='btn flex-1 normal-case'
              onClick={async () => {
                /** Validation */
                if (!validEmail.test(state.email)) {
                  setState({ ...state, errorEmail: wrongEmail });
                  setInputClass('email', true);

                  return;
                }

                const responseEmailExist = await APIAuth.emailExist(state.email);
                if (responseEmailExist instanceof ErrorDefault) {
                  setErrorModal(true);

                  return;
                }

                if (!responseEmailExist.exist) {
                  setState({ ...state, errorEmail: emailNotExist });
                  setInputClass('email', true);

                  return;
                }

                /** Login */
                const resultEmailSalt = await APIAuth.emailSalt(state.email);
                if (resultEmailSalt instanceof ErrorDefault) {
                  setErrorModal(true);

                  return;
                }

                const hashPassword = await bcrypt.hash(state.password, resultEmailSalt.salt);

                const resultAuthentication = await APIAuth.authentication({
                  email: state.email,
                  password: hashPassword,
                } as AuthenticationRequest);
                if (resultAuthentication instanceof ErrorDefault) {
                  switch (resultAuthentication.message) {
                    case messageEmailNotVerified:
                      setErrorEmailNotVerifiedModal(true);
                      return;
                    case messageWrongPassword:
                      setInputClass('password', true);
                      setState({ ...state, errorPassword: wrongPassword });
                      return;
                  }

                  setErrorModal(true);
                  return;
                }

                setCookie(ACCESS_TOKEN, resultAuthentication.accessToken, resultAuthentication.accessTokenMaxAge);
                setCookie(REFRESH_TOKEN, resultAuthentication.refreshToken, resultAuthentication.refreshTokenMaxAge);

                router.push('/');
              }}
            >
              Вход
            </button>
          </div>
        </div>
      </div>
      <label id='error-modal' htmlFor='error-modal' className='modal cursor-pointer px-2' onClick={() => setErrorModal(false)}>
        <ErrorReload />
      </label>
      <label id='error-email-not-verified-modal' htmlFor='error-modal' className='modal cursor-pointer px-2' onClick={() => setErrorEmailNotVerifiedModal(false)}>
        <ErrorEmailNotVerified />
      </label>
    </>
  );
}
