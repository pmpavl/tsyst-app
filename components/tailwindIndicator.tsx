export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className='fixed bottom-1 left-1 z-50 flex h-8 items-center justify-center rounded-md border border-input p-3 font-mono text-xs font-extrabold'>
      <div className='block mobile:hidden'> mobile </div>
      <div className='hidden mobile:block tablet:hidden'> tablet </div>
      <div className='hidden tablet:block laptop:hidden'> laptop </div>
      <div className='hidden laptop:block'> desktop </div>
    </div>
  );
}
