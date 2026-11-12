import React from 'react';
import { HARD_WATER_SYMPTOMS } from '../data/waterData';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WaterHardnessCalculator } from './WaterHardnessCalculator';
import { IMAGES } from '../assets/images';

interface HardWaterProblemsProps {
  onOpenWaterTest: (initialData?: { householdSize: number; hardnessGpg: number }) => void;
}

export const HardWaterProblems: React.FC<HardWaterProblemsProps> = ({ onOpenWaterTest }) => {
  return (
    <section id="hard-water-guide" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
            Household Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
            Is Hard Water Affecting Your Everyday Life?
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Dissolved calcium, magnesium, and carbonate ions do not just leave cosmetic chalky marks. They silently bake inside internal heating coils, degrade laundry fabrics, dehydrate your skin, and inflate utility bills.
          </p>
        </div>

        {/* Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Problem Image & Real Damage Evidence */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 relative bg-slate-100">
              <img
                src={IMAGES.hardWaterProblems}
                onError={(e) => { e.currentTarget.src = '/images/hard_water_problems.jpg'; }}
                alt="Close-up comparison of mineral limescale and crust buildup on bathroom plumbing showerhead and tile grout"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-rose-700">Actual Unmitigated Damage:</span> Severe mineral calcification on shower aerators and grout after 18 months of 16 GPG water.
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                The Compounding Cost of Waiting:
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">·</span>
                  <span>Water heater energy bills climb by up to <strong>24%</strong> due to insulating scale.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">·</span>
                  <span>Appliance lifespans (dishwashers, washing machines) drop from 12 years to <strong>5–7 years</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">·</span>
                  <span>Up to <strong>$800+</strong> wasted each year in extra detergents, cleaning acids, and plumbing calls.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: 6 Interactive Symptoms Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HARD_WATER_SYMPTOMS.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-500">
                      Impact: {item.impactScore}/10
                    </span>
                    <span
                      className={`font-semibold ${
                        item.severity === 'Severe'
                          ? 'text-rose-700'
                          : 'text-amber-700'
                      }`}
                    >
                      {item.severity}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                  Est. Waste: <span className="text-slate-900 font-bold font-mono tabular-nums">{item.financialLossAnnual}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Diagnostic Tool Anchor */}
        <div className="mt-12">
          <WaterHardnessCalculator onBookTest={onOpenWaterTest} />
        </div>

      </div>
    </section>
  );
};
