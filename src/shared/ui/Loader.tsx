import * as React from 'react';
import { cn } from '../utils/cn';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  fullPage?: boolean;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  fullPage = false,
  className,
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6 border-2',
    md: 'h-10 w-10 border-3',
    lg: 'h-16 w-16 border-4',
  };

  const loaderElement = (
    <div
      className={cn(
        'animate-spin rounded-full border-brand-500/20 border-t-brand-500',
        sizeClasses[size],
        className,
      )}
      role="status"
      aria-label="Loading"
      data-testid="spinner-loader"
    />
  );

  if (fullPage) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm z-50"
        data-testid="fullpage-loader"
      >
        {loaderElement}
      </div>
    );
  }

  return loaderElement;
};
