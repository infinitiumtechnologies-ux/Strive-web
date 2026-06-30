import * as React from 'react';
import { cn } from '../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'animate-pulse bg-slate-800',
        variant === 'text' && 'h-4 w-full rounded',
        variant === 'circular' && 'h-12 w-12 rounded-full',
        variant === 'rectangular' && 'rounded-lg',
        className,
      )}
      {...props}
      data-testid="skeleton-element"
    />
  );
};
