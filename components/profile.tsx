import { Skeleton } from '@/components/ui/skeleton';

function ProfileSkeleton(): JSX.Element {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <Skeleton className='h-[36px] w-48 mobile:h-[40px]' />
        <Skeleton className='h-[28px] w-full max-w-[700px]' />
      </div>
    </section>
  );
}

function ProfileView(): JSX.Element {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 mobile:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter mobile:text-4xl'>
          Здравствуйте, Киндер
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Страница пока не готова, зайдите позже.
        </p>
      </div>
    </section>
  );
}

export { ProfileSkeleton, ProfileView };
