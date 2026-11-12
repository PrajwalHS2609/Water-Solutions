import React from 'react';
import { PROCESS_STEPS } from '../data/waterData';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface ProcessTimelineProps {
  onOpenWaterTest: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenWaterTest }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
            Our Proven Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
            From Water Testing to Better Water Quality
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            A transparent, 4-step engineering pathway designed to give you perfectly conditioned soft water with zero stress or guesswork.
          </p>
        </div>

        {/* Feature Split with Technician Image & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Certified Technician Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100 aspect-4/3 lg:aspect-auto lg:h-[480px]">
              <img
                src={IMAGES.waterTestTechnician}
                onError={(e) => { e.currentTarget.src = '/images/water_test_technician.jpg'; }}
                alt="AquaPure certified water testing specialist conducting digital titration test inside modern kitchen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-xs">
                <p className="text-xs font-bold text-slate-900">
                  On-Site Certified Water Analysis
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  High-precision digital titration determines exact grains per gallon (GPG), TDS, and iron within 30 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Timeline Steps */}
          <div className="lg:col-span-7 space-y-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-cyan-400 font-mono font-bold text-base flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      {step.tagline}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Process CTA Footer */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">
              Ready to begin with Step 01?
            </h3>
            <p className="text-xs text-slate-300">
              Schedule your complimentary on-site water hardness assessment today.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenWaterTest}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Book My Water Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
