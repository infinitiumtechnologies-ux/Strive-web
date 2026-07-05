import * as React from 'react';
import { Users, Briefcase, Gauge, Fuel, ArrowRight, ChevronDown, Truck, Music } from 'lucide-react';
import vehicleCar from '../../../assets/vehicle_car.png';
import vehicleTempo from '../../../assets/vehicle_tempo.png';
import vehicleMinibus from '../../../assets/vehicle_minibus.png';
import vehicleHitechBus from '../../../assets/vehicle_hitech_bus.png';
import vehicleTruck from '../../../assets/vehicle_truck.png';

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
interface ServiceFeature { icon: React.ReactNode; label: string }
interface FleetService {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  priceFrom: number;
  image: string;
  accentHex: string;
  glowRgba: string;
  tagBg: string;
}

const fleetServices: FleetService[] = [
  {
    id: 'car',
    number: '01',
    tag: 'Sedans, SUVs & XUVs',
    title: 'City Rides & Personal Commutes',
    subtitle: 'Comfortable 4-Wheeler Sedans, SUVs & XUVs',
    description:
      'Perfect for daily corporate commutes, airport transfers, and executive travel. Our premium fleet of sedans, SUVs, and XUVs features luxurious interiors, climate-controlled comfort, and real-time GPS tracking - ensuring every journey is safe, seamless, and punctual.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: 'Up to 7 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Auto & Manual Variants' },
      { icon: <Fuel className="h-4 w-4" />, label: 'Petrol, Diesel & CNG Options' },
      { icon: <Briefcase className="h-4 w-4" />, label: '2-6 Bags Luggage' },
    ],
    priceFrom: 50,
    image: vehicleCar,
    accentHex: '#f59e0b',
    glowRgba: 'rgba(245,158,11,0.18)',
    tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
  {
    id: 'tempo',
    number: '02',
    tag: 'Tempo Traveler',
    title: 'Group Shuttles & Family Transport',
    subtitle: 'Spacious Vans for 12-17 Passengers',
    description:
      'Designed for daily corporate employee shuttles, team transportation, and medium-sized group travel. Our Tempo Travelers offer spacious seating, ample headroom, generous luggage capacity, and superior comfort - making them ideal for office commutes, corporate events, conferences, and outstation trips.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: '12-17 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Auto & Manual Gearbox' },
      { icon: <Fuel className="h-4 w-4" />, label: 'Diesel Powered' },
      { icon: <Briefcase className="h-4 w-4" />, label: '6-8 Bags Luggage' },
      { icon: <Music className="h-4 w-4" />, label: 'Sounder System' },
      { icon: <Briefcase className="h-4 w-4" />, label: 'Top Luggage Carrier' },
    ],
    priceFrom: 110,
    image: vehicleTempo,
    accentHex: '#10b981',
    glowRgba: 'rgba(16,185,129,0.18)',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
  {
    id: 'minibus',
    number: '03',
    tag: 'Mini Bus & Event Coaches',
    title: 'Corporate Fleets & Event Coaches',
    subtitle: 'Mid-Capacity Coaches for 20-35 Riders',
    description:
      'Our premium coaster buses are purpose-built for corporate employee transportation and group mobility. Featuring spacious seating, optimized route planning, and modern onboard amenities, they deliver safe, comfortable, and efficient travel for daily commutes, corporate events, conferences, and business outings.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: '20-35 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Manual Transmission' },
      { icon: <Fuel className="h-4 w-4" />, label: 'High-Efficiency Diesel' },
      { icon: <Briefcase className="h-4 w-4" />, label: '10-15 Bags Cargo Bay' },
      { icon: <Music className="h-4 w-4" />, label: 'Sounder System' },
      { icon: <Briefcase className="h-4 w-4" />, label: 'Top Luggage Carrier' },
    ],
    priceFrom: 180,
    image: vehicleMinibus,
    accentHex: '#6366f1',
    glowRgba: 'rgba(99,102,241,0.18)',
    tagBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  },
  {
    id: 'bus',
    number: '04',
    tag: 'Executive Coaches & Long-Haul Travel',
    title: 'Luxury Long-Haul & Mass Transit',
    subtitle: '54-Seater Premium Coach Buses',
    description:
      'For large-scale institutional travel, intercity corporate trips, and premium charter services. Our full-size luxury coach buses provide reclining seats, AC, overhead storage, and GPS monitoring for your entire team.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: 'Up to 54 Passengers' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Automatic Transmission' },
      { icon: <Fuel className="h-4 w-4" />, label: 'Diesel Engine' },
      { icon: <Briefcase className="h-4 w-4" />, label: 'XL Cargo: 50 Bags' },
    ],
    priceFrom: 350,
    image: vehicleHitechBus,
    accentHex: '#f43f5e',
    glowRgba: 'rgba(244,63,94,0.18)',
    tagBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  },
  {
    id: 'truck',
    number: '05',
    tag: 'Heavy / Commercial Truck',
    title: 'Cargo & Logistics Solutions',
    subtitle: 'Heavy-Duty Cargo Trucks for Freight & Moving',
    description:
      'Designed for commercial logistics, freight movement, and heavy cargo transportation. Our fleet delivers high payload capacity, secure cargo handling, and dependable end-to-end logistics solutions tailored to businesses of every scale.',
    features: [
      { icon: <Users className="h-4 w-4" />, label: '3 Passengers / Crew' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Manual Transmission' },
      { icon: <Fuel className="h-4 w-4" />, label: 'Heavy-Duty Diesel' },
      { icon: <Truck className="h-4 w-4" />, label: 'XL Payload: Up to 5 Tons' },
    ],
    priceFrom: 450,
    image: vehicleTruck,
    accentHex: '#f97316',
    glowRgba: 'rgba(249,115,22,0.18)',
    tagBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
];

/* ─────────────────────────────────────────────────────────────
   Molecular Canvas Background
───────────────────────────────────────────────────────────── */
const MolecularCanvas: React.FC<{ color: string }> = ({ color }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animRef  = React.useRef<number>(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* Particle pool */
    const COUNT = 60;
    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: Particle[] = [];

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r:  Math.random() * 2.5 + 1,
      }));
    };
    init();

    const LINK_DIST = 170;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle   = color;
            ctx.globalAlpha   = (1 - dist / LINK_DIST) * 0.18;
            ctx.lineWidth     = 0.7;
            ctx.stroke();
          }
        }
      }

      /* Nodes */
      particles.forEach((p) => {
        /* outer ring */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.06;
        ctx.fill();

        /* core dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.5;
        ctx.fill();

        /* Move + bounce */
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height)  p.vy *= -1;
      });

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
};



