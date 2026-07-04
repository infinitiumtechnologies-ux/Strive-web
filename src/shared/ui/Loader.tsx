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
  // If it's a small loader inside a button or small card, we render the spinner to avoid oversized layout shifts
  if (size === 'sm' && !fullPage) {
    return (
      <div
        className={cn(
          'animate-spin rounded-full border-brand-500/20 border-t-brand-500 h-5 w-5 border-2',
          className
        )}
        role="status"
        aria-label="Loading"
        data-testid="spinner-loader"
      />
    );
  }

  // Otherwise, we return null to remove the large system loader
  return null;
};

export default Loader;
