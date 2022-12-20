export default function Page(): JSX.Element {
  return (
    <>
      <p className='w-full text-center text-4xl font-bold'>
        Тестирующая система
      </p>
      <p className='mt-8 inline w-full text-center text-base'>
        <span>
          Система для проведения анализа способностей школьников в решении математических задач.
        </span>
        <span className='font-bold text-light-error dark:text-dark-error'>
          {' В разработке'}
        </span>
      </p>
    </>
  );
}
