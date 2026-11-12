import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle, Send, AlertCircle } from 'lucide-react';

export const ContactEnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    requirementType: 'Residential Home',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Please provide a valid phone number';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address';
    if (!formData.location.trim()) errs.location = 'Please specify your location or ZIP code';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hello AquaPure team, I'd like to inquire about a water softener system and schedule a water test.");
    window.open(`https://wa.me/18005557873?text=${msg}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
            Contact & Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
            Connect With Our Water Treatment Engineers
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Have questions about your water hardness, or need an emergency repair visit? Reach out via our enquiry form, call our direct engineering line, or chat instantly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. A certified water technician will call you at <strong>{formData.phone}</strong> within 1 business hour to confirm your consultation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      location: '',
                      requirementType: 'Residential Home',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Henderson"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-all ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (512) 555-0199"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-all ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-all ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Service Location / ZIP Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Austin, TX 78701"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-all ${
                        errors.location ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.requirementType}
                    onChange={e => setFormData({ ...formData, requirementType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600"
                  >
                    <option value="Residential Home">Residential Home / Villa</option>
                    <option value="Apartment / Condo">Apartment / Condo</option>
                    <option value="Commercial Business">Commercial (Hotel, Restaurant, Clinic)</option>
                    <option value="Industrial Treatment">Industrial / Facility Plant</option>
                    <option value="Maintenance / Salt Delivery">Maintenance / Repair / Salt Refill</option>
                    <option value="Free Water Hardness Test Only">Free On-Site Water Test Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Message / Water Hardness Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any visible stains, current system age, or specific water concerns..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-slate-900 hover:bg-cyan-600 text-white font-bold text-sm rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Service Enquiry</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Privacy guaranteed. Your contact information is never shared or rented.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Visual Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Direct Engineering Hotline
                  </span>
                  <a
                    href="tel:18005557873"
                    className="block text-base font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    1-800-555-PURE (7873)
                  </a>
                  <p className="text-xs text-slate-500">24/7 Dispatch for active leaks & emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:support@aquapuresystems.com"
                    className="block text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    support@aquapuresystems.com
                  </a>
                  <p className="text-xs text-slate-500">Quotes & technical specifications: response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Business Hours
                  </span>
                  <p className="text-xs text-slate-700 font-medium">Monday – Friday: 7:30 AM – 7:00 PM</p>
                  <p className="text-xs text-slate-700 font-medium">Saturday: 8:30 AM – 4:00 PM</p>
                  <p className="text-xs text-slate-500">Sunday: Emergency on-call dispatch</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    HQ Showroom & Lab Facility
                  </span>
                  <p className="text-xs text-slate-700 font-medium">450 Aquifer Parkway, Suite 100</p>
                  <p className="text-xs text-slate-700 font-medium">Austin, TX 78701</p>
                  <p className="text-xs text-slate-500">Drop off water samples for same-day lab analysis</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp for Instant Booking</span>
            </button>

            {/* Google Map Representation */}
            <div className="bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative h-48 flex items-center justify-center text-center p-4">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold text-slate-900 mt-2">
                  AquaPure Regional Service Center
                </p>
                <p className="text-[11px] text-slate-500">
                  Austin · Round Rock · Westlake · Lakeway · Cedar Park · Georgetown
                </p>
                <span className="inline-block mt-1 text-[10px] text-cyan-800 bg-white px-2 py-0.5 rounded border border-slate-200 font-mono">
                  30.2672° N, 97.7431° W
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
