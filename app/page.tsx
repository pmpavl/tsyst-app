import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Page(): JSX.Element {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter mobile:text-4xl'>
          Система тестирования
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Эта система предназначена для удобного прохождения тестовых заданий, сбора статистики решения задач и анализа результатов.
        </p>
      </div>
      <div className='flex flex-row'>
        <Link href={'/search'} target='_self'>
          <Button variant='outline' size='lg'>
            Найти тест
          </Button>
        </Link>
      </div>
    </section>
  );
}
