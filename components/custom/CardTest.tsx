import { Test } from '@/api';

export function CardTestLoader(): JSX.Element {
  return (
    <div className='card-bordered card bg-base-100 shadow-2xl max-mobile:card-compact'>
      <div className='card-body h-[300px] animate-pulse'>
        <h2 className='card-title h-7 w-40 flex-wrap rounded-full bg-base-300' />
        <div className='flex flex-row flex-wrap gap-2'>
          <span className='h-4 w-16 rounded-full bg-base-300' />
          <span className='h-4 w-16 rounded-full bg-base-300' />
        </div>
        <span className='h-4 w-full rounded-full bg-base-300' />
        <span className='h-4 w-full rounded-full bg-base-300' />
        <span className='h-4 w-full rounded-full bg-base-300' />
        <div className='card-actions mt-auto justify-end'>
          <button className='h-12 w-32 rounded-full bg-base-300' />
        </div>
      </div>
    </div>
  );
}

export default function CardTest({ id, name, description, tags }: Test): JSX.Element {
  return (
    <div key={id} className='card-bordered card bg-base-100 shadow-2xl max-mobile:card-compact'>
      <div className='card-body h-[300px]'>
        <h2 className='card-title flex-wrap'> {name} </h2>
        <div className='flex flex-row flex-wrap gap-2'>
          <span className='badge badge-outline'> {tags.classes} </span>
          <span className='badge badge-outline'> {tags.minute} </span>
        </div>
        <p className='overflow-y-scroll'> {description} </p>
        <div className='card-actions justify-end'>
          <button className='btn-outline btn normal-case'> Пройти тест </button>
        </div>
      </div>
    </div>
  );
}
