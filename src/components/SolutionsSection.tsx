import React from 'react';
import { ArrowRight, Check, Droplet, Sparkles, Building2, Factory, Home } from 'lucide-react';
import { PageId } from '../types';

interface SolutionsSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onNavigate,
  onOpenWaterTest
}) => {
  return (
    <section id="solutions" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-16 border-b border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Engineered Technology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 text-balance">
              Smart Water Softening Solutions for Every Space
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            From single-tank domestic cabinets to duplex alternating commercial skids, our systems are sized with precision flow geometry to ensure zero pressure drop.
          </p>
        </div>

        {/* Feature Hero Solution: Whole-House & Commercial Flagship */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/60 rounded-3xl p-6 lg:p-10 border border-slate-700">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 relative bg-slate-950 border border-slate-700">
            <img
              src="/src/assets/images/commercial_softener_system_1794388679034.jpg"
              alt="High-efficiency whole-house water softener system with digital valve controller and brine tank in clean utility room"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-semibold text-cyan-400 border border-slate-700">
              Flagship Dual-Matrix
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Whole-House & Light Commercial</span>
              <span>·</span>
              <span>Capacity: 64,000–120,000 Grains</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              AquaPure Twin-Matrix Duplex Continuous Softening
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Never run out of soft water. Our dual alternating tanks operate in synchronization: while tank A supplies 100% conditioned water, tank B stands on standby. When tank A reaches capacity, switching occurs in milliseconds, initiating regeneration during off-peak hours without interruption.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '24/7 continuous soft water supply with zero downtime',
                'Proportional brine regeneration saves up to 40% salt',
                '10% cross-linked chlorine-resistant uniform bead resin',
                'Integrated full-port bypass valve for rapid servicing'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('residential')}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                View System Specifications
              </button>
              <button
                type="button"
                onClick={onOpenWaterTest}
                className="px-5 py-2.5 rounded-xl border border-slate-600 hover:border-slate-400 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Request Sizing Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Bento Grid for Other Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Domestic Compact Softener */}
          <div className="bg-slate-800/40 border border-slate-800 hover:border-slate-700 p-7 rounded-2xl flex flex-col justify-between transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-800/50 flex items-center justify-center mb-5">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 font-mono">01. Residential</span>
              <h4 className="text-lg font-bold text-white mt-1 mb-2">
                Domestic All-in-One Cabinet Softeners
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Compact cabinet-enclosed systems designed specifically for apartments, modern condos, and compact utility rooms.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">·</span>
                  <span>Fits under standard countertops or utility closets</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">·</span>
                  <span>Quiet motorized digital ceramic disc valve</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('residential')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Commercial Water Softener */}
          <div className="bg-slate-800/40 border border-slate-800 hover:border-slate-700 p-7 rounded-2xl flex flex-col justify-between transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 flex items-center justify-center mb-5">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 font-mono">02. Commercial</span>
              <h4 className="text-lg font-bold text-white mt-1 mb-2">
                High-Volume Commercial Softeners
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Engineered for hotels, restaurants, laundries, and clinics. Protects commercial dishwashers and high-pressure steam boilers.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">·</span>
                  <span>High flow rates up to 50 GPM per vessel</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">·</span>
                  <span>NEMA-4X water-resistant digital control enclosure</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('commercial')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Industrial Water Treatment */}
          <div className="bg-slate-800/40 border border-slate-800 hover:border-slate-700 p-7 rounded-2xl flex flex-col justify-between transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 text-indigo-400 border border-indigo-800/50 flex items-center justify-center mb-5">
                <Factory className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 font-mono">03. Industrial</span>
              <h4 className="text-lg font-bold text-white mt-1 mb-2">
                Skid-Mounted Industrial Treatment
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Custom engineered triplex and quad softening skids with PLC automation for cooling towers, boiler feed, and manufacturing plants.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">·</span>
                  <span>Flow capacities from 75 to 500+ GPM</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">·</span>
                  <span>BMS integration via Modbus & BACnet</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('industrial')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
