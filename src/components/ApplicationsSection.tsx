import React from 'react';
import { APPLICATIONS } from '../data/waterData';
import { Building, Home, Utensils, Hotel, HeartPulse, Factory, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface ApplicationsSectionProps {
  onNavigate: (page: PageId) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onNavigate }) => {
  const getIcon = (sector: string) => {
    switch (sector) {
      case 'Residential':
        return <Home className="w-5 h-5 text-sky-600" />;
      case 'Hospitality':
        return <Hotel className="w-5 h-5 text-indigo-600" />;
      case 'Healthcare':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Food & Beverage':
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case 'Multi-Family':
        return <Building className="w-5 h-5 text-teal-600" />;
      case 'Industrial':
      default:
        return <Factory className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
              Water Softening Solutions for Every Industry
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            From single-residence luxury homes to high-capacity hospitality boilers and manufacturing plants, our tailored solutions protect valuable assets.
          </p>
        </div>

        {/* 6 Application Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {APPLICATIONS.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100">
                    {getIcon(app.sector)}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {app.sector}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {app.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {app.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-cyan-800 block mb-3">
                  {app.impact}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    if (app.sector === 'Residential') onNavigate('residential');
                    else if (app.sector === 'Industrial') onNavigate('industrial');
                    else onNavigate('commercial');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-cyan-700 transition-colors cursor-pointer"
                >
                  <span>Explore Sector Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
