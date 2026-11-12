export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'residential'
  | 'commercial'
  | 'industrial'
  | 'products'
  | 'maintenance'
  | 'projects'
  | 'blog'
  | 'contact';

export interface ProductItem {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'industrial' | 'smart';
  grainCapacity: string;
  flowRate: string;
  valveType: string;
  idealFor: string;
  saltEfficiency: string;
  warranty: string;
  description: string;
  highlights: string[];
  dimensions: string;
}

export interface HardWaterSymptom {
  id: string;
  title: string;
  description: string;
  impactScore: number; // 1-10
  severity: 'Moderate' | 'High' | 'Severe';
  financialLossAnnual: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  turnaroundTime: string;
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  location: string;
  type: 'Residential Estate' | 'Boutique Hotel' | 'Commercial Laundry' | 'Healthcare Facility' | 'Craft Brewery';
  initialHardness: string;
  treatedHardness: string;
  systemInstalled: string;
  results: string[];
  quote: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: 'Residential Home' | 'Commercial Business' | 'Multi-Family Complex' | 'Hospitality';
  rating: number;
  text: string;
  verifiedDate: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technology' | 'installation' | 'maintenance';
}
