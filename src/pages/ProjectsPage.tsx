import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/waterData';
import { CheckCircle2, MapPin, Quote, ArrowRight, Droplet } from 'lucide-react';
import { PageId } from '../types';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenWaterTest }) => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>Verified Results & ROI</span>
            <span>·</span>
            <span>Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Our Work: Real Clients. Quantified Results.
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            See how our tailored water softening and treatment solutions solved severe calcification problems, protected expensive plumbing, and generated immediate return on investment.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                  <span className="font-semibold text-cyan-700">{study.type}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {study.location}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {study.client}
                </h2>

                <p className="text-xs font-medium text-slate-500">
                  System Installed: <strong className="text-slate-800">{study.systemInstalled}</strong>
                </p>

                {/* Hardness Delta Strip */}
                <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Incoming Water</span>
                    <span className="font-mono font-bold text-rose-700">{study.initialHardness}</span>
                  </div>
                  <div className="h-6 w-px bg-slate-200" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Treated Soft Water</span>
                    <span className="font-mono font-bold text-emerald-700">{study.treatedHardness}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Measurable Results Achieved:
                  </h4>
                  {study.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Block */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-7 flex flex-col justify-between h-full space-y-6">
                <div>
                  <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
                  <p className="text-sm italic leading-relaxed text-slate-200">
                    "{study.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-xs font-bold text-white">{study.author}</p>
                  <p className="text-[11px] text-slate-400">{study.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Have Similar Water Hardness Challenges?</h3>
            <p className="text-xs text-slate-300">
              Get an empirical assessment and customized sizing plan for your property.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenWaterTest}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors whitespace-nowrap cursor-pointer"
          >
            Schedule Free Water Test
          </button>
        </div>

      </div>
    </div>
  );
};
