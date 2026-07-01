import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { vehiclesData } from './FeaturedVehicles';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';

export const CarFleet: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>('All');

  const tabs = ['All', '4-Wheel', 'Tempo', 'Medium Bus', '54-Seater Bus'];

  const filteredVehicles =
    activeTab === 'All' ? vehiclesData : vehiclesData.filter((car) => car.category === activeTab);

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900" data-testid="car-fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
            Our Fleet
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Our Fleet Categories
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Choose the category that fits your travel style. Switch tabs to see available options.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 border-b border-slate-800 pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isActive ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200'
                }`}
                data-testid={`fleet-tab-${tab.toLowerCase()}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFleetTab"
                    className="absolute inset-0 bg-brand-500 rounded-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab} Fleet</span>
              </button>
            );
          })}
        </div>

        {/* List of Vehicles */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                data-testid="fleet-car-item"
              >
                <Card className="flex flex-col h-[380px] overflow-hidden p-0 border border-slate-855 bg-slate-900/10 hover:border-slate-800">
                  <div className="relative h-44 w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.onerror = null;
                        t.src = `https://placehold.co/600x300/0f172a/334155?text=${encodeURIComponent(car.name)}`;
                      }}
                    />
                  </div>
                  <div className="flex-grow p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-slate-200">{car.name}</h4>
                      <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                        {car.category}
                      </p>
                    </div>
                    <div className="flex justify-between items-center border-t border-slate-800/80 pt-4 mt-4">
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Daily Rate</p>
                        <p className="text-lg font-extrabold text-white">${car.pricePerDay}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-brand-500 hover:text-slate-950 border-slate-700"
                      >
                        Book Fleet
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
