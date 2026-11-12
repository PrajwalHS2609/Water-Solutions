import React, { useState } from 'react';
import { X, CheckCircle, Droplet, Calendar, Clock, MapPin, AlertCircle, ShieldCheck } from 'lucide-react';

interface FreeWaterTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: { householdSize: number; hardnessGpg: number } | null;
}

export const FreeWaterTestModal: React.FC<FreeWaterTestModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [preferredDay, setPreferredDay] = useState('Tomorrow');
  const [timeSlot, setTimeSlot] = useState('Morning (8:00 AM – 12:00 PM)');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Valid contact phone required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email required for report delivery';
    if (!address.trim()) errs.address = 'Service street address & ZIP required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    setFullName('');
    setPhone('');
    setEmail('');
    setAddress('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
              <Droplet className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Book a Free On-Site Water Test
              </h3>
              <p className="text-xs text-slate-400">
                12-point digital titration audit · 100% free · Zero obligation
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {initialData && (
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-xs text-sky-900 flex items-center justify-between">
                  <span>Pre-loaded from diagnostic calculator:</span>
                  <span className="font-mono font-bold">
                    {initialData.householdSize} People · Est. {initialData.hardnessGpg} GPG Hardness
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Sterling"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[10px] text-rose-600 mt-0.5">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Phone Number (for confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(512) 555-0199"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-rose-600 mt-0.5">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-rose-600 mt-0.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Street Address & ZIP Code *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123 Barton Springs Rd, Austin"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 ${
                      errors.address ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-[10px] text-rose-600 mt-0.5">{errors.address}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Preferred Day
                  </label>
                  <select
                    value={preferredDay}
                    onChange={e => setPreferredDay(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Thursday">This Thursday</option>
                    <option value="This Friday">This Friday</option>
                    <option value="This Saturday">This Saturday Morning</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={e => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Late Afternoon (4:00 PM – 7:00 PM)">Late Afternoon (4:00 PM – 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  Confirm Free Water Test Appointment
                </button>
                <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Licensed Water Treatment Specialist · Zero obligation</span>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Water Test Appointment Confirmed!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. We have booked your on-site water analysis for <strong>{preferredDay}</strong> during the <strong>{timeSlot}</strong> window at <strong>{address}</strong>.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 text-left max-w-sm mx-auto space-y-1">
                <p><strong>What to expect during the visit:</strong></p>
                <p className="text-slate-500">1. Certified specialist collects tap and main inlet samples.</p>
                <p className="text-slate-500">2. Titration tests for GPG, TDS, chlorine, and iron.</p>
                <p className="text-slate-500">3. Written diagnostic report handed to you on the spot.</p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-slate-800 transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
