import React, { useState } from 'react';
import { Droplet, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenWaterTest
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-400">
              Certified WQA Water Specialists & Master Plumbers
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="text-cyan-400 font-medium">
              Free On-Site Water Hardness Testing
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:18005557873"
              className="flex items-center gap-1.5 text-white hover:text-cyan-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>1-800-555-PURE</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">Mon–Sat: 7:30 AM – 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single element Brand wordmark */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-slate-950 font-bold tracking-tight text-xl whitespace-nowrap shrink-0 group text-left cursor-pointer"
          >
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-xs group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              <Droplet className="w-5 h-5 fill-current" />
            </span>
            <span className="font-display tracking-tight text-slate-900 text-lg sm:text-xl">
              AquaPure <span className="text-cyan-600">Systems</span>
            </span>
          </button>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'home' ? 'text-cyan-600 font-semibold' : ''
              }`}
            >
              Home
            </button>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Solutions & Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-transform" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <button
                  type="button"
                  onClick={() => handleLinkClick('services')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  All Water Services Overview
                </button>
                <div className="h-px bg-slate-100 my-1" />
                <button
                  type="button"
                  onClick={() => handleLinkClick('residential')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-cyan-700 transition-colors"
                >
                  Residential Softener Systems
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('commercial')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-cyan-700 transition-colors"
                >
                  Commercial Water Solutions
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('industrial')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-cyan-700 transition-colors"
                >
                  Industrial Water Treatment
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('maintenance')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-cyan-700 transition-colors"
                >
                  Installation & Maintenance
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleLinkClick('products')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'products' ? 'text-cyan-600 font-semibold' : ''
              }`}
            >
              Products & Equipment
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('projects')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'projects' ? 'text-cyan-600 font-semibold' : ''
              }`}
            >
              Case Studies
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('about')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'about' ? 'text-cyan-600 font-semibold' : ''
              }`}
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('blog')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'blog' ? 'text-cyan-600 font-semibold' : ''
              }`}
            >
              Water Guides
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'contact' ? 'text-cyan-600 font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenWaterTest}
              className="px-4.5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-600 rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get a Free Water Test
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <button
                type="button"
                onClick={() => handleLinkClick('home')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('services')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                All Services
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('residential')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Residential
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('commercial')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Commercial
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('industrial')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Industrial
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('products')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Products
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('maintenance')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Maintenance
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('projects')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Case Studies
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('about')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('blog')}
                className="text-left px-3 py-2 rounded-lg bg-slate-50 text-slate-800"
              >
                Water Guides
              </button>
            </div>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleLinkClick('contact')}
                className="w-full text-center py-2.5 bg-slate-100 text-slate-800 font-semibold rounded-lg text-xs"
              >
                Contact & Showroom Location
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaterTest();
                }}
                className="w-full text-center py-2.5 bg-cyan-600 text-white font-semibold rounded-lg text-xs"
              >
                Book Free On-Site Water Assessment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
