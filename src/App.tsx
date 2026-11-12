import React, { useState, useEffect } from 'react';
import { PageId, ProductItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustHighlights } from './components/TrustHighlights';
import { HardWaterProblems } from './components/HardWaterProblems';
import { SolutionsSection } from './components/SolutionsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ApplicationsSection } from './components/ApplicationsSection';
import { BenefitsComparison } from './components/BenefitsComparison';
import { ProductsCatalog } from './components/ProductsCatalog';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ConversionCta } from './components/ConversionCta';
import { ContactEnquirySection } from './components/ContactEnquirySection';
import { Footer } from './components/Footer';
import { FreeWaterTestModal } from './components/FreeWaterTestModal';
import { WhatsAppButton } from './components/WhatsAppButton';

// Subpage Views
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { IndustrialPage } from './pages/IndustrialPage';
import { ProductsPage } from './pages/ProductsPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isWaterTestModalOpen, setIsWaterTestModalOpen] = useState(false);
  const [waterTestData, setWaterTestData] = useState<{ householdSize: number; hardnessGpg: number } | null>(null);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWaterTest = (initialData?: { householdSize: number; hardnessGpg: number }) => {
    if (initialData) {
      setWaterTestData(initialData);
    } else {
      setWaterTestData(null);
    }
    setIsWaterTestModalOpen(true);
  };

  const handleRequestProduct = (product: ProductItem) => {
    // Open water test modal pre-configured or navigate to contact
    handleOpenWaterTest();
  };

  const handleScrollToContact = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('contact-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/20 selection:text-cyan-900">
      
      {/* Strict Top Bar Contract Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenWaterTest={() => handleOpenWaterTest()}
      />

      {/* Main Content Area */}
      <main className="grow">
        {currentPage === 'home' && (
          <>
            {/* Section 1: Premium Hero Section */}
            <HeroSection
              onOpenWaterTest={() => handleOpenWaterTest()}
              onRequestConsultation={handleScrollToContact}
            />

            {/* Section 2: Trust & Service Highlights */}
            <TrustHighlights
              onNavigate={navigateTo}
              onOpenWaterTest={() => handleOpenWaterTest()}
            />

            {/* Section 3: Understanding Hard Water Problems & Calculator */}
            <HardWaterProblems
              onOpenWaterTest={(data) => handleOpenWaterTest(data)}
            />

            {/* Section 4: Our Water Softener Solutions */}
            <SolutionsSection
              onNavigate={navigateTo}
              onOpenWaterTest={() => handleOpenWaterTest()}
            />

            {/* Section 5: Why Choose Our Water Softener Services? */}
            <WhyChooseUs />

            {/* Section 6: How Our Process Works */}
            <ProcessTimeline
              onOpenWaterTest={() => handleOpenWaterTest()}
            />

            {/* Section 7: Residential & Commercial Applications */}
            <ApplicationsSection
              onNavigate={navigateTo}
            />

            {/* Section 8: Benefits of Water Softener Systems */}
            <BenefitsComparison />

            {/* Section 9: Featured Products & Equipment */}
            <ProductsCatalog
              onRequestDetails={handleRequestProduct}
            />

            {/* Section 10: Customer Testimonials */}
            <TestimonialsSection />

            {/* Section 11: Frequently Asked Questions */}
            <FaqSection />

            {/* Section 12: Strong Conversion CTA */}
            <ConversionCta
              onOpenWaterTest={() => handleOpenWaterTest()}
              onRequestConsultation={handleScrollToContact}
            />

            {/* Section 13: Contact & Enquiry Section */}
            <ContactEnquirySection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'residential' && (
          <ResidentialPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'commercial' && (
          <CommercialPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'industrial' && (
          <IndustrialPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
            onRequestProduct={handleRequestProduct}
          />
        )}

        {currentPage === 'maintenance' && (
          <MaintenancePage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenWaterTest={() => handleOpenWaterTest()}
          />
        )}
      </main>

      {/* Section 14: Professional Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenWaterTest={() => handleOpenWaterTest()}
      />

      {/* Interactive Free Water Test Modal */}
      <FreeWaterTestModal
        isOpen={isWaterTestModalOpen}
        onClose={() => setIsWaterTestModalOpen(false)}
        initialData={waterTestData}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

    </div>
  );
}
