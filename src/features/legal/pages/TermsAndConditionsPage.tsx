import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto space-y-10 text-slate-200">
      {/* Top Navigation */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors group font-medium"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-8 sm:p-10 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/40 to-slate-950 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
        <div className="flex items-center gap-3 text-brand-400 mb-3">
          <FileText className="h-6 w-6" />
          <span className="text-xs font-bold uppercase tracking-widest">Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
          Please read these terms and conditions carefully before booking or using services provided by{' '}
          <strong className="text-slate-200">The Strive Mobility Solutions Pvt Ltd</strong> (&ldquo;Strive Wheels&rdquo;).
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
          <span>
            <strong>Effective Date:</strong> January 1, 2026
          </span>
          <span className="text-slate-600">•</span>
          <span>
            <strong>Last Updated:</strong> March 2026
          </span>
          <span className="text-slate-600">•</span>
          <span>Applicable to all Strive Wheels corporate and retail services</span>
        </div>
      </motion.div>

      {/* Content Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300"
      >
        {/* Section 1 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">1</span>
            <h2>Introduction &amp; Acceptance of Terms</h2>
          </div>
          <p>
            Welcome to <strong>Strive Wheels</strong>, operated by <strong>The Strive Mobility Solutions Pvt Ltd</strong>, a company organized and existing under the laws of India, having its office in Bangalore, Karnataka (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
          </p>
          <p>
            By accessing our website (<a href="https://strive-ms.com" className="text-brand-400 underline">strive-ms.com</a>), booking fleet vehicles, utilizing employee commute services (Corporate Sync), renting vehicles, or executing corporate contracts with us, you (&ldquo;User&rdquo;, &ldquo;Client&rdquo;, &ldquo;Passenger&rdquo;, or &ldquo;You&rdquo;) agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of our platform and mobility services immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">2</span>
            <h2>Services Provided</h2>
          </div>
          <p>
            Strive Wheels specializes in premier passenger transportation and fleet mobility management, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
            <li><strong>Corporate Sync:</strong> Scheduled employee transport, shift synchronization, and roster-based corporate shuttles.</li>
            <li><strong>Executive &amp; Chauffeur Services:</strong> Point-to-point, airport transit, and hourly luxury rentals with vetted drivers.</li>
            <li><strong>Fleet Leasing &amp; Rental:</strong> Short-term and long-term business mobility contracts.</li>
            <li><strong>MICE &amp; Event Logistics:</strong> Conference transport, delegation transit, and large-scale corporate event movement.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">3</span>
            <h2>Bookings, Reservations &amp; Confirmations</h2>
          </div>
          <p>
            All bookings made online or via enterprise dispatch are subject to vehicle availability, operational feasibility, and driver scheduling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span>Confirmation Notice</span>
              </div>
              <p className="text-xs text-slate-400">
                A booking is confirmed only upon transmission of an official confirmation notification containing trip ID, vehicle details, driver credentials, and scheduled pickup timestamps.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>Accuracy of Information</span>
              </div>
              <p className="text-xs text-slate-400">
                You are responsible for providing exact pickup/drop coordinates, correct contact information, and accurate schedule dates. Strive Wheels is not liable for delays resulting from inaccurate passenger details.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">4</span>
            <h2>Pricing, Tolls, Billing &amp; Payment Terms</h2>
          </div>
          <p>
            Trip fares and contract billings are computed based on vehicle tier, distance traversed, duration of booking, waiting intervals, and applicable service packages.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
            <li><strong>Tolls &amp; Parking:</strong> Unless specified otherwise in written corporate master agreements, highway toll charges, state entry taxes, airport terminal fees, and parking charges are chargeable at actuals.</li>
            <li><strong>Taxes:</strong> All quoted rates are subject to applicable Goods and Services Tax (GST) and statutory levies under Indian tax laws.</li>
            <li><strong>Invoicing:</strong> Corporate clients are billed per agreed master service contracts (credit periods, monthly cycles, or escrow). Retail and ad-hoc bookings require payment upon reservation or trip conclusion.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">5</span>
            <h2>Cancellations, Rescheduling &amp; Refunds</h2>
          </div>
          <p>
            We recognize that corporate schedules may shift. Cancellations and modifications are governed by the following schedule:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-800">
              <thead>
                <tr className="bg-slate-950 text-slate-200">
                  <th className="p-3 border border-slate-800 font-semibold">Cancellation Notice Period</th>
                  <th className="p-3 border border-slate-800 font-semibold">Refund / Cancellation Charge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-400">
                <tr>
                  <td className="p-3 border border-slate-800">More than 12 hours prior to scheduled pickup</td>
                  <td className="p-3 border border-slate-800 text-emerald-400">100% Refund (No cancellation charge)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-800">Between 4 to 12 hours prior to scheduled pickup</td>
                  <td className="p-3 border border-slate-800 text-amber-400">50% Cancellation charge applicable</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-800">Under 4 hours or driver already dispatched / No-Show</td>
                  <td className="p-3 border border-slate-800 text-rose-400">100% Fare chargeable (No refund)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">6</span>
            <h2>Passenger Safety &amp; Code of Conduct</h2>
          </div>
          <p>
            To guarantee safety, dignity, and security for both passengers and chauffeurs:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
            <li><strong>Zero Tolerance for Substance Abuse:</strong> Smoking, vaping, consumption of narcotics, or unruly behavior under the influence of alcohol inside vehicles is strictly prohibited.</li>
            <li><strong>Luggage &amp; Contraband:</strong> Transport of hazardous, flammable, toxic materials, or unlawful substances is strictly barred. Chauffeurs reserve the right to decline baggage violating safety standards.</li>
            <li><strong>Seatbelt Compliance:</strong> All passengers are mandated by Indian Motor Vehicles regulations to wear seatbelts at all times during transit.</li>
            <li><strong>Damage to Vehicles:</strong> Any willful or negligent damage caused to vehicle interiors or equipment will be charged directly to the responsible party or corporate affiliate.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">7</span>
            <h2>Limitation of Liability &amp; Force Majeure</h2>
          </div>
          <p>
            While Strive Wheels employs cutting-edge dispatch tracking, route optimization, and vehicle maintenance protocols, we shall not be held liable for failure or delay in performance caused by circumstances beyond reasonable control, including severe weather, flooding, traffic blockades, public protests, natural disasters, national strikes, or mechanical failures where prompt alternate transport is dispatched.
          </p>
          <p>
            In any circumstance, the aggregate liability of The Strive Mobility Solutions Pvt Ltd for direct damages arising out of any specific booking shall not exceed the total fare paid for that specific service.
          </p>
        </section>

        {/* Section 8 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">8</span>
            <h2>Governing Law &amp; Jurisdiction</h2>
          </div>
          <p>
            These Terms &amp; Conditions shall be governed by, construed, and enforced in accordance with the laws of the Republic of India. Any controversy, dispute, or claim arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Bangalore, Karnataka, India</strong>.
          </p>
        </section>

        {/* Section 9 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <ShieldCheck className="h-6 w-6 text-brand-400" />
            <h2>Contact &amp; Grievance Redressal</h2>
          </div>
          <p>
            For questions, corporate inquiries, or disputes regarding these Terms and Conditions, please contact our legal and customer operations desk:
          </p>
          <div className="pt-2 text-xs sm:text-sm text-slate-300 space-y-1">
            <p><strong>The Strive Mobility Solutions Pvt Ltd</strong></p>
            <p>Bangalore, Karnataka, India</p>
            <p><strong>Enterprise Helpline:</strong> <a href="tel:+919606049266" className="text-brand-400 hover:underline">+91 96060 49266</a></p>
            <p><strong>Official Email:</strong> <a href="mailto:info@strive-ms.com" className="text-brand-400 hover:underline">info@strive-ms.com</a></p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default TermsAndConditionsPage;
