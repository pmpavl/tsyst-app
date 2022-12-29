'use client';
import React from 'react';
import bcrypt from 'bcryptjs';
import Link from 'next/link';
import { APIAuth, ErrorDefault, RegistrationRequest } from '@/api';
import { ErrorReload } from '@/components';

const validEmail = /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/;
const validFirstname = /^[А-ЯЁа-яё]{1,32}$/;
const validLastname = /^[А-ЯЁа-яё]{1,64}$/;
const validSchool = /^[1-9][0-9]{0,3}$/;
const validClass = /^[5-9]$|^1[0-1]$/;

const errorInputClassAdd = ['border-error', 'focus:border-error'];
const errorInputClassRemove = ['focus:border-base-content'];

const emailExist = 'Этот email уже используеся';

const emptyEmail = 'Введите email';
const wrongEmail = 'Некорректный email';
const emptyPassword = 'Введите пароль';
const weakPassword = 'Слабый пароль';
const mismatchPassword = 'Разные пароли';
const emptyFirstname = 'Введите имя';
const longFirstname = 'Много букв';
const wrongFirstname = 'Имя на русском';
const emptyLastname = 'Введите фамилию';
const longLastname = 'Много букв';
const wrongLastname = 'Фамилия на русском';
const emptySchool = 'Введите школу';
const wrongSchool = 'Номер от 1 до 9999';
const emptyClass = 'Введите класс';
const wrongClass = 'Класс от 5 до 11';

function setInputClass(id: 'email' | 'password' | 'password-repeat' | 'firstname' | 'lastname' | 'school' | 'class', error: boolean) {
  const classList = document.getElementById(id)?.classList;

  if (error) {
    classList?.add(...errorInputClassAdd);
    classList?.remove(...errorInputClassRemove);
  } else {
    classList?.remove(...errorInputClassAdd);
    classList?.add(...errorInputClassRemove);
  }
}

function setProgressClass(id: 'password-complexity' | 'password-repeat-complexity', complexity: number) {
  const classList = document.getElementById(id)?.classList;

  classList?.remove('progress-error', 'progress-warning', 'progress-success');

  if (complexity <= 2) classList?.add('progress-error');
  if (2 < complexity && complexity <= 4) classList?.add('progress-warning');
  if (complexity <= 6) classList?.add('progress-success');
}

