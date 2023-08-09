import { Badge } from '@/components/ui/badge';

const variantComplexity = (c: string):
  'outline' | 'complexityEasy' | 'complexityNormal' | 'complexityHard' | 'complexityVeryHard' => {
  switch (c) {
    case 'Легко': return 'complexityEasy';
    case 'Нормально': return 'complexityNormal';
    case 'Сложно': return 'complexityHard';
    case 'Очень сложно': return 'complexityVeryHard';
    default: return 'outline';
  }
};

function BadgeSkeleton(): JSX.Element {
  return <Badge variant='outline' className='h-[22px] w-20 animate-pulse bg-primary/10' />;
}

function BadgeComplexityRender({ complexity }: { complexity: string }): JSX.Element {
  return <Badge variant={variantComplexity(complexity)} className='w-fit'> {complexity} </Badge>;
}

function BadgeClassesRender({ classes }: { classes: string }): JSX.Element {
  return <Badge variant='outline' className='w-fit'> {classes} </Badge>;
}

function BadgeThemesRender({ themes }: { themes: Array<string> }): JSX.Element {
  return (
    <div className='hide-scroll-bar flex max-w-full gap-2 overflow-x-scroll rounded-lg'>
      {themes.map((theme, key) => <Badge key={key} variant='outline' className='w-fit flex-none'> {theme} </Badge>)}
    </div>
  );
}

export {
  BadgeSkeleton,
  BadgeComplexityRender,
  BadgeClassesRender,
  BadgeThemesRender,
};
