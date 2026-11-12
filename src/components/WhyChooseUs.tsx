import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Gauge, Wrench, Clock, Users, FileCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Experienced Technical Team',
      desc: 'All field engineers are certified by the Water Quality Association (WQA) and hold licensed master plumbing credentials.'
    },
    {
      title: 'Professional Code-Compliant Installation',
      desc: 'Clean pipe routing with solid brass bypass manifolds, air-gap drain fixtures, and dynamic pressure stabilization.'
    },
    {
      title: 'Commercial-Grade Componentry',
      desc: 'High-strength composite pressure vessels, 10% cross-linked uniform bead resin, and heavy-duty digital metered control heads.'
    },
    {
      title: 'Custom Sized to Your Chemistry',
      desc: 'We never guess. Every system is tailored to your exact GPG hardness, iron content, family size, and peak fixture GPM.'
    },
    {
      title: 'Transparent Pricing & Diagnostics',
      desc: 'Empirical water testing report provided upfront. Fixed upfront quotes with zero hidden trip fees or forced upsells.'
    },
    {
      title: 'Dependable Maintenance & Salt Service',
      desc: 'Scheduled doorstep heavy-salt delivery right into your brine tank, bi-annual sanitization, and priority repair response.'
    },
    {
      title: 'Residential & Commercial Mastery',
      desc: 'Trusted by over 18,500 single-family homeowners as well as prestigious hotels, coffee roasters, and healthcare centers.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Asymmetric Editorial Lead */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              The AquaPure Standard
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
              Reliable Water Solutions. Designed Around Your Needs.
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              When it comes to your home’s plumbing and family’s daily water, second-rate equipment and slapdash plumbing cause catastrophic leaks and brine overflows. We build systems that last 15+ years.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    10-Year Ironclad Warranty
                  </h4>
                  <p className="text-xs text-slate-500">
                    Comprehensive coverage on tanks, valves, and resin beds.
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Certified 100% Lead-Free Plumbing
                  </h4>
                  <p className="text-xs text-slate-500">
                    Exceeds NSF/ANSI Standard 61 health effect criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Structured Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-md bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
