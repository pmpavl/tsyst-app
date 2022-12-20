export type CardTestProps = {
  name: string
  description: string
  tags: {
    minute: string
    classes: string
  }
};

export default function CardTest({ name, description, tags }: CardTestProps): JSX.Element {
  return (
    <div className='card outlined flex h-[300px] w-full flex-col justify-start p-6'>
      <div className='flex h-min flex-wrap items-center justify-start gap-x-2 mobile:gap-x-4'>
        <p className='w-full text-left text-3xl font-bold'> {name} </p>
      </div>
      <div className='mt-2 flex h-min flex-wrap items-center justify-start gap-2 mobile:gap-x-4'>
        <p className='badge'> {tags.classes} </p>
        <p className='badge'> {tags.minute} </p>
      </div>
      <div className='my-4 flex h-min flex-wrap items-center justify-start gap-2 overflow-y-scroll mobile:gap-x-4'>
        <p className='text-sm'> {description} </p>
      </div>
      <div className='mt-auto flex h-fit flex-wrap items-center justify-start gap-2 mobile:gap-x-4'>
        <button className='tonal px-4 py-2'> Пройти тест </button>
        <div className='flex h-full grow flex-wrap items-center justify-end gap-2 mobile:gap-x-4'>
          <button disabled className='text px-4 py-2 text-sm'> Подробнее </button>
        </div>
      </div>
    </div>
  );
}
