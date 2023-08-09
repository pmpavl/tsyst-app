'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

const availableClass: Array<string> = ['0', '5', '6', '7', '8', '9', '10', '11'];
const availableComplexity: Array<string> = ['undefined', 'easy', 'normal', 'hard', 'veryHard'];

function readableClass(v: string): string { return v === '0' ? 'Любой класс' : `${v} класс`; }
function readableComplexity(v: string): string {
  switch (v) {
    case 'easy': return 'Легко';
    case 'normal': return 'Нормально';
    case 'hard': return 'Сложно';
    case 'veryHard': return 'Очень сложно';
    default: return 'Любая сложность';
  }
}

function getName(_name: string | null): string {
  return _name === null ? '' : _name;
}

function getClass(_class: string | null): string {
  return _class === null ? '' : availableClass.includes(_class) ? _class : '';
}

function getComplexity(_complexity: string | null): string {
  return _complexity === null ? '' : availableComplexity.includes(_complexity) ? _complexity : '';
}

function getQuery(state: SearchState): string {
  const query = new URLSearchParams();

  if (state.name !== '') { query.append('name', state.name); }
  if (state.class !== '' && state.class !== '0') { query.append('class', state.class); }
  if (state.complexity !== '' && state.complexity !== 'undefined') { query.append('complexity', state.complexity); }

  return `/search?${query.toString()}`;
}

type SearchState = {
  name: string;
  class: string;
  complexity: string;
};

function Search(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [state, setState] = React.useState<SearchState>({
    name: getName(searchParams.get('name')),
    class: getClass(searchParams.get('class')),
    complexity: getComplexity(searchParams.get('complexity')),
  } as SearchState);

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
    <div className='flex w-full flex-row gap-2 max-tablet:flex-wrap'>
      <Input className='w-full' type='text' placeholder='Название'
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
      <Select
        defaultValue={state.class === '' ? undefined : state.class}
        onValueChange={(v) => { state.class = v; pushQuery(); }}
      >
        <SelectTrigger className='mobile:max-tablet:flex-1 tablet:w-96'>
          <SelectValue placeholder='Класс' />
        </SelectTrigger>
        <SelectContent>
          {availableClass.map((v) => <SelectItem key={v} value={v.toString()}> {readableClass(v)} </SelectItem>)}
        </SelectContent>
      </Select>
      <Select
        defaultValue={state.complexity === '' ? undefined : state.complexity}
        onValueChange={(v) => { state.complexity = v; pushQuery(); }}
      >
        <SelectTrigger className='max-tablet:flex-1 tablet:w-96'>
          <SelectValue placeholder='Сложность' />
        </SelectTrigger>
        <SelectContent>
          {availableComplexity.map((v) => <SelectItem key={v} value={v}> {readableComplexity(v)} </SelectItem>)}
        </SelectContent>
      </Select>
      <Button variant='default' onClick={pushQuery}>
        <Icons.search className='h-5 w-5' />
      </Button>
    </div>
  );
}

export { Search };
