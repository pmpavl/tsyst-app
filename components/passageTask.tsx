'use client';

import * as React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Latex from 'react-latex-next';

import {
  APIPassage, ErrorDefault,
  PassageUpdateRequest, PassageEndRequest,
} from '@/api';

import { AppContext } from '@/components/providers';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import {
  Ticker, Icons, BadgeView,
  peToast, swwToast,
} from '@/components';
import { Passage, PassageTask } from '@/models';

function PassageTaskMetaView({ end }: { end: Date }): JSX.Element {
  return (
    <>
      <Badge variant='outline' className='w-fit px-3 pt-1'>
        <Ticker end={end} />
      </Badge>
      <p className='max-w-[700px] text-lg text-muted-foreground'>
        Сгенерировано специально для вас. Будьте внимательны, изменить свой ответ нельзя. Соберитесь и у вас все получится.
      </p>
    </>
  );
}

function PassageTaskTypeView({ control, radio }: {
  control: Control<{ answer: string; }, any>,
  radio?: Array<string>,
}): JSX.Element {
  if (radio === undefined) {
    return (
      <div className='flex w-full flex-row gap-2'>
        <FormField control={control} name='answer' render={({ field }) => (
          <FormItem className='flex-1'>
            <FormControl>
              <Input placeholder='Ответ' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <Button type='submit'> Ответить </Button>
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col gap-2'>
      <FormField control={control} name='answer' render={() => (
        <FormItem>
          {radio.map((answer) => (
            <FormField key={answer} control={control} name='answer' render={({ field }) => {
              return (
                <FormItem key={answer} className='flex flex-row items-center space-x-3 space-y-0'   >
                  <FormControl>
                    <Checkbox checked={field.value === answer} onCheckedChange={() => field.onChange(field.value = answer)} />
                  </FormControl>
                  {/* eslint-disable-next-line react/no-children-prop */}
                  <FormLabel className='text-sm'> <Latex children={answer} />  </FormLabel>
                </FormItem>
              );
            }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
      />
      <div className='flex justify-end'>
        <Button type='submit'> Ответить </Button>
      </div>
    </div>
  );
}

const taskSchema = z.object({
  answer: z.string({
    required_error: 'Введите ответ',
  }).nonempty('Введите ответ'),
});

function PassageTaskView({ id, idx, count, task, setPassage }: {
  id: string,
  idx: number, count: number,
  task: PassageTask,
  setPassage: React.Dispatch<React.SetStateAction<Passage>>,
}): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const { auth, tokens } = React.useContext(AppContext);
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    values: { answer: '' },
  });

  async function onSubmit(values: z.infer<typeof taskSchema>): Promise<void> {
    if (!auth || tokens === undefined) {
      router.push('/');
      return;
    }

    const passageUpdateRequest = new PassageUpdateRequest({
      accessToken: tokens.accessToken,
      id: id,
      num: idx,
      answerUser: values.answer,
    });
    const response = await APIPassage.update(passageUpdateRequest);
    if (response instanceof ErrorDefault) {
      toast(swwToast);
      return;
    }

    setPassage(new Passage(id, response));
    form.setValue('answer', '');
  }

  async function onClose(): Promise<void> {
    if (!auth || tokens === undefined) {
      router.push('/');
      return;
    }

    const passageEndRequest = new PassageEndRequest({ accessToken: tokens.accessToken, id: id });
    const response = await APIPassage.end(passageEndRequest);
    if (response instanceof ErrorDefault) {
      toast(swwToast);
      return;
    }

    setPassage(new Passage(id, response));
  }

  return (
    <Card className='w-full'>
      <CardHeader className='gap-2'>
        <CardTitle className='relative flex flex-row flex-wrap items-center gap-2 pr-24'>
          Задача №{idx + 1}
          <div className='flex flex-row flex-wrap gap-2'>
            <BadgeView str={task.tags.type} />
            <BadgeView str={task.points} />
            <BadgeView type='complexity' str={task.tags.complexity} />
            {task.tags.themes.map((theme, key) => <BadgeView key={key} str={theme} />)}
          </div>
          <div className='absolute right-0 top-0 flex flex-row flex-nowrap items-center gap-2'>
            <p className='text-muted-foreground'>
              {idx + 1}/{count}
            </p>
            <Button variant='outline' size='icon' className='h-8 w-8' onClick={() => toast({
              ...peToast,
              action: <ToastAction altText='Да' onClick={onClose}> Да </ToastAction>,
            })}>
              <Icons.x className='h-4 w-4' />
            </Button>
          </div>
        </CardTitle>
        {/* eslint-disable-next-line react/no-children-prop */}
        <CardDescription className='text-base'> <Latex children={task.condition} /> </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <PassageTaskTypeView control={form.control} radio={task.radio} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export { PassageTaskMetaView, PassageTaskView };
