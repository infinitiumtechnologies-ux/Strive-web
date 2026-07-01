import * as React from 'react';
import { Users, Briefcase, Gauge, Fuel, ArrowRight } from 'lucide-react';

interface ServiceFeature {
  icon: React.ReactNode;
  label: string;
}

interface FleetService {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  specs: { seats: string; luggage: string; transmission: string; fuel: string };
  priceFrom: number;
  image: string;
  accentColor: string;
  tagBg: string;
}

const fleetServices: FleetService[] = [
  {
    id: 'car',
    tag: 'Car / Sedan & SUV',
    title: 'City Rides & Personal Commutes',
    subtitle: 'Comfortable 4-Wheeler Sedans & SUVs',
    description:
      'Perfect for daily corporate commutes, airport transfers, and personal errands. Our premium sedans and SUVs offer leather interiors, climate control, and GPS-tracked routes — ensuring you arrive relaxed and on time. Ideal for executives, solo travelers, and small groups up to 7 passengers.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: 'Up to 7 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Auto & Manual Variants' },
      { icon: <Fuel className="h-4 w-4" />, label: 'Petrol & Diesel Options' },
      { icon: <Briefcase className="h-4 w-4" />, label: 'Luggage Capacity: 2–4 Bags' },
    ],
    specs: { seats: '4–7', luggage: '2–4 bags', transmission: 'Auto', fuel: 'Petrol / Diesel' },
    priceFrom: 50,
    image:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    accentColor: '#f59e0b',
    tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
  {
    id: 'tempo',
    tag: 'Tempo / Traveller Van',
    title: 'Group Shuttles & Team Transport',
    subtitle: 'Spacious Vans for 12–17 Passengers',
    description:
      'Designed for corporate employee shuttle runs and medium-sized group travel. Tempo travellers offer wide seating, high roof clearance, and generous luggage space. Ideal for office teams, school trips, and event transportation requiring comfort across short to medium distances.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: '12–17 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Auto & Manual Gearbox' },
      { icon: <Fuel className="h-4 w-4" />, label: 'Diesel Powered' },
      { icon: <Briefcase className="h-4 w-4" />, label: 'Large Luggage: 6–8 Bags' },
    ],
    specs: { seats: '12–17', luggage: '6–8 bags', transmission: 'Auto / Manual', fuel: 'Diesel' },
    priceFrom: 110,
    image:
      'https://images.unsplash.com/photo-1542318041-958b16956f76?auto=format&fit=crop&w=800&q=80',
    accentColor: '#10b981',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
  {
    id: 'minibus',
    tag: 'Mini Bus / Coaster',
    title: 'Corporate Fleets & Event Coaches',
    subtitle: 'Mid-Capacity Coaches for 20–35 Riders',
    description:
      'Our corporate coaster buses are engineered for organized employee fleet operations. With structured seating, route-optimized scheduling, and on-board amenities, they serve as the backbone of daily corporate mobility. Excellent for inter-campus office routes and conference transfers.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: '20–35 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Manual Transmission' },
      { icon: <Fuel className="h-4 w-4" />, label: 'High-Efficiency Diesel' },
      { icon: <Briefcase className="h-4 w-4" />, label: 'Cargo Bay: 10–15 Bags' },
    ],
    specs: { seats: '20–35', luggage: '10–15 bags', transmission: 'Manual', fuel: 'Diesel' },
    priceFrom: 180,
    image:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    accentColor: '#6366f1',
    tagBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  },
  {
    id: 'bus',
    tag: 'Full Coach Bus',
    title: 'Luxury Long-Haul & Mass Transit',
    subtitle: '54-Seater Premium Coach Buses',
    description:
      'For large-scale institutional travel, intercity corporate trips, and premium charter services, our full-size Volvo and luxury coach buses provide an unmatched experience. Equipped with reclining seats, AC, overhead storage, and GPS monitoring — your entire team travels in style and safety.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: 'Up to 54 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Automatic Transmission' },
      { icon: <Fuel className="h-4 w-4" />, label: 'Diesel Engine' },
      { icon: <Briefcase className="h-4 w-4" />, label: 'XL Cargo: 50 Bags' },
    ],
    specs: { seats: '54', luggage: '50 bags', transmission: 'Auto', fuel: 'Diesel' },
    priceFrom: 350,
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    accentColor: '#f43f5e',
    tagBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  },
];

/* ─── Intersection Observer hook ─── */
function useInView(threshold = 0.2) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─── Single Service Row ─── */
const ServiceRow: React.FC<{ service: FleetService; index: number }> = ({ service, index }) => {
  const { ref, inView } = useInView(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        flex flex-col lg:flex-row items-center gap-0 overflow-hidden
        border border-slate-800/60 rounded-2xl bg-slate-900/30
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${isEven ? '' : 'lg:flex-row-reverse'}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* ── TEXT ── 70% */}
      <div className="w-full lg:w-[70%] p-8 md:p-10 lg:p-12 space-y-6 order-2 lg:order-none">
        {/* Tag */}
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full border ${service.tagBg}`}
        >
          {service.tag}
        </span>

        {/* Heading */}
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            {service.title}
          </h3>
          <p
            className="text-sm font-semibold"
            style={{ color: service.accentColor }}
          >
            {service.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Feature chips */}
        <div className="grid grid-cols-2 gap-3">
          {service.features.map((feat, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2"
              style={{
                transitionDelay: `${index * 80 + i * 60}ms`,
              }}
            >
              <span style={{ color: service.accentColor }}>{feat.icon}</span>
              <span className="text-xs text-slate-300 font-medium">{feat.label}</span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-4 pt-2">
          <div>
            <span className="text-3xl font-extrabold text-white">${service.priceFrom}</span>
            <span className="text-slate-500 text-sm ml-1">/ Day</span>
          </div>
          <button
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ backgroundColor: service.accentColor }}
          >
            Book This Fleet
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* ── IMAGE ── 30% */}
      <div
        className={`
          w-full lg:w-[30%] h-60 lg:h-full min-h-[260px] relative overflow-hidden order-1 lg:order-none
          ${isEven ? 'lg:rounded-r-2xl' : 'lg:rounded-l-2xl'}
        `}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 z-10 ${
            isEven
              ? 'bg-gradient-to-r from-slate-900/80 via-slate-900/20 to-transparent'
              : 'bg-gradient-to-l from-slate-900/80 via-slate-900/20 to-transparent'
          }`}
        />
        <img
          src={service.image}
          alt={service.title}
          className={`
            w-full h-full object-cover
            transition-transform duration-[1.2s] ease-out
            ${inView ? 'scale-100' : 'scale-110'}
          `}
        />
        {/* Floating accent badge */}
        <div
          className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full text-xs font-bold text-slate-950"
          style={{ backgroundColor: service.accentColor }}
        >
          From ${service.priceFrom}/Day
        </div>
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
export const FleetServices: React.FC = () => {
  const { ref: headRef, inView: headInView } = useInView(0.2);

  return (
    <section
      id="fleet-services"
      className="py-20 bg-slate-950 border-t border-slate-900"
      data-testid="fleet-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div
          ref={headRef}
          className={`text-center space-y-3 transition-all duration-700 ${
            headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-500 uppercase">
            Our Fleet
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Every Journey, Every Scale
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            From solo city commutes to large corporate coach deployments — explore our four core
            fleet categories, each purpose-built for your transportation needs.
          </p>
        </div>

        {/* Service Rows */}
        <div className="space-y-8">
          {fleetServices.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
