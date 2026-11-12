import React from 'react';
import { ShieldCheck, Award, Users, Droplet, CheckCircle, ArrowRight, Wrench } from 'lucide-react';
import { PageId } from '../types';
import { IMAGES } from '../assets/images';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenWaterTest }) => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-3">
            <span>Our Heritage & Purpose</span>
            <span>·</span>
            <span>Est. 2011</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Pioneering Pure, Soft Water Engineering for Central Texas.
          </h1>
          <p className="text-base text-slate-600 mt-5 leading-relaxed">
            AquaPure Systems was founded by master chemical engineers and licensed plumbers with one mission: to rid residential homes and commercial institutions of destructive calcium, magnesium, and carbonate scaling using true ion-exchange science.
          </p>
        </div>

        {/* Feature Split with Facility Visual & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-4/3 relative bg-slate-900">
            <img
              src={IMAGES.waterTestTechnician}
              onError={(e) => { e.currentTarget.src = '/images/water_test_technician.jpg'; }}
              alt="AquaPure water specialist analyzing water sample in Austin certified testing lab"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 text-xs">
              <span className="font-bold text-slate-900 block">WQA Master Certified Team</span>
              <span className="text-slate-600">Every technician undergoes 300+ hours of rigorous hydraulic and water chemistry accreditation.</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Science Over Sales Gimmicks
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In an industry fraught with questionable "magnetic descalers" and cheap big-box store plastic units that burn out after 3 years, AquaPure built its reputation on empirical data. We test your water's specific mineral profile with digital titration, calculate your peak fixture demand, and assemble every system using heavy-duty fiberglass-wound vessels and commercial-grade 10% cross-linked resin.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-2xl font-bold font-mono text-cyan-600 tabular-nums">15+ Years</p>
                <p className="text-xs text-slate-500 mt-1">Continuous Operation in Texas</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-2xl font-bold font-mono text-cyan-600 tabular-nums">18,500+</p>
                <p className="text-xs text-slate-500 mt-1">Homes & Businesses Softened</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-2xl font-bold font-mono text-cyan-600 tabular-nums">100%</p>
                <p className="text-xs text-slate-500 mt-1">Lead-Free Certified Plumbing</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-2xl font-bold font-mono text-cyan-600 tabular-nums">24/7</p>
                <p className="text-xs text-slate-500 mt-1">Direct Emergency Dispatch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Our Non-Negotiable Engineering Commitments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4">
                <Droplet className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Empirical Sizing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never undersize a softener to quote a lower price. Sizing matches your peak GPM flow rate so you never experience water pressure drop during simultaneous showers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Plumbing Integrity</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All pipework is installed with solid brass or stainless bypass loops, dedicated air-gap drain fixtures, and secured brackets. No flexible cheap vinyl hoses that fail under pressure.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Lifetime Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We don’t abandon you after the install. With scheduled solar salt delivery, annual resin care, and 24/7 technician dispatch, your water stays soft for decades.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Experience the AquaPure Difference</h3>
            <p className="text-xs text-slate-300">Schedule your complimentary on-site water hardness assessment.</p>
          </div>
          <button
            type="button"
            onClick={onOpenWaterTest}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Book Free Water Test
          </button>
        </div>

      </div>
    </div>
  );
};
