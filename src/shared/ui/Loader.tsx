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

  // Otherwise, we show the beautiful premium car outline loader
  const carLoader = (
    <div className={cn('flex flex-col items-center justify-center text-center', className)}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-loader-car {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes slide-loader-progress {
          0% { left: -40%; }
          100% { left: 100%; }
        }
        @keyframes pulse-loader-text {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-float-car {
          animation: float-loader-car 2.5s ease-in-out infinite;
        }
        .animate-slide-progress {
          animation: slide-loader-progress 1.5s infinite ease-in-out;
        }
        .animate-pulse-text {
          animation: pulse-loader-text 1.6s infinite;
        }
      `}} />
      
      {/* Car Outline Container */}
      <div className="relative w-44 sm:w-56 h-auto object-contain animate-float-car filter drop-shadow(0 8px 20px rgba(239, 68, 68, 0.12))">
        <img
          src={appLoaderCar}
          alt="Strive System Loader"
          className="w-full h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Progress slider bar */}
      <div className="w-32 sm:w-40 h-[3px] bg-slate-900 border border-slate-800 rounded-full overflow-hidden relative mt-5">
        <div className="absolute h-full w-2/5 bg-gradient-to-r from-red-650 to-brand-500 rounded-full animate-slide-progress" style={{
          background: 'linear-gradient(90deg, #ef4444, #f59e0b)'
        }} />
      </div>

      {/* Spacing and text */}
      <div className="mt-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase animate-pulse-text">
        Syncing Strive...
      </div>
    </div>
  );

  if (fullPage) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-slate-950/85 backdrop-blur-md z-50"
        data-testid="fullpage-loader"
      >
        {carLoader}
      </div>
    );
  }

  return carLoader;
};

export default Loader;
