'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const progressVariants = cva(
  'h-full w-full flex-1 transition-all',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        destructive: 'bg-destructive',
        warning: 'bg-warning',
        success: 'bg-success',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & VariantProps<typeof progressVariants>
>(({ className, variant, value, max = 100, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={progressVariants({ variant })}
      style={{ transform: `translateX(-${100 - Math.round(((value ?? 0) / max) * 100)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
