import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../data/waterData';
import { ProductItem } from '../types';
import { Check, SlidersHorizontal, ArrowRight, ShieldCheck, Download } from 'lucide-react';

interface ProductsCatalogProps {
  onRequestDetails: (product: ProductItem) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ onRequestDetails }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'industrial' | 'smart'>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.category === activeCategory);

  return (
    <section id="products-catalog" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              High-Efficiency Equipment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
              Explore Our Water Softener Systems
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Every AquaPure system is assembled with NSF-certified pressure vessels, commercial-grade cross-linked resin, and intelligent metered control valves.
          </p>
        </div>

        {/* Category Filter Tabs (Allowed per §1.A: Functional Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-10">
          {[
            { id: 'all', label: 'All Equipment' },
            { id: 'residential', label: 'Domestic & Whole-House' },
            { id: 'smart', label: 'Smart Auto-Regeneration' },
            { id: 'commercial', label: 'Commercial Softeners' },
            { id: 'industrial', label: 'Industrial Skid Trains' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Product Card Top */}
              <div className="p-7">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span className="capitalize">{product.category}</span>
                  <span>{product.dimensions}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs Box */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Grain Capacity:</span>
                    <span className="font-mono font-bold text-slate-900 tabular-nums">
                      {product.grainCapacity}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Service Flow Rate:</span>
                    <span className="font-mono font-semibold text-slate-900 tabular-nums">
                      {product.flowRate}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Valve Technology:</span>
                    <span className="text-slate-800 text-right max-w-[180px] truncate">
                      {product.valveType}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Salt Efficiency:</span>
                    <span className="text-cyan-700 font-medium">
                      {product.saltEfficiency}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
                    Key Engineering Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Product Card Bottom Actions */}
              <div className="p-7 pt-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 font-medium">
                  {product.warranty}
                </span>

                <button
                  type="button"
                  onClick={() => onRequestDetails(product)}
                  className="px-4 py-2 bg-slate-900 hover:bg-cyan-600 text-white font-semibold text-xs rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
