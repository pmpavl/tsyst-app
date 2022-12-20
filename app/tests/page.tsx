import { CardTest } from '@/components';

export default function Page(): JSX.Element {
  return (
    <div className='my-8 grid w-full grid-cols-1 justify-center gap-4 tablet:grid-cols-2'>
      <CardTest name='Признаки делимости' description='Алгоритм, позволяющий сравнительно быстро определить, является ли число кратным заранее заданному. Если признак делимости позволяет выяснить не только делимость числа на заранее заданное, но и остаток от деления, то его называют признаком равноостаточности.' tags={{ classes: 'для 6 и 7 классов', minute: '10 минут' }} />
      <CardTest name='Дроби' description='Дробь в арифметике — число, состоящее из одной или нескольких равных частей (долей) единицы.' tags={{ classes: 'для 6 класса', minute: '20 минут' }} />
      <div className='card outlined h-[300px] w-full' />
      <div className='card outlined h-[300px] w-full' />
      <div className='card outlined h-[300px] w-full' />
      <div className='card outlined h-[300px] w-full' />
      <div className='card outlined h-[300px] w-full' />
      <div className='card outlined h-[300px] w-full' />
      <div className='card outlined h-[300px] w-full' />
    </div>
  );
}
