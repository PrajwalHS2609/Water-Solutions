import React, { useState } from 'react';
import { Wrench, ShieldCheck, Check, Clock, Truck, Droplet, ArrowRight, AlertCircle } from 'lucide-react';
import { PageId } from '../types';

interface MaintenancePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({ onNavigate, onOpenWaterTest }) => {
  const [saltBags, setSaltBags] = useState<number>(4);
  const [saltSubmitted, setSaltSubmitted] = useState<boolean>(false);

  const handleSaltOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSaltSubmitted(true);
  };

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>Engineering Lifetime Support</span>
            <span>·</span>
            <span>Turnkey Care</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Water Softener Installation & Maintenance Care
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            A water softener is only as good as its plumbing integration. Learn our 7-point code-compliant installation standard and our hands-free doorstep salt delivery programs.
          </p>
        </div>

        {/* Installation Standard Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              The Master Plumber Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Our 7-Point Code-Compliant Installation Standard
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Every installation is executed by our licensed master plumbing technicians with zero pressure loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {[
              { title: '1. Dynamic Pressure Balancing', desc: 'We verify incoming static and dynamic pressure, installing PRVs if municipal surges exceed 75 PSI.' },
              { title: '2. Solid Brass Bypass Manifold', desc: 'Allows you to isolate the softener in seconds for exterior irrigation watering without tools.' },
              { title: '3. Code-Compliant Air-Gap Drain', desc: 'Prevents any sewage or sewer gas back-siphonage into your family drinking supply.' },
              { title: '4. Dedicated Cold Water Loop', desc: 'Exterior hose bibs are routed before the softener so you never waste expensive softened water on the lawn.' },
              { title: '5. Dry Salt Shelf Architecture', desc: 'Prevents salt mushing and bridging at the bottom of the brine tank, ensuring clean suction.' },
              { title: '6. Digital Hardness Calibration', desc: 'We program the exact grains per gallon from your test results into the microprocessor head.' }
            ].map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-cyan-700 font-bold block mb-1">Standard 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Plans & Salt Concierge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Annual Maintenance Plans */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Annual Maintenance Contract (AMC) Tiers
            </h3>
            <p className="text-xs text-slate-600">
              Extend the life of your ion-exchange resin beads from 10 to 20 years with scheduled chemical rejuvenation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900">Essential Care</h4>
                    <p className="text-xs text-slate-500">Bi-Annual Inspection</p>
                  </div>
                  <span className="text-xl font-bold font-mono text-slate-900 tabular-nums">$149/yr</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>2x Annual resin bed rejuvenation wash</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>O-ring and piston seal lubrication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Brine injector cleaning & float check</span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={onOpenWaterTest}
                  className="w-full py-2 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-cyan-600 transition-colors"
                >
                  Enroll in Essential
                </button>
              </div>

              <div className="bg-white rounded-2xl border-2 border-cyan-500 p-6 space-y-4 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900">Complete Concierge</h4>
                    <p className="text-xs text-slate-500">Includes Heavy Salt Refills</p>
                  </div>
                  <span className="text-xl font-bold font-mono text-cyan-700 tabular-nums">$299/yr</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>All Essential Care services included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Quarterly solar salt bag delivery (up to 12 bags/yr)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Heavy lifting done: carried straight to your tank</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Priority 24/7 same-day emergency dispatch</span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={onOpenWaterTest}
                  className="w-full py-2 bg-cyan-600 text-white font-semibold text-xs rounded-xl hover:bg-cyan-500 transition-colors"
                >
                  Enroll in Concierge
                </button>
              </div>
            </div>
          </div>

          {/* Right: Salt Order Widget */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-7 shadow-xs">
            <div className="flex items-center gap-2 text-cyan-700 mb-2">
              <Truck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Salt Concierge</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Order High-Purity Solar Salt Bags
            </h3>
            <p className="text-xs text-slate-600 mb-5">
              Never lug 40 lb bags from the hardware store again. Our technicians deliver 99.8% pure solar salt crystals directly to your basement or garage brine tank.
            </p>

            {saltSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-800 text-center space-y-2">
                <p className="font-bold">Salt Delivery Order Placed!</p>
                <p>We will deliver {saltBags} bags (40 lb each) of 99.8% solar salt crystals to your address within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => setSaltSubmitted(false)}
                  className="mt-2 text-cyan-800 underline font-semibold"
                >
                  Modify order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSaltOrder} className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">Number of 40 lb Bags:</span>
                    <span className="font-mono font-bold text-slate-900 tabular-nums">{saltBags} Bags ({(saltBags * 40)} lbs)</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="2"
                    value={saltBags}
                    onChange={e => setSaltBags(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>2 Bags (~2 mos)</span>
                    <span>4 Bags (~4 mos)</span>
                    <span>8+ Bags</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs flex justify-between items-center">
                  <span className="text-slate-600">Total with Delivery & Pour-In:</span>
                  <span className="font-mono font-bold text-slate-900 text-sm tabular-nums">${(saltBags * 14.5).toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 hover:bg-cyan-600 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Schedule Doorstep Salt Delivery
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