function setWaitingReg(waiting: boolean) {
  const classList = document.getElementById('reg')?.classList;

  if (waiting) {
    classList?.add('loading');
  } else {
    classList?.remove('loading');
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

function calculateComplexity(str: string): number {
  let complexity = 0;

  if (str.length >= 3) complexity++;
  if (str.length >= 8) complexity++;
  if (/[А-ЯЁA-Z]/.test(str)) complexity++;
  if (/[а-яёa-z]/.test(str)) complexity++;
  if (/[0-9]/.test(str)) complexity++;
  if (/\~|\!|\@|\#|\$|\%|\^|\&|\*|\_|\-|\+|\=|\'|\||\\|\(|\)|\{|\}|\[|\]|\:|\;|\"|\<|\>|\,|\.|\?|\ |\//.test(str)) complexity++;

  return complexity;
}

type RegState = {
  email: string
  password: string
  passwordComplexity: number
  passwordRepeat: string
  passwordRepeatComplexity: number
  firstname: string
  lastname: string
  school: string
  class: string
  errorEmail?: string
  errorPassword?: string
  errorPasswordRepeat?: string
  errorFirstname?: string
  errorLastname?: string
  errorSchool?: string
  errorClass?: string
};

export default function Registration(): JSX.Element {
  const [state, setState] = React.useState<RegState>({
    email: '',
    password: '',
    passwordComplexity: 0,
    passwordRepeat: '',
    passwordRepeatComplexity: 0,
    firstname: '',
    lastname: '',
    school: '',
    class: '',
  } as RegState);

  const validateEmail = (): void => {
    if (state.email.length === 0) {
      state.errorEmail = emptyEmail;
      setInputClass('email', true);
    } else if (!validEmail.test(state.email)) {
      state.errorEmail = wrongEmail;
      setInputClass('email', true);
    }
  };

  const validatePassword = (): void => {
    if (state.password.length === 0) {
      state.errorPassword = emptyPassword;
      setInputClass('password', true);
    } else if (calculateComplexity(state.password) <= 2) {
      state.errorPassword = weakPassword;
      setInputClass('password', true);
    }
  };

  const validatePasswordRepeat = (): void => {
    if (state.password !== state.passwordRepeat) {
      state.errorPasswordRepeat = mismatchPassword;
      setInputClass('password-repeat', true);
    }
  };

  const validateFirstname = (): void => {
    if (state.firstname.length === 0) {
      state.errorFirstname = emptyFirstname;
      setInputClass('firstname', true);
    } else if (state.firstname.length > 32) {
      state.errorFirstname = longFirstname;
      setInputClass('firstname', true);
    } else if (!validFirstname.test(state.firstname)) {
      state.errorFirstname = wrongFirstname;
      setInputClass('firstname', true);
    }
  };

  const validateLastname = (): void => {
    if (state.lastname.length === 0) {
      state.errorLastname = emptyLastname;
      setInputClass('lastname', true);
    } else if (state.lastname.length > 32) {
      state.errorLastname = longLastname;
      setInputClass('lastname', true);
    } else if (!validLastname.test(state.lastname)) {
      state.errorLastname = wrongLastname;
      setInputClass('lastname', true);
    }
  };

  const validateSchool = (): void => {
    if (state.school.length === 0) {
      state.errorSchool = emptySchool;
      setInputClass('school', true);
    } else if (!validSchool.test(state.school)) {
      state.errorSchool = wrongSchool;
      setInputClass('school', true);
    }
  };

  const validateClass = (): void => {
    if (state.class.length === 0) {
      state.errorClass = emptyClass;
      setInputClass('class', true);
    } else if (!validClass.test(state.class)) {
      state.errorClass = wrongClass;
      setInputClass('class', true);
    }
  };

  return (
    <>
      <div className='card-bordered card w-full shadow-2xl max-mobile:card-compact mobile:w-[450px]'>
        <div className='card-body items-center gap-0'>
          <h2 className='card-title text-2xl'> Регистрация </h2>
          <p className='mt-2 w-full text-center'> Регистрация в системе тестирования 🧐 </p>
          <div className='form-control mt-8 w-full'>
            <input id='email' type='email' placeholder='Email' className='input-bordered input w-full focus:border-base-content focus:outline-none'
              onChange={(e) => {
                switch (state.errorEmail) {
                  case emptyEmail:
                    if (e.target.value.length > 0) {
                      state.errorEmail = undefined;
                      setInputClass('email', false);
                    }
                    break;
                  case wrongEmail:
                    if (validEmail.test(e.target.value)) {
                      state.errorEmail = undefined;
                      setInputClass('email', false);
                    }
                    break;
                  case emailExist: {
                    state.errorEmail = undefined;
                    setInputClass('email', false);
                  }
                }

                setState({ ...state, email: e.target.value });
              }}
              onBlur={() => {
                validateEmail();
                setState({ ...state });
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
          <div className='input-group'>
            <div className='form-control w-full'>
              <input id='password' type='password' placeholder='Пароль' className='input-bordered input w-full rounded-r-none focus:border-base-content focus:outline-none'
                onChange={(e) => {
                  const complexity = calculateComplexity(e.target.value);

                  switch (state.errorPassword) {
                    case emptyPassword:
                      if (state.password.length > 0) {
                        state.errorPassword = undefined;
                        setInputClass('password', false);
                      }

                      break;
                    case weakPassword:
                      if (complexity > 2) {
                        state.errorPassword = undefined;
                        setInputClass('password', false);
                      }

                      break;
                  }

                  setState({ ...state, password: e.target.value, passwordComplexity: complexity });
                  setProgressClass('password-complexity', complexity);
                }}
                onBlur={() => {
                  validatePassword();
                  setState({ ...state });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('password-repeat')?.focus();
                  }
                }}
              />
              <label className='label flex-wrap gap-y-1'>
                <progress id='password-complexity' className='progress h-1 w-full' value={state.passwordComplexity} max={6} />
                <span className='label-text-alt h-4 w-full bg-transparent p-0 text-error'> {state.errorPassword} </span>
              </label>
            </div>
            <div className='form-control w-full'>
              <input id='password-repeat' type='password' placeholder='Повторите пароль' className='input-bordered input w-full rounded-l-none focus:border-base-content focus:outline-none'
                onChange={(e) => {
                  const complexity = calculateComplexity(e.target.value);

                  switch (state.errorPasswordRepeat) {
                    case mismatchPassword:
                      if (state.password === e.target.value) {
                        state.errorPasswordRepeat = undefined;
                        setInputClass('password-repeat', false);
                      }

                      break;
                  }

                  setState({ ...state, passwordRepeat: e.target.value, passwordRepeatComplexity: complexity });
                  setProgressClass('password-repeat-complexity', complexity);
                }}
                onBlur={() => {
                  validatePasswordRepeat();
                  setState({ ...state });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('firstname')?.focus();
                  }
                }}
              />
              <label className='label flex-wrap gap-y-1'>
                <progress id='password-repeat-complexity' className='progress h-1 w-full' value={state.passwordRepeatComplexity} max={6} />
                <span className='label-text-alt h-4 w-full bg-transparent p-0 text-error'> {state.errorPasswordRepeat} </span>
              </label>
            </div>
          </div>
          <div className='divider before:rounded-l-full after:rounded-r-full' />
          <div className='input-group'>
            <div className='form-control w-full'>
              <input id='firstname' type='text' placeholder='Имя' className='input-bordered input w-full rounded-r-none focus:border-base-content focus:outline-none'
                onChange={(e) => {
                  switch (state.errorFirstname) {
                    case emptyFirstname:
                      if (e.target.value.length > 0) {
                        state.errorFirstname = undefined;
                        setInputClass('firstname', false);
                      }
                      break;
                    case longFirstname:
                      if (e.target.value.length <= 32) {
                        state.errorFirstname = undefined;
                        setInputClass('firstname', false);
                      }
                      break;
                    case wrongFirstname:
                      if (validFirstname.test(state.firstname)) {
                        state.errorFirstname = undefined;
                        setInputClass('firstname', false);
                      }
                      break;
                  }

                  setState({ ...state, firstname: e.target.value });
                }}
                onBlur={() => {
                  validateFirstname();
                  setState({ ...state });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('lastname')?.focus();
                  }
                }}
              />
              <label className='label'>
                <span className='label-text-alt h-4 bg-transparent p-0 text-error'> {state.errorFirstname} </span>
              </label>
            </div>
            <div className='form-control w-full'>
              <input id='lastname' type='text' placeholder='Фамилия' className='input-bordered input w-full rounded-l-none focus:border-base-content focus:outline-none'
                onChange={(e) => {
                  switch (state.errorLastname) {
                    case emptyLastname:
                      if (e.target.value.length > 0) {
                        state.errorLastname = undefined;
                        setInputClass('lastname', false);
                      }
                      break;
                    case longLastname:
                      if (e.target.value.length <= 32) {
                        state.errorLastname = undefined;
                        setInputClass('lastname', false);
                      }
                      break;
                    case wrongLastname:
                      if (validLastname.test(state.lastname)) {
                        state.errorLastname = undefined;
                        setInputClass('lastname', false);
                      }
                      break;
                  }

                  setState({ ...state, lastname: e.target.value });
                }}
                onBlur={() => {
                  validateLastname();
                  setState({ ...state });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('school')?.focus();
                  }
                }}
              />
              <label className='label'>
                <span className='label-text-alt h-4 bg-transparent p-0 text-error'> {state.errorLastname} </span>
              </label>
            </div>
          </div>
          <div className='input-group'>
            <div className='form-control w-full'>
              <input id='school' type='text' placeholder='Номер школы' className='input-bordered input w-full rounded-r-none focus:border-base-content focus:outline-none'
                onChange={(e) => {
                  switch (state.errorSchool) {
                    case emptySchool:
                      if (e.target.value.length > 0) {
                        state.errorSchool = undefined;
                        setInputClass('school', false);
                      }
                      break;
                    case wrongSchool:
                      if (validSchool.test(e.target.value)) {
                        state.errorSchool = undefined;
                        setInputClass('school', false);
                      }
                      break;
                  }

                  setState({ ...state, school: e.target.value });
                }}
                onBlur={() => {
                  validateSchool();
                  setState({ ...state });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('class')?.focus();
                  }
                }}
              />
              <label className='label'>
                <span className='label-text-alt h-4 bg-transparent p-0 text-error'> {state.errorSchool} </span>
              </label>
            </div>
            <div className='form-control w-full'>
              <input id='class' type='text' placeholder='Класс' className='input-bordered input w-full rounded-l-none focus:border-base-content focus:outline-none'
                onChange={(e) => {
                  switch (state.errorClass) {
                    case emptyClass:
                      if (e.target.value.length > 0) {
                        state.errorClass = undefined;
                        setInputClass('class', false);
                      }
                      break;
                    case wrongClass:
                      if (validClass.test(e.target.value)) {
                        state.errorClass = undefined;
                        setInputClass('class', false);
                      }
                      break;
                  }

                  setState({ ...state, class: e.target.value });
                }}
                onBlur={() => {
                  validateClass();
                  setState({ ...state });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('class')?.blur();
                    document.getElementById('reg')?.click();
                  }
                }}
              />
              <label className='label'>
                <span className='label-text-alt h-4 bg-transparent p-0 text-error'> {state.errorClass} </span>
              </label>
            </div>
          </div>
          <div className='card-actions mt-4 w-full'>
            <button id='reg' className='btn flex-1 normal-case'
              onClick={async () => {
                /** Validation */
                validateEmail();
                validatePassword();
                validatePasswordRepeat();
                validateFirstname();
                validateLastname();
                validateSchool();
                validateClass();
                if (
                  state.errorEmail !== undefined ||
                  state.errorPassword !== undefined ||
                  state.errorPasswordRepeat !== undefined ||
                  state.errorFirstname !== undefined ||
                  state.errorLastname !== undefined ||
                  state.errorSchool !== undefined ||
                  state.errorClass !== undefined
                ) {
                  setState({ ...state });
                  return;
                }

                /** Reg request */
                setWaitingReg(true);
                const responseEmailExist = await APIAuth.emailExist(state.email);
                if (responseEmailExist instanceof ErrorDefault) {
                  setErrorModal(true);
                  setWaitingReg(false);
                  return;
                } else if (responseEmailExist.exist) {
                  setState({ ...state, errorEmail: emailExist });
                  setInputClass('email', true);
                  setWaitingReg(false);
                  return;
                }

                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(state.password, salt);
                const responseRegistration = await APIAuth.registration({
                  email: state.email,
                  password: hashPassword,
                  salt: salt,
                  meta: {
                    firstname: state.firstname,
                    lastname: state.lastname,
                    school: Number(state.school),
                    class: Number(state.class),
                  },
                } as RegistrationRequest);

                if (responseRegistration instanceof ErrorDefault) {
                  setErrorModal(true);
                  setWaitingReg(false);
                  return;
                }

                document.getElementById('reg-modal')?.classList.add('modal-open');
                setWaitingReg(false);
              }}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
      <label id='error-modal' htmlFor='error-modal' className='modal cursor-pointer px-2' onClick={() => setErrorModal(false)}>
        <ErrorReload />
      </label>
      <label id='reg-modal' htmlFor='reg-modal' className='modal cursor-pointer px-2'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'> Вы успешно прошли регистрацию 🥳 </h3>
          <p className='py-4'> На Вашу почту придет письмо, необходимо пройти по ссылке в письме для подтверждения регистрации. </p>
          <div className='modal-action'>
            <Link className='btn normal-case' href='/' target='_self'>
              Хорошо
            </Link>
          </div>
        </div>
      </label>
    </>
  );
}
