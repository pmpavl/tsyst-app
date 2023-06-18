import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Auth } from '@/components/auth';
import { ThemeToggle } from '@/components/themeToggle';

export function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 mobile:justify-between mobile:space-x-0'>
        <div className='flex gap-6 tablet:gap-10'>
          <Link href='/' target='_self' className='flex items-center space-x-2'>
            <Icons.logo className='h-6 w-6' />
            <span className='inline-block font-bold max-mobile:hidden'> Система тестирования </span>
          </Link>
          <nav className='flex gap-6'>
            <Link
              href='/search'
              target='_self'
              className={buttonVariants({ size: 'sm', variant: 'ghost' })}
            >
              Тесты
            </Link>
          </nav>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-1'>
            <Link
              href='https://github.com/pmpavl/tsyst-app'
              target='_blank'
              rel='noreferrer'
              className={buttonVariants({ size: 'sm', variant: 'ghost' })}
            >
              <Icons.gitHub className='h-5 w-5' />
            </Link>
            <ThemeToggle />
            <Auth />
          </nav>
        </div>
      </div>
    </header>
  );
}
