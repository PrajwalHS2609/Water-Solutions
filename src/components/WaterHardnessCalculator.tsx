import React, { useState } from 'react';
import { Droplet, AlertTriangle, ShieldCheck, ArrowRight, Check, Zap } from 'lucide-react';

interface CalculatorProps {
  onBookTest: (initialData?: { householdSize: number; hardnessGpg: number }) => void;
}

export const WaterHardnessCalculator: React.FC<CalculatorProps> = ({ onBookTest }) => {
  const [householdSize, setHouseholdSize] = useState<number>(3);
  const [hardnessLevel, setHardnessLevel] = useState<number>(16); // GPG
  const [waterSource, setWaterSource] = useState<'city' | 'well'>('city');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    'stains',
    'dry_skin'
  ]);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculations:
  // Average water usage = 75 gallons per person per day
  const dailyGallons = householdSize * 75;
  const effectiveHardness = waterSource === 'well' ? hardnessLevel + 3 : hardnessLevel;
  const dailyGrains = dailyGallons * effectiveHardness;
  const weeklyGrains = dailyGrains * 7;

  // Sizing recommendations
  let recommendedModel = 'AquaPure Compact 32K';
  let recommendedCapacity = '32,000 Grains';
  if (weeklyGrains > 40000) {
    recommendedModel = 'AquaPure Twin-Matrix 64K';
    recommendedCapacity = '64,000 Grains (Duplex)';
  } else if (weeklyGrains > 24000) {
    recommendedModel = 'AquaPure SmartEco Pro 48K';
    recommendedCapacity = '48,000 Grains';
  }

  // Estimated annual financial loss calculation
  // Energy loss + detergent waste + appliance depreciation
  const baseLossPerPerson = 280;
  const severityMultiplier = effectiveHardness >= 15 ? 1.4 : effectiveHardness >= 10 ? 1.15 : 0.9;
  const annualLoss = Math.round(householdSize * baseLossPerPerson * severityMultiplier);

  // Hardness classification label
  const getHardnessClassification = (gpg: number) => {
    if (gpg < 3.5) return { label: 'Slightly Hard', color: 'text-emerald-700 bg-emerald-50' };
    if (gpg < 7.0) return { label: 'Moderately Hard', color: 'text-amber-700 bg-amber-50' };
    if (gpg < 10.5) return { label: 'Hard Water', color: 'text-orange-700 bg-orange-50' };
    if (gpg < 15.0) return { label: 'Very Hard', color: 'text-red-700 bg-red-50' };
    return { label: 'Extremely Hard Water', color: 'text-rose-800 bg-rose-50' };
  };

  const classification = getHardnessClassification(effectiveHardness);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold tracking-wider text-cyan-600 uppercase">
            Interactive Diagnostic Tool
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
            Water Hardness & System Sizing Estimator
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Calculate your household’s daily mineral load and estimated annual savings.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setWaterSource('city')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              waterSource === 'city'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Municipal / City Water
          </button>
          <button
            type="button"
            onClick={() => setWaterSource('well')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              waterSource === 'well'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Private Well Water (+Iron Factor)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label className="font-semibold text-slate-800">
                Number of Household Members
              </label>
              <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded text-sm tabular-nums">
                {householdSize} {householdSize === 1 ? 'Person' : 'People'} (~{dailyGallons} Gallons/Day)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              value={householdSize}
              onChange={e => setHouseholdSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>1</span>
              <span>2</span>
              <span>4</span>
              <span>6</span>
              <span>8+ occupants</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label className="font-semibold text-slate-800">
                Estimated Water Hardness (Grains Per Gallon - GPG)
              </label>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${classification.color}`}>
                  {classification.label}
                </span>
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-sm tabular-nums">
                  {effectiveHardness} GPG ({Math.round(effectiveHardness * 17.1)} PPM)
                </span>
              </div>
            </div>
            <input
              type="range"
              min="3"
              max="30"
              value={hardnessLevel}
              onChange={e => setHardnessLevel(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>3 GPG (Soft)</span>
              <span>10 GPG (Hard)</span>
              <span>20 GPG (Severe)</span>
              <span>30+ GPG (Extreme)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Select Visible Hard Water Symptoms in Your Home:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'stains', label: 'White crust on showerheads & taps' },
                { id: 'dry_skin', label: 'Dry skin & frizzy hair after showers' },
                { id: 'cloudy_glass', label: 'Cloudy dishware & spotted glass' },
                { id: 'soap_curd', label: 'Soap does not lather / stiff clothes' },
                { id: 'heater_noise', label: 'Popping sounds from water heater' },
                { id: 'appliance_wear', label: 'Frequent appliance repairs' }
              ].map(symptom => {
                const checked = selectedSymptoms.includes(symptom.id);
                return (
                  <button
                    key={symptom.id}
                    type="button"
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-left text-xs transition-all ${
                      checked
                        ? 'border-sky-500 bg-sky-50/50 text-slate-900 font-medium'
                        : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span
                      className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        checked
                          ? 'bg-sky-600 border-sky-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {checked && <Check className="w-3 h-3" />}
                    </span>
                    <span>{symptom.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Sizing Assessment
              </span>
              <span className="text-xs text-slate-400">
                Empirical WQA Standard
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs text-slate-400">Recommended Softener Model</p>
                <p className="text-xl font-bold tracking-tight text-white mt-0.5">
                  {recommendedModel}
                </p>
                <p className="text-xs text-cyan-300 mt-0.5">
                  Capacity: {recommendedCapacity}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                <div className="bg-slate-800/80 p-3 rounded-xl">
                  <p className="text-[11px] text-slate-400">Daily Mineral Load</p>
                  <p className="text-lg font-bold font-mono text-white tabular-nums">
                    {dailyGrains.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-slate-400">Grains removed/day</p>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl">
                  <p className="text-[11px] text-slate-400">Regeneration Interval</p>
                  <p className="text-lg font-bold font-mono text-white tabular-nums">
                    Every 6–8
                  </p>
                  <p className="text-[10px] text-slate-400">Days (Demand-metered)</p>
                </div>
              </div>

              <div className="bg-cyan-950/40 border border-cyan-800/50 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Estimated Annual Cost of Untreated Water
                </div>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">
                  ${annualLoss.toLocaleString()} / year
                </p>
                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                  Lost to premature heater wear, excess detergent dosages, plumbing repairs, and scale buildup.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => onBookTest({ householdSize, hardnessGpg: effectiveHardness })}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-sm transition-all shadow-sm cursor-pointer"
            >
              <span>Confirm with Free On-Site Water Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              No sales obligation · Complete 12-point digital titration audit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
