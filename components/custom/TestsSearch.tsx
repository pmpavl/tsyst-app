'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from '@/icon';

const availableClasses: Array<string> = ['6', '7', '8', '9'];

type TestsSearchState = {
  name: string;
  class: string;
};

function getName(name: string | null): string {
  return name === null ? '' : name;
}

function getClass(classStr: string | null): string {
  return classStr === null ? '' : availableClasses.includes(classStr) ? classStr : '';
}

function getQuery(state: TestsSearchState): string {
  const query = new URLSearchParams();

  if (state.name !== '') { query.append('name', state.name); }
  if (state.class !== '' && state.class !== '0') { query.append('class', state.class); }

  return `/tests?${query.toString()}`;
}

export default function TestsSearch(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [state, setState] = React.useState<TestsSearchState>({
    name: getName(searchParams.get('name')),
    class: getClass(searchParams.get('class')),
  } as TestsSearchState);

  React.useEffect(() => {
    const pressSlash = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault();
        document.querySelector('input')?.focus({ preventScroll: true });
        document.querySelector('input')?.select();
      }
    };

    addEventListener('keypress', pressSlash);

    return () => removeEventListener('keypress', pressSlash);
  }, []);

  const pushQuery = (): void => router.push(getQuery(state));

  return (
    <div className='form-control my-4 w-full flex-col gap-4 mobile:flex-row'>
      <div className='relative flex w-full max-w-full flex-row items-center justify-start focus-within:border-base-content max-mobile:input-group mobile:gap-2 mobile:p-0 mobile:input-bordered mobile:input tablet:max-w-lg'>
        <input type='text' placeholder='Тема' className='input w-full bg-transparent focus:outline-none max-mobile:input-bordered max-mobile:focus:border-base-content'
          value={state.name}
          onChange={(e) => {
            if (/^[А-ЯЁа-яёA-Za-z0-9 ]*$/.test(e.target.value)) {
              setState({ ...state, name: e.target.value });
            }
          }}
          onBlur={pushQuery}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              document.querySelector('input')?.blur();
              router.push(getQuery(state));
            }
          }}
        />
        <kbd className='kbd pointer-events-none absolute right-2 hidden bg-neutral tablet:flex'>/</kbd>
        <button className='btn-square btn flex mobile:hidden' onClick={() => { router.push(getQuery(state)); }}>
          <Search width='24px' height='24px' />
        </button>
      </div>
      <div className='mobile:input-group'>
        <select defaultValue={state.class} className='select-bordered select rounded-lg focus:border-base-content focus:outline-none'
          onChange={(e) => {
            state.class = e.target.value;
            document.querySelector('select')?.blur();
          }}
          onBlur={pushQuery}
        >
          <option value={''} disabled>Класс</option>
          <option value={'0'}>Любой</option>
          <option value={'6'}>6</option>
          <option value={'7'}>7</option>
          <option value={'8'}>8</option>
          <option value={'9'}>9</option>
        </select>
        <button className='btn-square btn hidden mobile:flex' onClick={pushQuery}>
          <Search width='24px' height='24px' />
        </button>
      </div>
    </div >
  );
}
