import * as React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md p-6 text-slate-100 shadow-sm transition-all duration-300',
          hoverEffect &&
            'hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
