import React from 'react';
import { ArrowRight, ShieldCheck, Wrench, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenWaterTest: () => void;
  onRequestConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWaterTest,
  onRequestConsultation
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Editorial Metadata / Kicker (No Pill Enclosure per §1.A) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <span>Advanced Water Treatment Engineering</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">WQA Certified Specialists</span>
            </div>

            {/* Headline with balanced wrap and strict type scale */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-2xl text-balance">
              Say Goodbye to Hard Water.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300">
                Experience the Difference of Soft Water.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Protect your home, appliances, and plumbing with advanced water softening solutions. Discover reliable installation, maintenance, and expert water treatment services tailored to your water profile.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenWaterTest}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
              >
                <span>Get a Free Water Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onRequestConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-white font-semibold text-sm transition-all whitespace-nowrap cursor-pointer"
              >
                Request a Consultation
              </button>
            </div>

            {/* Compact Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">
                  Expert Installation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">
                  Residential & Commercial
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">
                  Reliable After-Sales Support
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-4/3 lg:aspect-auto lg:h-full">
              <img
                src="/src/assets/images/hero_water_softener_1794388678055.jpg"
                alt="Modern luxury bathroom with spotless crystal clear soft water running from faucet"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

              {/* Float Glass Metric Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-slate-700/70 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold">
                      Conditioned Purity Guarantee
                    </span>
                    <p className="text-white font-bold text-sm mt-0.5">
                      0.0 GPG Mineral Hardness Delivered
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-white tabular-nums">
                      99.4%
                    </span>
                    <p className="text-[10px] text-slate-400">Scale Reduced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <p className="text-2xl lg:text-3xl font-bold font-mono text-white tabular-nums">
              18,500+
            </p>
            <p className="text-xs text-slate-400 mt-1">Homes & Businesses Softened</p>
          </div>
          <div>
            <p className="text-2xl lg:text-3xl font-bold font-mono text-cyan-400 tabular-nums">
              10–12 Yrs
            </p>
            <p className="text-xs text-slate-400 mt-1">Vessel & Resin Warranty</p>
          </div>
          <div>
            <p className="text-2xl lg:text-3xl font-bold font-mono text-white tabular-nums">
              35% Less
            </p>
            <p className="text-xs text-slate-400 mt-1">Salt Used via Metered Demand</p>
          </div>
          <div>
            <p className="text-2xl lg:text-3xl font-bold font-mono text-cyan-400 tabular-nums">
              24/7
            </p>
            <p className="text-xs text-slate-400 mt-1">Emergency Dispatch & Support</p>
          </div>
        </div>

      </div>
    </section>
  );
};
