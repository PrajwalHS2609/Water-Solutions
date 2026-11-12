import React from 'react';
import { SERVICES_LIST } from '../data/waterData';
import { Check, Clock, Wrench, Shield, ArrowRight, Phone } from 'lucide-react';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenWaterTest }) => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>Comprehensive Water Care</span>
            <span>·</span>
            <span>Residential & Commercial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Professional Water Softener & Treatment Services
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            From new construction turnkey installations and on-site digital hardness audits to emergency valve rebuilds and scheduled salt deliveries, our licensed team handles every phase of your water conditioning.
          </p>
        </div>

        {/* Services In-Depth Cards */}
        <div className="space-y-8">
          {SERVICES_LIST.map((svc, index) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-xs hover:border-slate-300 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-700">
                  <span>Service 0{index + 1}</span>
                  <span>·</span>
                  <span>{svc.turnaroundTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {svc.title}
                </h2>

                <p className="text-xs font-semibold text-slate-500">
                  {svc.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {svc.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200/80 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Ideal Application:
                  </span>
                  <p className="text-xs text-slate-800 font-medium">
                    {svc.idealFor}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onOpenWaterTest}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-cyan-600 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Schedule This Service
                  </button>
                  <a
                    href="tel:18005557873"
                    className="w-full py-2.5 px-4 border border-slate-200 hover:bg-white text-slate-700 font-semibold text-xs rounded-xl transition-colors text-center block"
                  >
                    Call Technician: 1-800-555-PURE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Van Fleet Callout */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Have an Active Water Softener Leak or Error Code?</h3>
            <p className="text-xs text-slate-300">
              Our mobile service fleet carries OEM replacement parts for Fleck, Clack, Autotrol, Culligan, and Kinetico valves.
            </p>
          </div>
          <a
            href="tel:18005557873"
            className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors whitespace-nowrap"
          >
            Dispatch Emergency Technician
          </a>
        </div>

      </div>
    </div>
  );
};
