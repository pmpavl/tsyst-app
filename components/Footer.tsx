import { GitHub } from '@/icon';
import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <footer className='static flex h-[56px] w-full flex-row content-center justify-center border-t border-light-outline dark:border-dark-outline'>
      <div className='flex max-w-screen-laptop flex-1 grow px-4 mobile:px-8'>
        <div className='flex grow items-center justify-end gap-x-2 mobile:gap-x-4'>
          <Link className='text h-10 w-10 p-0' href='https://github.com/pmpavl/tsyst-app' target='_blank'>
            <GitHub width='24px' height='24px' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
