import React from 'react';
import { Building2, Utensils, Hotel, HeartPulse, Check, ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { PageId } from '../types';
import { IMAGES } from '../assets/images';

interface CommercialPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onNavigate, onOpenWaterTest }) => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>B2B Commercial Engineering</span>
            <span>·</span>
            <span>Hospitality, Dining & Healthcare</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Commercial Water Softening Systems & Solutions
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Eliminate hard water scale from commercial boilers, dishwashers, steam ovens, and laundry facilities. Minimize unplanned equipment downtime and cut chemical sanitizing expenditures by up to 45%.
          </p>
        </div>

        {/* Feature Split with Commercial Unit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-4/3 relative bg-slate-900 border border-slate-200 shadow-md">
            <img
              src={IMAGES.commercialSoftenerSystem}
              onError={(e) => { e.currentTarget.src = '/images/commercial_softener_system.jpg'; }}
              alt="High-flow commercial water softener vessel with digital PLC valve"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Commercial Equipment Longevity & ROI
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In commercial foodservice and hospitality, scale precipitation inside steam generators or dishwasher spray arms leads to catastrophic heating element burnout during peak dinner service. AquaPure commercial softening systems are engineered for uninterrupted high-volume flow.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Spotless crystal glassware and dishes without manual cloth polishing',
                'Protects commercial espresso boilers, combi-ovens, and ice makers',
                'Extends commercial laundry linen life by 35% with reduced surfactant dosing',
                'Reduces boiler blow-down cycles and limits thermal energy loss'
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenWaterTest}
                className="px-5 py-3 bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Request Commercial Site Audit
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Download Commercial Spec Sheet
              </button>
            </div>
          </div>
        </div>

        {/* Commercial Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Restaurants & Bakeries
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Protects multi-thousand dollar steam ovens, proofers, ice machines, and specialty coffee equipment from calcification.
            </p>
            <span className="text-[11px] font-semibold text-cyan-800">
              Payback period: 10–14 months
            </span>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <Hotel className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Hotels & Resorts
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Ensures luxury bathroom rain showers never clog, guest towels remain soft, and central domestic hot water boilers run scale-free.
            </p>
            <span className="text-[11px] font-semibold text-cyan-800">
              Cuts linen replacement costs by 34%
            </span>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Clinics & Dialysis Labs
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Provides essential pre-treatment softening for clinical reverse osmosis systems, sterilization autoclaves, and laboratory washers.
            </p>
            <span className="text-[11px] font-semibold text-cyan-800">
              ASTM Grade II water standard compliance
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
