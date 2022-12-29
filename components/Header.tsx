import Link from 'next/link';
import { Login, MSU } from '@/icon';

export default function Header(): JSX.Element {
  return (
    <header className='navbar gap-x-2'>
      <div className='flex-none'>
        <Link className='btn-ghost btn-square btn' href='/' target='_self'>
          <MSU width='44px' height='44px' />
        </Link>
      </div>
      <div className='flex-1'>
        <Link className='btn-ghost btn hidden text-xl normal-case mobile:flex' href='/' target='_self'>
          Система
        </Link>
      </div>
      <div className='flex-none'>
        <Link className='btn-ghost btn text-xl normal-case' href='/tests' target='_self'>
          Тесты
        </Link>
        <Link className='btn-ghost btn-square btn' href='/login' target='_self'>
          <Login width='24px' height='24px' />
        </Link>
      </div>
    </header>
  );
}
