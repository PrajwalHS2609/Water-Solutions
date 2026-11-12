import React from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ConversionCtaProps {
  onOpenWaterTest: () => void;
  onRequestConsultation: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({
  onOpenWaterTest,
  onRequestConsultation
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-24">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Get Started Today
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3 text-balance max-w-3xl mx-auto leading-tight">
          Ready to Experience the Benefits of Soft Water?
        </h2>

        <p className="text-base text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Let our water treatment experts help you find the right water softening solution for your home or business. Book a complimentary, zero-pressure on-site water test.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={onOpenWaterTest}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
          >
            <span>Book a Free Water Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:18005557873"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/80 text-white font-semibold text-sm transition-all whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Talk to Our Experts (1-800-555-PURE)</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            Free 12-Point Mineral Titration
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            No Purchase Obligation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            Same-Week Scheduling
          </span>
        </div>

      </div>
    </section>
  );
};
