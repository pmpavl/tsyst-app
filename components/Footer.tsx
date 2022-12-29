import Link from 'next/link';
import { GitHub } from '@/icon';

export default function Footer(): JSX.Element {
  return (
    <footer className='navbar gap-x-2'>
      <div className='flex-1 justify-end' >
        <Link className='btn-ghost btn-square btn' href='https://github.com/pmpavl/tsyst-app' target='_blank'>
          <GitHub width='24px' height='24px' />
        </Link>
      </div>
    </footer >
  );
}
