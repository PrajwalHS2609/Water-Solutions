import React from 'react';
import { Check, X, Shield, Sparkles, Zap, Heart } from 'lucide-react';

export const BenefitsComparison: React.FC = () => {
  const comparisons = [
    {
      feature: 'Water Heater Heat Transfer',
      hardWater: 'Limescale acts as thermal insulator; up to 24% efficiency loss.',
      softWater: '100% scale-free heating coils; peak efficiency maintained.',
      metric: '24% Energy Savings'
    },
    {
      feature: 'Detergent & Soap Usage',
      hardWater: 'Minerals neutralize soap; requires 50%–70% excess soap & detergent.',
      softWater: 'Rich luxurious lather instantly; up to 60% less detergent required.',
      metric: '60% Less Soap'
    },
    {
      feature: 'Appliance Lifespan',
      hardWater: 'Solenoids & pumps fail prematurely; replacement in 5–7 years.',
      softWater: 'Protects delicate valves & seals; full 12–15+ year operational lifespan.',
      metric: '+8 Years Lifespan'
    },
    {
      feature: 'Shower Doors & Tiles',
      hardWater: 'Stubborn chalky streaks requiring abrasive chemicals & heavy scrubbing.',
      softWater: 'Water runs off smoothly; zero crust, effortless wipe-downs.',
      metric: '75% Less Cleaning'
    },
    {
      feature: 'Bathing & Hair Comfort',
      hardWater: 'Soap curd dries out dermal moisture and leaves hair dull & frizzy.',
      softWater: 'Naturally cleanses without mineral residue, leaving skin soft & hydrated.',
      metric: 'Superior Comfort'
    },
    {
      feature: 'Plumbing & Faucet Integrity',
      hardWater: 'Choked aerators, clogged shower nozzles, pinhole corrosion risks.',
      softWater: 'Pristine flow rate through every fixture with zero mineral obstruction.',
      metric: '0.0 GPG Mineral Flow'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
            Tangible Daily Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
            More Than Soft Water. A Better Everyday Experience.
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Eliminating calcium and magnesium delivers immediate, measurable advantages for your appliances, plumbing, and monthly household expenses.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs font-semibold">
            <div className="col-span-4 sm:col-span-3 text-slate-300">
              Household Function
            </div>
            <div className="col-span-4 sm:col-span-4 text-rose-300">
              Untreated Hard Water
            </div>
            <div className="col-span-4 sm:col-span-5 text-cyan-300">
              Conditioned AquaPure Soft Water
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-200">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs items-center hover:bg-white transition-colors"
              >
                <div className="col-span-4 sm:col-span-3 font-bold text-slate-900 pr-2">
                  {row.feature}
                  <span className="block text-[11px] font-mono text-cyan-700 font-normal mt-0.5">
                    {row.metric}
                  </span>
                </div>

                <div className="col-span-4 sm:col-span-4 text-slate-600 pr-2 flex items-start gap-1.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.hardWater}</span>
                </div>

                <div className="col-span-4 sm:col-span-5 text-slate-800 font-medium flex items-start gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.softWater}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
