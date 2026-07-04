import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Calendar, Clock, Search, Check, Bus, Car, ChevronLeft, ChevronDown } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { cn } from '../../../shared/utils/cn';

const bookingSchema = z.object({
  pickupLocation: z.string().min(2, 'Pick-up location is required'),
  dropLocation: z.string().min(2, 'Drop-off location is required'),
  pickupDate: z.string().min(1, 'Pick-up date is required'),
  pickupTime: z.string().min(1, 'Pick-up time is required'),
  rideType: z.string(),
  vehicleType: z.string(),
  dropDate: z.string().optional(),
  dropTime: z.string().optional(),
  corporateShift: z.string().optional(),
  corporateDirection: z.string().optional(),
});

type BookingFields = z.infer<typeof bookingSchema>;

const getLocalDateString = (offsetDays = 0) => {
  const d = new Date();
  if (offsetDays) {
    d.setDate(d.getDate() + offsetDays);
  }
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const BookingSearchForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successData, setSuccessData] = React.useState<BookingFields | null>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubOpen, setIsSubOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsSubOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFields>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pickupLocation: 'Dallas Corporate HQ',
      dropLocation: 'North Residential Hub',
      pickupDate: getLocalDateString(),
      pickupTime: '09:00',
      rideType: 'Instant Ride',
      vehicleType: '4 - Wheel',
      dropDate: getLocalDateString(1),
      dropTime: '18:00',
      corporateShift: 'General Shift (09:00 AM - 06:00 PM)',
      corporateDirection: 'Home to Office',
    },
  });

  const activeRideType = watch('rideType') || 'Instant Ride';

  const onSubmit = async (data: BookingFields) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccessData(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const rideTypes = ['Instant Ride', 'One-Way', 'Round Trip', 'Corporate Sync'];

  return (
    <div className="relative w-full text-left">
      <Card className="border-brand-500/20 bg-slate-900/80 backdrop-blur-lg p-6 sm:p-8 shadow-2xl border rounded-2xl">
        {/* Ride Type Selector */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-4">
          {rideTypes.map((type) => {
            const isActive = activeRideType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setValue('rideType', type)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20'
                    : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {/* Pick-up Location */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pickupLocation"
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
                Pick-Up Location
              </label>
              <input
                id="pickupLocation"
                type="text"
                placeholder="Enter address or office hub"
                className={`flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent ${
                  errors.pickupLocation ? 'border-red-500 focus-visible:ring-red-500' : ''
                }`}
                {...register('pickupLocation')}
              />
              {errors.pickupLocation && (
                <span className="text-xs text-red-500 font-medium" role="alert" data-testid="pickup-error">
                  {errors.pickupLocation.message}
                </span>
              )}
            </div>

            {/* Drop-off Location */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="dropLocation"
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
                Drop-Off Location
              </label>
              <input
                id="dropLocation"
                type="text"
                placeholder="Enter address or office hub"
                className={`flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent ${
                  errors.dropLocation ? 'border-red-500 focus-visible:ring-red-500' : ''
                }`}
                {...register('dropLocation')}
              />
              {errors.dropLocation && (
                <span className="text-xs text-red-500 font-medium" role="alert" data-testid="drop-error">
                  {errors.dropLocation.message}
                </span>
              )}
            </div>

            {/* Pick-Up Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="pickupDate"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
                >
                  <Calendar className="h-3.5 w-3.5 text-brand-500" />
                  {activeRideType === 'Corporate Sync' ? 'Start Date' : 'Pick-Up Date'}
                </label>
                <input
                  id="pickupDate"
                  type="date"
                  className={`flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-2 text-xs sm:text-sm text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent ${
                    errors.pickupDate ? 'border-red-500 focus-visible:ring-red-500' : ''
                  }`}
                  {...register('pickupDate')}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="pickupTime"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
                >
                  <Clock className="h-3.5 w-3.5 text-brand-500" />
                  Time
                </label>
                <input
                  id="pickupTime"
                  type="time"
                  className={`flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-2 text-xs sm:text-sm text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent ${
                    errors.pickupTime ? 'border-red-500 focus-visible:ring-red-500' : ''
                  }`}
                  {...register('pickupTime')}
                />
              </div>
            </div>

            {/* Vehicle Type */}
            <div className="flex flex-col gap-1.5 relative">
              <label
                htmlFor="vehicleType"
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
              >
                <Car className="h-3.5 w-3.5 text-brand-500" />
                Vehicle Class
              </label>

              {/* Hidden input for react-hook-form registration */}
              <input type="hidden" id="vehicleType" {...register('vehicleType')} />

              <div ref={dropdownRef} className="relative w-full">
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex h-11 w-full items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <span className="truncate">{watch('vehicleType')}</span>
                  <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform duration-200", isOpen && "rotate-180")} />
                </button>

                {/* Main Dropdown Popover */}
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-lg border border-slate-800 bg-slate-950/95 backdrop-blur-md py-1 shadow-2xl z-50 text-sm">
                    {/* Header */}
                    <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-900 mb-1">
                      Choose Vehicle Class:
                    </div>

                    {/* Option: 4 - Wheel */}
                    <button
                      type="button"
                      onClick={() => {
                        setValue('vehicleType', '4 - Wheel');
                        setIsOpen(false);
                        setIsSubOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-slate-350 hover:bg-slate-900 hover:text-white transition-colors",
                        watch('vehicleType') === '4 - Wheel' && "bg-slate-900/50 text-brand-400 font-medium"
                      )}
                    >
                      4 - Wheel
                    </button>

                    {/* Option: Tempo Traveler (With sub-menu on hover/click) */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsSubOpen(true)}
                      onMouseLeave={() => setIsSubOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsSubOpen(!isSubOpen)}
                        className={cn(
                          "w-full text-left px-3 py-2 text-slate-350 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-between",
                          watch('vehicleType').startsWith('Tempo Traveler') && "bg-slate-900/50 text-brand-400 font-medium"
                        )}
                      >
                        <span>Tempo Traveler</span>
                        <ChevronLeft className="h-4 w-4 text-slate-500" />
                      </button>

                      {/* Sub-menu (Flyout on desktop, Accordion on mobile) */}
                      {isSubOpen && (
                        <div className="absolute top-0 right-full mr-1 w-60 rounded-lg border border-slate-800 bg-slate-950/95 backdrop-blur-md py-1 shadow-2xl z-50 transition-all duration-200">
                          {['12', '13', '14', '15', '16'].map((seats) => {
                            const val = `Tempo Traveler with ${seats} seater`;
                            const isSelected = watch('vehicleType') === val;
                            return (
                              <button
                                key={seats}
                                type="button"
                                onClick={() => {
                                  setValue('vehicleType', val);
                                  setIsOpen(false);
                                  setIsSubOpen(false);
                                }}
                                className={cn(
                                  "w-full text-left px-3 py-2 text-slate-350 hover:bg-slate-900 hover:text-white transition-colors pl-6 md:pl-3",
                                  isSelected && "bg-brand-500 text-slate-950 font-bold"
                                )}
                              >
                                {val}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Option: Mini Bus */}
                    <button
                      type="button"
                      onClick={() => {
                        setValue('vehicleType', 'Mini Bus');
                        setIsOpen(false);
                        setIsSubOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-slate-350 hover:bg-slate-900 hover:text-white transition-colors",
                        watch('vehicleType') === 'Mini Bus' && "bg-slate-900/50 text-brand-400 font-medium"
                      )}
                    >
                      Mini Bus
                    </button>

                    {/* Option: Luxury Coach */}
                    <button
                      type="button"
                      onClick={() => {
                        setValue('vehicleType', 'Luxury Coach');
                        setIsOpen(false);
                        setIsSubOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-slate-350 hover:bg-slate-900 hover:text-white transition-colors",
                        watch('vehicleType') === 'Luxury Coach' && "bg-slate-900/50 text-brand-400 font-medium"
                      )}
                    >
                      Luxury Coach
                    </button>

                    {/* Option: Commercial Cargo / Truck */}
                    <button
                      type="button"
                      onClick={() => {
                        setValue('vehicleType', 'Commercial Cargo / Truck');
                        setIsOpen(false);
                        setIsSubOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-slate-355 hover:bg-slate-900 hover:text-white transition-colors",
                        watch('vehicleType') === 'Commercial Cargo / Truck' && "bg-slate-900/50 text-brand-400 font-medium"
                      )}
                    >
                      Commercial Cargo / Truck
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Conditional Fields: Corporate Sync Shift / Round Trip Return Date */}
          {(activeRideType === 'Round Trip' || activeRideType === 'Corporate Sync') && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end mt-4 border-t border-slate-850 pt-4">
              {activeRideType === 'Round Trip' ? (
                <div className="grid grid-cols-2 gap-4 col-span-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="dropDate"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
                    >
                      <Calendar className="h-3.5 w-3.5 text-brand-500" />
                      Return Date
                    </label>
                    <input
                      id="dropDate"
                      type="date"
                      className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-2 text-xs sm:text-sm text-slate-100 transition-colors focus-visible:outline-none"
                      {...register('dropDate')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="dropTime"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
                    >
                      <Clock className="h-3.5 w-3.5 text-brand-500" />
                      Return Time
                    </label>
                    <input
                      id="dropTime"
                      type="time"
                      className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-2 text-xs sm:text-sm text-slate-100 transition-colors focus-visible:outline-none"
                      {...register('dropTime')}
                    />
                  </div>
                </div>
              ) : (
                <>
                  {/* Shift Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="corporateShift"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
                    >
                      <Clock className="h-3.5 w-3.5 text-brand-500" />
                      Commute Shift Timing
                    </label>
                    <select
                      id="corporateShift"
                      className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus-visible:outline-none"
                      {...register('corporateShift')}
                    >
                      <option>Morning Shift (07:00 AM - 04:00 PM)</option>
                      <option>General Shift (09:00 AM - 06:00 PM)</option>
                      <option>Evening Shift (01:00 PM - 10:00 PM)</option>
                      <option>Night Shift (10:00 PM - 07:00 AM)</option>
                    </select>
                  </div>

                  {/* Shift Direction */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="corporateDirection"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5"
                    >
                      <Bus className="h-3.5 w-3.5 text-brand-500" />
                      Route Sync
                    </label>
                    <select
                      id="corporateDirection"
                      className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus-visible:outline-none"
                      {...register('corporateDirection')}
                    >
                      <option value="Home to Office">Home ➜ Office</option>
                      <option value="Office to Home">Office ➜ Home</option>
                      <option value="Double Sync">Daily Round-Sync (Both)</option>
                    </select>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Book Ride Button */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full md:w-auto px-8 h-11 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand-600/20"
              data-testid="search-submit"
            >
              <Search className="h-4 w-4" />
              Book Ride Selection
            </Button>
          </div>
        </form>
      </Card>

      {/* Success Modal */}
      {successData && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm z-50"
          data-testid="search-success-modal"
        >
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-2">
              <div className="p-2 bg-brand-500/10 border border-brand-500/20 text-brand-500 rounded-full">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Booking Selected</h3>
                <p className="text-xs text-slate-500">Checking matching fleet routes & vehicles</p>
              </div>
            </div>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              <pre>{JSON.stringify(successData, null, 2)}</pre>
            </div>
            <div className="flex justify-end">
              <Button size="sm" onClick={() => setSuccessData(null)}>
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookingSearchForm;
