import React from 'react';
import { Droplet, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWaterTest }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top 4-Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <span className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center">
                <Droplet className="w-4 h-4 fill-current" />
              </span>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                AquaPure <span className="text-cyan-400">Systems</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Advanced water softening, hard water treatment engineering, and water purification services for residential, commercial, and industrial facilities. Protecting plumbing, skin, and appliances since 2011.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-block text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                WQA Master Specialist
              </span>
              <span className="inline-block text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                NSF/ANSI 44 Certified
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Water Softener Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Water Softener Installation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenWaterTest}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Digital Water Hardness Testing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('maintenance')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Preventive Maintenance & Salt Delivery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Water Softener Valve Repairs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Resin Extraction & Re-Bedding
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Solutions & Equipment
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('residential')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Residential Softeners
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Commercial Water Softeners
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industrial')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Industrial Skid Systems
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Smart Demand-Metered Valves
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Client Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Austin Service Center
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-slate-300">450 Aquifer Parkway, Ste 100</p>
              <p className="text-slate-300">Austin, TX 78701</p>
              <p className="pt-1">
                <a href="tel:18005557873" className="text-cyan-400 font-bold hover:underline">
                  1-800-555-PURE
                </a>
              </p>
              <p className="text-slate-400">support@aquapuresystems.com</p>
              <p className="text-[11px] text-slate-500 pt-1">
                Emergency dispatch available 24/7/365
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} AquaPure Systems LLC. All rights reserved. Registered Texas Master Plumbing License #41982.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-slate-300 transition-colors"
            >
              About Our Company
            </button>
            <button
              type="button"
              onClick={() => onNavigate('blog')}
              className="hover:text-slate-300 transition-colors"
            >
              Water Treatment Guides
            </button>
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
