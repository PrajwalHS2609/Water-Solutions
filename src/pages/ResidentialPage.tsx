import React from 'react';
import { Home, Sparkles, Check, ArrowRight, ShieldCheck, Heart, Droplets } from 'lucide-react';
import { PageId } from '../types';

interface ResidentialPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const ResidentialPage: React.FC<ResidentialPageProps> = ({ onNavigate, onOpenWaterTest }) => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>Healthy Homes & Luxury Living</span>
            <span>·</span>
            <span>Single-Family & Apartments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Residential Water Softening Engineered for Your Home
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Protect your family’s largest investment. Stop chalky calcium from ruining designer faucets, etching glass enclosures, and burning out tankless water heaters.
          </p>
        </div>

        {/* Feature Split with Luxury Bathroom Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-4/3 relative bg-slate-900 border border-slate-200 shadow-md">
            <img
              src="/src/assets/images/hero_water_softener_1794388678055.jpg"
              alt="Spotless luxury residential bathroom with soft water fixtures"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Transform Your Daily Shower and Household Plumbing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When water contains 15+ grains of calcium and magnesium, it strips natural skin lipids, binds with shampoos to leave hair flat and frizzy, and leaves soap scum on every surface. Conditioned soft water rinses cleanly, leaving skin moisturized and hair silky.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Safeguards expensive tankless and hybrid heat-pump water heaters',
                'Prevents white mineral etching on frameless glass shower enclosures',
                'Up to 60% less detergent required for brighter, softer laundry',
                'Zero limescale ring on porcelain toilets, granite sinks, and quartz countertops'
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
                className="px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Book Free Residential Water Test
              </button>
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Compare Home Softener Models
              </button>
            </div>
          </div>
        </div>

        {/* Residential Sizing Matrix */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900">
              Residential Sizing Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select the ideal capacity based on your bathroom count and occupants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-700">1–2 Bathrooms</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">Compact Cabinet 32K</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  All-in-one footprint for condos, townhomes, and smaller single-family properties with 1–3 occupants.
                </p>
                <div className="text-xs text-slate-700 space-y-1.5 mb-6">
                  <p>· Flow Rate: 11.5 GPM continuous</p>
                  <p>· Resin: Uniform particle food-grade</p>
                  <p>· Footprint: Under-counter compatible</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenWaterTest}
                className="w-full py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-cyan-600 transition-colors"
              >
                Select Compact 32K
              </button>
            </div>

            <div className="bg-white p-7 rounded-2xl border-2 border-cyan-500 shadow-sm flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-cyan-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-mono text-cyan-700">2–4 Bathrooms</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">SmartEco Pro 48K</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Intelligent demand metered single-tank system for modern families with high morning shower usage.
                </p>
                <div className="text-xs text-slate-700 space-y-1.5 mb-6">
                  <p>· Flow Rate: 14.0 GPM high flow</p>
                  <p>· Resin: 10% cross-linked chlorine guard</p>
                  <p>· Regeneration: Adaptive algorithmic meter</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenWaterTest}
                className="w-full py-2.5 bg-cyan-600 text-white font-semibold text-xs rounded-xl hover:bg-cyan-500 transition-colors"
              >
                Select SmartEco 48K
              </button>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-700">4–6+ Bathrooms</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">Twin-Matrix Duplex 64K</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dual alternating tanks providing non-stop 24/7 soft water with zero downtime for large luxury residences.
                </p>
                <div className="text-xs text-slate-700 space-y-1.5 mb-6">
                  <p>· Flow Rate: 17.2 GPM uninterrupted</p>
                  <p>· Regeneration: Alternating on-demand</p>
                  <p>· Salt Savings: Up to 40% vs standard valves</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenWaterTest}
                className="w-full py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-cyan-600 transition-colors"
              >
                Select Twin-Matrix 64K
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
