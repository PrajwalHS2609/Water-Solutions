import React from 'react';
import { Factory, Cpu, Gauge, Zap, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';

interface IndustrialPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const IndustrialPage: React.FC<IndustrialPageProps> = ({ onNavigate, onOpenWaterTest }) => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>Heavy Engineering & Process Water</span>
            <span>·</span>
            <span>Industrial Skids</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Industrial Water Treatment & Skid-Mounted Softeners
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Engineered triplex and quad softening trains for cooling towers, boiler makeup, chemical manufacturing, and semiconductor rinse processes. Continuous flow rates from 75 to 500+ GPM.
          </p>
        </div>

        {/* Industrial Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">PLC Automation & SCADA</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Touch-screen PLC control architecture with Modbus TCP and BACnet IP protocols for direct integration into plant Building Management Systems (BMS).
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li>· Continuous differential pressure monitoring</li>
              <li>· Real-time brine density hydrometer sensors</li>
              <li>· Remote cloud alerting for salt recharge thresholds</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Boiler & Cooling Tower Feed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Zero-leakage cation exchange ensures feedwater hardness remains under 0.1 PPM, protecting high-pressure steam boiler tubes from thermal tube failure.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li>· Increases cooling tower concentration cycles</li>
              <li>· Reduces chemical scale inhibitor dosing</li>
              <li>· ASME code stamped pressure vessel options</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pre-Packaged Skidded Trains</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Factory pre-piped, hydro-tested, and wired on 304 or 316 stainless steel skids for rapid drop-in mechanical room installation with minimal shutdown.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li>· Schedule 80 PVC or 316L stainless piping</li>
              <li>· Cast bronze or stainless diaphragm valve nests</li>
              <li>· Dual brine saturators with automated brine refill</li>
            </ul>
          </div>
        </div>

        {/* Industrial Engineering Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3 text-center lg:text-left">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold font-mono">
              Custom Industrial Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Require a Custom Process Flow Diagram (PFD) or RFP Response?
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our industrial engineering staff prepares comprehensive CAD drawings, resin volume calculations, and complete lifecycle operating cost projections for engineering firms and plant managers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenWaterTest}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
            >
              Request Plant Engineering Audit
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer text-center"
            >
              Contact Industrial Specialist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
