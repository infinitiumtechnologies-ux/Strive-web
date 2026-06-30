import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/20',
      secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700',
      outline: 'bg-transparent text-slate-100 hover:bg-slate-800 border border-slate-700',
      ghost: 'bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white',
      danger: 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/20',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-5 text-base',
      lg: 'h-12 px-6 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.015 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.985 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" data-testid="button-loader" />
        ) : null}
        {children}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
