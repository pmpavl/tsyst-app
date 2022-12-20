'use client';
import React from 'react';
import Link from 'next/link';
import { ThemeContext } from '@/context';
import { MSU, Sun, Moon } from '@/icon';

export default function Header(): JSX.Element {
  const { mode, toggleMode } = React.useContext(ThemeContext);

  return (
    <header className='static flex h-[56px] w-full flex-row content-center justify-center border-b border-light-outline dark:border-dark-outline'>
      <div className='flex max-w-screen-laptop flex-1 px-4 mobile:px-8'>
        <div className='flex grow items-center justify-start gap-x-2 mobile:gap-x-4'>
          <Link className='text h-12 w-12' href='/' target='_self'>
            <MSU width='44px' height='44px' />
          </Link>
          <Link className='text h-10 px-4 py-3 text-lg max-mobile:hidden mobile:px-6' href='/' target='_self'>
            Тестирующая система
          </Link>
        </div>
        <div className='flex grow items-center justify-end gap-x-2 mobile:gap-x-4'>
          <Link className='text h-10 px-4 py-3 text-base mobile:px-6' href='/tests' target='_self'>
            Тесты
          </Link>
          <button disabled className='text h-10 px-4 py-3 text-base mobile:px-6'>
            Вход
          </button>
          <button className='text h-10 w-10' onClick={toggleMode}>
            {mode === 'light' ? <Sun width='24px' height='24px' /> : <Moon width='24px' height='24px' />}
          </button>
        </div>
      </div>
    </header>
  );
}
