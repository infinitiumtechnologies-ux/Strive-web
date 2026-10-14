import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock, Eye, Database, Bell } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
          <Shield className="h-6 w-6" />
          <span className="text-xs font-bold uppercase tracking-widest">Data Protection &amp; Confidentiality</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
          At <strong className="text-slate-200">The Strive Mobility Solutions Pvt Ltd</strong> (&ldquo;Strive Wheels&rdquo;), your privacy, trip confidentiality, and personal data protection are paramount.
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
          <span>Compliant with Indian Information Technology (IT) Act &amp; DPDP Guidelines</span>
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
            <h2>Introduction &amp; Scope</h2>
          </div>
          <p>
            This Privacy Policy explains how <strong>The Strive Mobility Solutions Pvt Ltd</strong> (&ldquo;Company&rdquo;, &ldquo;Strive Wheels&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, shares, and secures your personal and business data when you visit our website, submit booking inquiries, or travel through our corporate and on-demand mobility fleets.
          </p>
          <p>
            This policy applies to corporate clients, passenger employees, drivers, fleet partners, and visitors accessing our online services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">2</span>
            <h2>Information We Collect</h2>
          </div>
          <p>
            Depending on how you interact with Strive Wheels, we may collect the following categories of information:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm">
                <Eye className="h-4 w-4" />
                <span>Contact &amp; Personal Identifiers</span>
              </div>
              <p className="text-xs text-slate-400">
                Full name, business email address, phone number, company affiliation, designation, and employee code (for Corporate Sync rosters).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm">
                <Database className="h-4 w-4" />
                <span>Trip &amp; Geolocation Data</span>
              </div>
              <p className="text-xs text-slate-400">
                Pickup points, drop addresses, shift schedules, flight numbers, vehicle preferences, and real-time GPS telemetry during active journeys.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm">
                <Lock className="h-4 w-4" />
                <span>Financial &amp; Transaction Details</span>
              </div>
              <p className="text-xs text-slate-400">
                Billing records, GSTIN identification, invoice summaries, payment transaction references, and corporate purchase order (PO) numbers.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm">
                <Bell className="h-4 w-4" />
                <span>Technical &amp; Usage Logs</span>
              </div>
              <p className="text-xs text-slate-400">
                IP address, browser type, operating system, pages visited, timestamps, and interaction analytics to improve platform performance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">3</span>
            <h2>How We Use Your Information</h2>
          </div>
          <p>
            We utilize collected data strictly for legitimate business and mobility fulfillment purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
            <li><strong>Trip Dispatch &amp; Operations:</strong> Scheduling vehicles, assigning verified drivers, and ensuring timely pickups and drop-offs.</li>
            <li><strong>Safety &amp; Emergency Response:</strong> Real-time vehicle telemetry, emergency SOS monitoring, and passenger safety audit logs.</li>
            <li><strong>Corporate Sync Rostering:</strong> Optimizing corporate commuter routes, reducing transit time, and providing consolidated reports to employer organizations.</li>
            <li><strong>Billing &amp; Compliance:</strong> Generating accurate GST invoices, tracking toll reconciliations, and meeting regulatory audit standards.</li>
            <li><strong>Customer Support:</strong> Responding to inquiries, resolving service tickets, and dispatching replacement vehicles when needed.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">4</span>
            <h2>Information Sharing &amp; Disclosure</h2>
          </div>
          <p>
            Strive Wheels <strong>does not sell, rent, or trade your personal data</strong> to third-party advertisers. We only share information with authorized parties under strict non-disclosure obligations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
            <li><strong>Assigned Chauffeurs:</strong> Only passenger name, contact phone number, and pickup/drop coordinates are disclosed solely for completing the assigned trip.</li>
            <li><strong>Corporate Employers:</strong> If you use Strive Wheels through a corporate program, trip completion status, timestamps, and attendance logs are shared with your corporate transport admin.</li>
            <li><strong>Law Enforcement &amp; Statutory Authorities:</strong> In accordance with Indian legal requirements, court orders, or to safeguard personal safety during emergencies.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">5</span>
            <h2>Data Security &amp; Retention</h2>
          </div>
          <p>
            We implement industry-standard physical, electronic, and procedural safeguards to secure your personal data against unauthorized access, loss, or alteration. All data transmission is encrypted via Secure Sockets Layer (SSL/TLS) protocols.
          </p>
          <p>
            We retain personal information only for as long as necessary to fulfill the operational, tax, statutory, and contractual purposes described in this policy, after which it is archived securely or irreversibly deleted.
          </p>
        </section>

        {/* Section 6 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/10 text-brand-400 text-xs">6</span>
            <h2>Your Data Rights</h2>
          </div>
          <p>
            Under applicable data protection guidelines, you have the right to request access to your personal data, rectify inaccuracies, request deletion of non-essential records, or opt-out of promotional communications at any time by contacting our privacy desk.
          </p>
        </section>

        {/* Section 7 */}
        <section className="p-6 sm:p-8 rounded-xl border border-slate-900 bg-slate-900/25 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-bold text-lg sm:text-xl">
            <Shield className="h-6 w-6 text-brand-400" />
            <h2>Grievance Officer &amp; Contact Details</h2>
          </div>
          <p>
            For inquiries, concerns, or grievances concerning this Privacy Policy and our data handling practices, please write to our designated privacy office:
          </p>
          <div className="pt-2 text-xs sm:text-sm text-slate-300 space-y-1">
            <p><strong>Privacy &amp; Data Protection Officer</strong></p>
            <p>The Strive Mobility Solutions Pvt Ltd</p>
            <p>Bangalore, Karnataka, India</p>
            <p><strong>Official Email:</strong> <a href="mailto:info@strive-ms.com" className="text-brand-400 hover:underline">info@strive-ms.com</a></p>
            <p><strong>Enterprise Helpline:</strong> <a href="tel:+919606049266" className="text-brand-400 hover:underline">+91 96060 49266</a></p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;
