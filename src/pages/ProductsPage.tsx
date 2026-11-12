import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../data/waterData';
import { ProductItem, PageId } from '../types';
import { Check, ShieldCheck, Download, Sliders, ArrowRight } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
  onRequestProduct: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenWaterTest,
  onRequestProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  const filtered = selectedCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.category === selectedCategory);

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>Certified Hardware Catalog</span>
            <span>·</span>
            <span>NSF & WQA Certified</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Water Softener Systems & Equipment
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Engineered with uniform particle 10% cross-linked cation resin, solid composite pressure vessels, and optical salt monitors. Browse our residential, commercial, and industrial lineups.
          </p>
        </div>

        {/* Filter Controls (Functional Button Group per §1.A) */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-200">
          {[
            { id: 'all', label: 'All Equipment (5)' },
            { id: 'residential', label: 'Residential Softeners' },
            { id: 'smart', label: 'Smart Metered Series' },
            { id: 'commercial', label: 'Commercial Systems' },
            { id: 'industrial', label: 'Industrial Skid Units' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-7">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span className="capitalize">{item.category}</span>
                  <span>{item.dimensions}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2 mb-6 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Grain Capacity:</span>
                    <span className="font-mono font-bold text-slate-900 tabular-nums">{item.grainCapacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Flow Rate:</span>
                    <span className="font-mono font-semibold text-slate-900 tabular-nums">{item.flowRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Salt Efficiency:</span>
                    <span className="text-cyan-700 font-medium">{item.saltEfficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Valve Type:</span>
                    <span className="text-slate-800 text-right truncate max-w-[170px]">{item.valveType}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
                    Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-7 pt-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 font-medium">
                  {item.warranty}
                </span>
                <button
                  type="button"
                  onClick={() => onRequestProduct(item)}
                  className="px-4 py-2 bg-slate-900 hover:bg-cyan-600 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Request Specs / Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
