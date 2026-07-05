import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';
import { Card } from '../../../shared/ui/Card';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Corporate Sync Account',
    message: '',
  });

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setStatus('loading');
    
    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Corporate Sync Account',
        message: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900 scroll-mt-12" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Have questions about Strive Corporate Sync or leasing options? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">Connect Directly</span>
              <h3 className="text-2xl font-black text-white">Strive Mobility HQ</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect with our MICE operations managers and enterprise travel coordinators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-2">
              {/* Card 1: Operating Hours */}
              <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/20 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-500 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operational Hours</h4>
                  <p className="text-xs text-slate-400">24/7 Call Support</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Office: 08:00 AM - 08:00 PM (08-08)</p>
                </div>
              </div>

              {/* Card 2: Helpline */}
              <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/20 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Enterprise Helpline</h4>
                  <p className="text-xs text-slate-400 font-semibold hover:text-white transition-colors">
                    <a href="tel:+916366557766">+91 63665 57766</a>
                  </p>
                  <p className="text-[10px] text-slate-500">Corporate accounts and custom leases</p>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/20 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-500 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Official Email</h4>
                  <p className="text-xs text-slate-400 font-semibold hover:text-white transition-colors flex flex-col gap-1">
                    <a href="mailto:info@strive-ms.com">info@strive-ms.com</a>
                    <a href="mailto:hello@strive-ms.com">hello@strive-ms.com</a>
                  </p>
                  <p className="text-[10px] text-slate-500">Response within 2 hours guaranteed</p>
                </div>
              </div>

              {/* Card 4: Address */}
              <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/20 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-500 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Headquarters</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strive Mobility Solutions Pvt. Ltd.<br />
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Us Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="p-8 border border-slate-900 bg-slate-900/30 shadow-xl rounded-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Inquiry Submitted!</h3>
                    <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                      Thank you for contacting Strive. An enterprise client sync manager has been notified and will reach out to you within 2 hours.
                    </p>
                    <Button size="sm" variant="secondary" onClick={() => setStatus('idle')} className="mt-4">
                      Submit Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Error Notice */}
                    {status === 'error' && (
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex gap-3 items-center">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Full Name <span className="text-brand-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Bhanu Teja"
                          className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-slate-700"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Email Address <span className="text-brand-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="founder@strive-he.com"
                          className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-slate-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 63665 57766"
                          className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-slate-700"
                        />
                      </div>

                      {/* Inquiry Type */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-inquiry" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Inquiry Type
                        </label>
                        <select
                          id="contact-inquiry"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus-visible:outline-none focus-visible:border-slate-700"
                        >
                          <option value="Corporate Sync Account">Corporate Sync Account</option>
                          <option value="Fleet Leasing & Rentals">Fleet Leasing & Rentals</option>
                          <option value="MICE Travel Ops">MICE Travel Ops</option>
                          <option value="General Queries">General Queries</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Your Message <span className="text-brand-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail your fleet requirements or shift timing sync schedules..."
                        className="flex w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-slate-700 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end pt-2">
                      <Button
                        type="submit"
                        isLoading={status === 'loading'}
                        className="w-full sm:w-auto px-8 h-11 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand-600/20"
                      >
                        <Send className="h-4 w-4" />
                        Send Inquiry
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
