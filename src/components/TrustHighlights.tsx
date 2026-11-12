import React from 'react';
import { Wrench, Shield, Droplet, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface TrustHighlightsProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const TrustHighlights: React.FC<TrustHighlightsProps> = ({
  onNavigate,
  onOpenWaterTest
}) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              Technical Credibility & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
              Engineered for Performance. Backed by Certified Water Specialists.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            We do not sell generic off-the-shelf plastic filters. Every AquaPure system is precision-sized to your water hardness chemistry, incoming pressure, and peak household flow.
          </p>
        </div>

        {/* Highlight Composition (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          
          {/* Highlight 1 */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-400 font-mono">01. Installation</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                Professional Water Softener Installation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Code-compliant installation by licensed plumbers. Includes stainless steel bypass valves, dedicated drain loops, and pressure balancing.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('maintenance')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 cursor-pointer"
            >
              <span>Installation Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Highlight 2 */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-6">
                <Droplet className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-400 font-mono">02. Engineering</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                Advanced Hard Water Solutions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Premium 10% cross-linked cation exchange resin resistant to chlorine degradation and heavy iron fouling, yielding 15+ years of active lifespan.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 cursor-pointer"
            >
              <span>Explore Resin Tech</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Highlight 3 */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-400 font-mono">03. Scale</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                Residential & Commercial Scale
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From compact 32,000-grain home systems to multi-tank 600,000-grain industrial skids serving hotels, healthcare centers, and boiler plants.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('commercial')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 cursor-pointer"
            >
              <span>Commercial Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Highlight 4 */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs text-slate-400 font-mono">04. Longevity</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                Maintenance & Repair Support
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Doorstep solar salt delivery, annual resin rejuvenation wash, digital valve diagnostics, and 24-hour rapid emergency repair response.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 cursor-pointer"
            >
              <span>Service Contracts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Certifications and Compliance Banner */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-900">Industry Accreditations:</span>
            <span>Water Quality Association (WQA) Master Specialist</span>
            <span className="hidden md:inline">·</span>
            <span>NSF/ANSI Standard 44 Certified</span>
            <span className="hidden md:inline">·</span>
            <span>IAPMO UPC Listed</span>
          </div>
          <button
            type="button"
            onClick={onOpenWaterTest}
            className="text-xs font-semibold text-cyan-700 hover:text-cyan-900 underline underline-offset-4 cursor-pointer"
          >
            Schedule a certified on-site hardness test →
          </button>
        </div>

      </div>
    </section>
  );
};