/* ─────────────────────────────────────────────────────────────
   Single Service Screen
───────────────────────────────────────────────────────────── */
const ServiceScreen = React.forwardRef<
  HTMLDivElement,
  { service: FleetService; index: number; isLast: boolean; onNext: () => void }
>(({ service, index, isLast, onNext }, ref) => {
  const isEven = index % 2 === 0;
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useImperativeHandle(ref, () => innerRef.current!);

  React.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25, rootMargin: '-10% 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={innerRef}
      className="relative flex items-center bg-slate-950 overflow-hidden py-16 lg:py-0 min-h-screen lg:h-screen"
    >
      {/* ── Molecular canvas ── */}
      <MolecularCanvas color={service.accentHex} />

      {/* ── Vignette overlay ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,6,23,0.75) 100%)' }} />

      {/* ── Accent glow ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700, borderRadius: '50%',
          filter: 'blur(130px)',
          background: `radial-gradient(circle, ${service.glowRgba} 0%, transparent 70%)`,
          [isEven ? 'right' : 'left']: -200,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      {/* ── Grid dot pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Giant decorative number ── */}
      <div
        className={`absolute bottom-0 font-black leading-none select-none pointer-events-none`}
        style={{
          fontSize: '22vw',
          color: service.accentHex,
          opacity: 0.04,
          [isEven ? 'right' : 'left']: '2vw',
          lineHeight: 0.85,
        }}
      >
        {service.number}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-0">
        <div className={`flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

          {/* TEXT */}
          <div
            className="flex-1 space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.65s ease, transform 0.65s ease',
              transitionDelay: '0.1s',
            }}
          >
            {/* Number + tag row */}
            <div className="flex items-center gap-3">
              <span className="font-black text-5xl tabular-nums" style={{ color: service.accentHex, opacity: 0.4 }}>
                {service.number}
              </span>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${service.tagBg}`}>
                {service.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {service.title}
            </h2>
            <p className="text-sm font-semibold tracking-wide" style={{ color: service.accentHex }}>
              {service.subtitle}
            </p>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              {service.description}
            </p>

            {/* Feature list - no cards, just clean rows */}
            <div className="space-y-2 pt-1">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  {/* Accent dot */}
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: service.accentHex }}
                  />
                  <span style={{ color: service.accentHex }} className="flex-shrink-0">{feat.icon}</span>
                  <span className="text-sm text-slate-300">{feat.label}</span>
                  {/* Divider line */}
                  <span className="flex-1 h-px bg-slate-800/60" />
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="flex items-center gap-5 pt-2">
              <button
                className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: service.accentHex,
                  boxShadow: `0 6px 30px ${service.glowRgba}`,
                }}
              >
                Book This Fleet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* VEHICLE IMAGE */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : `translateX(${isEven ? 60 : -60}px)`,
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: '0.2s',
            }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Ground reflection glow */}
              <div
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 rounded-full blur-3xl"
                style={{ width: '70%', height: 40, background: service.accentHex, opacity: 0.25 }}
              />
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-contain select-none"
                style={{ filter: `drop-shadow(0 20px 60px ${service.glowRgba})` }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-next hint */}
      {!isLast && (
        <button
          onClick={onNext}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 opacity-40 hover:opacity-80 transition-opacity"
        >
          <span className="text-[10px] text-slate-400 tracking-widest uppercase">Next</span>
          <ChevronDown className="h-4 w-4 text-slate-400 animate-bounce" />
        </button>
      )}
    </div>
  );
});
ServiceScreen.displayName = 'ServiceScreen';

/* ─────────────────────────────────────────────────────────────
   Main Export
───────────────────────────────────────────────────────────── */
export const FleetServices: React.FC = () => {
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);


  const scrollTo = (idx: number) => {
    const el = slideRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>

      <section
        id="fleet-services"
        data-testid="fleet-services"
      >
        {fleetServices.map((service, index) => (
          <ServiceScreen
            key={service.id}
            ref={(el) => { slideRefs.current[index] = el; }}
            service={service}
            index={index}
            isLast={index === fleetServices.length - 1}
            onNext={() => scrollTo(index + 1)}
          />
        ))}
      </section>
    </>
  );
};

export default FleetServices;
