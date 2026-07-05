import * as React from 'react';
import { cn } from '../utils/cn';
import appLoaderCar from '../../assets/app_loader_car.png';

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

  // Full page loader
  if (fullPage) {
    return (
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white select-none',
          className
        )}
        role="status"
        aria-label="Loading application"
        data-testid="full-page-loader"
      >
        {/* Ambient background glow matching the red car outline */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] animate-pulse duration-[3000ms]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-500/5 blur-[80px]" />
        </div>

        {/* Loader content container */}
        <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-8">
          {/* Glowing/pulsing car silhouette */}
          <div className="relative w-72 h-40 flex items-center justify-center">
            {/* Ambient red pulse shadow behind the car */}
            <div className="absolute inset-x-4 inset-y-8 bg-red-500/10 rounded-full blur-3xl animate-pulse duration-[2000ms]" />
            
            {/* The car image */}
            <img
              src={appLoaderCar}
              alt="Strive Wheels Loading"
              className="relative w-full h-auto object-contain animate-pulse duration-1000"
            />
          </div>

          {/* Loading information */}
          <div className="space-y-2">
            <h2 className="text-xl font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white uppercase">
              Strive Wheels
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-xs text-red-500 font-semibold tracking-[0.15em] uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              Redefining Corporate Mobility
            </div>
          </div>

          {/* Sleek, thin progress loader bar */}
          <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>
    );
  }

  // Large standard/inline loader (if fullPage is false but size is md/lg)
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 space-y-4',
        className
      )}
      role="status"
      aria-label="Loading content"
      data-testid="inline-loader"
    >
      <div className="relative w-36 h-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-red-500/5 rounded-full blur-xl animate-pulse" />
        <img
          src={appLoaderCar}
          alt="Loading"
          className="relative w-full h-auto object-contain animate-pulse"
        />
      </div>
      <div className="w-24 h-1 bg-slate-900 rounded-full overflow-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-full bg-red-500 rounded-full animate-loading-bar" />
      </div>
    </div>
  );
};

export default Loader;

