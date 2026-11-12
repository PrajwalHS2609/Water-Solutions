import React from 'react';
import { TESTIMONIALS } from '../data/waterData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
              Trusted Water Solutions. Satisfied Customers.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900 font-mono">4.9 / 5.0</span>
            <span>from 340+ Verified Reviews</span>
          </div>
        </div>

        {/* Editorial Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{t.projectType}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.verifiedDate}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Installation
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
