import { Badge } from '@/components/ui/badge';

const complexityVariant = (c: string):
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

function BadgeView({ type, str }: {
  type?: 'complexity' | 'theme',
  str: string,
}): JSX.Element {
  switch (type) {
    case 'complexity':
      return <Badge variant={complexityVariant(str)} className='w-fit'> {str} </Badge>;
    case 'theme':
      return <Badge variant='outline' className='w-fit flex-none bg-background first:ml-1 last:mr-1'> {str} </Badge>;
    default:
      return <Badge variant='outline' className='w-fit'> {str} </Badge>;
  }
}

export { BadgeSkeleton, BadgeView };
