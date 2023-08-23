'use client';

import * as React from 'react';
import Link from 'next/link';

import { AppContext } from '@/components/providers';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Auth, Icons } from '@/components';

function HeaderAuth(): JSX.Element {
  const { auth, logout } = React.useContext(AppContext);

  if (!auth) { return <Auth />; }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='hidden tablet:block'>
          <Button size='sm' variant='ghost'>
            <Icons.user className='h-5 w-5' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 text-primary'>
          <DropdownMenuLabel> Мой профиль </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href='/profile' target='_self' className='flex w-full flex-row gap-2 text-sm'>
                Профиль
                <Icons.user className='ml-auto h-5 w-5 text-xs tracking-widest opacity-60' />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>
            <button className='flex w-full flex-row gap-2 text-sm'>
              Выход
              <Icons.logOut className='ml-auto h-5 w-5 text-xs tracking-widest opacity-60' />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Sheet> {/* Mobile and tablet view */}
        <SheetTrigger asChild className='block tablet:hidden'>
          <Button size='sm' variant='ghost'>
            <Icons.user className='h-5 w-5' />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              Мой профиль
            </SheetTitle>
          </SheetHeader>
          <div className='flex flex-col space-y-3 pt-3'>
            <Separator />
            <SheetClose asChild>
              <Link href='/search' target='_self' className='flex w-full flex-row gap-2 text-sm'>
                Профиль
                <Icons.user className='ml-auto h-5 w-5 text-xs tracking-widest opacity-60' />
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href='/' target='_self' className='flex w-full flex-row gap-2 text-sm'>
                Настройки
                <Icons.settings className='ml-auto h-5 w-5 text-xs tracking-widest opacity-60' />
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <button onClick={logout} className='flex w-full flex-row gap-2 text-sm'>
                Выход
                <Icons.logOut className='ml-auto h-5 w-5 text-xs tracking-widest opacity-60' />
              </button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export { HeaderAuth };
