import * as React from 'react';
import { Users, Fuel, Briefcase, Gauge, Check } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import vehicleCar from '../../../assets/vehicle_car.png';
import vehicleTempo from '../../../assets/vehicle_tempo.png';
import vehicleMinibus from '../../../assets/vehicle_minibus.png';
import vehicleHitechBus from '../../../assets/vehicle_hitech_bus.png';

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: 'Auto' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Electric';
  luggage: number;
}

export const vehiclesData: Vehicle[] = [
  {
    id: 'v1',
    name: 'Toyota Camry / Sedan',
    category: '4-Wheel',
    image: vehicleCar,
    pricePerDay: 50,
    seats: 4,
    transmission: 'Auto',
    fuel: 'Petrol',
    luggage: 2,
  },
  {
    id: 'v2',
    name: 'Ford Explorer / SUV',
    category: '4-Wheel',
    image: vehicleCar,
    pricePerDay: 75,
    seats: 7,
    transmission: 'Auto',
    fuel: 'Diesel',
    luggage: 4,
  },
  {
    id: 'v3',
    name: 'Mercedes Sprinter / Tempo',
    category: 'Tempo',
    image: vehicleTempo,
    pricePerDay: 120,
    seats: 15,
    transmission: 'Auto',
    fuel: 'Diesel',
    luggage: 6,
  },
  {
    id: 'v4',
    name: 'Force Traveller Shuttler',
    category: 'Tempo',
    image: vehicleTempo,
    pricePerDay: 110,
    seats: 12,
    transmission: 'Manual',
    fuel: 'Diesel',
    luggage: 8,
  },
  {
    id: 'v5',
    name: 'Isuzu Corporate Coaster',
    category: 'Medium Bus',
    image: vehicleMinibus,
    pricePerDay: 180,
    seats: 28,
    transmission: 'Manual',
    fuel: 'Diesel',
    luggage: 15,
  },
  {
    id: 'v6',
    name: 'Volvo Luxury Coach Bus',
    category: '54-Seater Bus',
    image: vehicleHitechBus,
    pricePerDay: 350,
    seats: 54,
    transmission: 'Auto',
    fuel: 'Diesel',
    luggage: 50,
  },
];

export const FeaturedVehicles: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = React.useState<Vehicle | null>(null);

  return (
    <section id="features" className="py-20 bg-slate-950 border-t border-slate-900" data-testid="featured-vehicles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
            Our Fleet
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Vehicles For Rent
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Explore our curated selection of top-tier cars available for immediate booking.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehiclesData.map((car) => (
            <Card
              key={car.id}
              hoverEffect
              className="flex flex-col h-[420px] overflow-hidden p-0 border border-slate-800 bg-slate-900/30 group"
              data-testid="vehicle-card"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
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
                <span className="absolute top-4 left-4 bg-brand-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {car.category}
                </span>
              </div>

              {/* Specs & Pricing */}
              <div className="flex-grow p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-brand-500 transition-colors line-clamp-1">
                    {car.name}
                  </h3>
                  <p className="text-xl font-extrabold text-white">
                    ${car.pricePerDay}
                    <span className="text-xs font-medium text-slate-500"> / Day</span>
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-b border-slate-800/80 py-4 my-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Users className="h-4 w-4 text-brand-500" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Briefcase className="h-4 w-4 text-brand-500" />
                    <span>{car.luggage} Bags</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Gauge className="h-4 w-4 text-brand-500" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Fuel className="h-4 w-4 text-brand-500" />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => setSelectedVehicle(car)}
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-200 hover:bg-brand-500 hover:text-slate-950 hover:border-brand-500 font-semibold"
                >
                  Rent Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking confirmation modal overlay */}
      {selectedVehicle && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm z-50" data-testid="rent-confirm-modal">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-2">
              <div className="p-2 bg-brand-500/10 border border-brand-500/20 text-brand-500 rounded-full">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Car Selected</h3>
                <p className="text-xs text-slate-500">Confirm booking details for your trip</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-slate-950">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-bold text-white">{selectedVehicle.name}</p>
              <div className="flex justify-between text-sm text-slate-400 border-t border-slate-800 pt-3">
                <span>Daily rate:</span>
                <strong className="text-white">${selectedVehicle.pricePerDay} / Day</strong>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="ghost" size="sm" onClick={() => setSelectedVehicle(null)}>
                Cancel
              </Button>
              <Button size="sm" onClick={() => setSelectedVehicle(null)}>
                Confirm Rental
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
