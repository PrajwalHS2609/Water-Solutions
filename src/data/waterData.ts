import { ProductItem, HardWaterSymptom, ServiceDetail, CaseStudy, Testimonial, BlogPost, FaqItem } from '../types';

export const HARD_WATER_SYMPTOMS: HardWaterSymptom[] = [
  {
    id: 'scale_buildup',
    title: 'Limescale Crust on Faucets & Showerheads',
    description: 'Chalky calcium and magnesium carbonate crystals solidify around aerators and valves, choking water pressure and eroding chrome coatings.',
    impactScore: 9,
    severity: 'Severe',
    financialLossAnnual: '$280 in replacement fixtures'
  },
  {
    id: 'water_heater_damage',
    title: 'Water Heater Inefficiency & Premature Burnout',
    description: 'Just 1/4 inch of limescale layer on tank heating elements increases electrical/gas energy consumption by 24% to 32% and halves tank lifespan.',
    impactScore: 10,
    severity: 'Severe',
    financialLossAnnual: '$420 in excess energy & repair reserves'
  },
  {
    id: 'dry_skin_hair',
    title: 'Dry, Itchy Skin & Dull, Brittle Hair',
    description: 'Hard minerals react with natural bodily oils and soaps to create a curd-like residue that clogs dermal pores and lifts hair cuticle shafts.',
    impactScore: 8,
    severity: 'High',
    financialLossAnnual: '$180 in specialty moisturizers & salon treatments'
  },
  {
    id: 'soap_curd',
    title: 'Zero Soap Lather & Dingy Laundry',
    description: 'Calcium binds with surfactant molecules, requiring up to 60% more soap and laundry detergent while leaving whites grey and towels stiff.',
    impactScore: 7,
    severity: 'High',
    financialLossAnnual: '$310 in wasted detergents & worn fabrics'
  },
  {
    id: 'cloudy_glassware',
    title: 'Etched, Spotty Glassware & Bathroom Tiles',
    description: 'Dishwashers leave cloudy silica-calcium film on crystal glasses and shower glass partitions that resists standard vinegar scrub downs.',
    impactScore: 6,
    severity: 'Moderate',
    financialLossAnnual: '$120 in specialty rinse agents'
  },
  {
    id: 'appliance_failures',
    title: 'Frequent Washing Machine & Boiler Servicing',
    description: 'Solenoid intake valves, internal pumps, and heat exchangers accumulate rock-hard mineral deposits, triggering unexpected breakdown faults.',
    impactScore: 9,
    severity: 'Severe',
    financialLossAnnual: '$450 in recurring emergency plumbing visits'
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'aquapure-compact-32',
    name: 'AquaPure Compact 32K',
    category: 'residential',
    grainCapacity: '32,000 Grains',
    flowRate: '11.5 GPM Continuous',
    valveType: 'Metered Demand Digital Valve',
    idealFor: 'Apartments & 1–3 Bathroom Residences',
    saltEfficiency: '4,850 Grains/lb of salt',
    warranty: '10-Year Tank / 5-Year Valve Warranty',
    description: 'All-in-one space-saving cabinet water softener engineered with premium food-grade uniform particle resin and intelligent metered regeneration.',
    highlights: [
      'Fits inside compact utility cupboards or under kitchen counters',
      'Ultra-quiet motorized ceramic disc valve',
      'Digital backlit LCD display with real-time flow rate telemetry',
      'Automated proportional brine recharge saving 35% salt'
    ],
    dimensions: '44" H x 14" W x 21" D'
  },
  {
    id: 'aquapure-twin-matrix-64',
    name: 'AquaPure Twin-Matrix 64K',
    category: 'residential',
    grainCapacity: '64,000 Grains (Dual Tank)',
    flowRate: '17.2 GPM Peak Flow',
    valveType: 'Continuous Alternating Duplex Valve',
    idealFor: 'Large Single-Family Homes & Luxury Villas (3–6 Baths)',
    saltEfficiency: '5,200 Grains/lb of salt',
    warranty: '12-Year Tank / 7-Year Valve Warranty',
    description: 'Zero soft-water downtime with alternating twin tanks. One tank supplies conditioned water while the second stands ready or regenerates on demand.',
    highlights: [
      '24/7 uninterrupted soft water supply even during 2 AM regeneration',
      'Commercial-grade 10% cross-linked chlorine-resistant cation resin',
      'Built-in full-port stainless steel bypass manifold',
      'Dry salt shelf technology prevents salt bridging'
    ],
    dimensions: '54" H x 28" W x 18" D'
  },
  {
    id: 'aquapure-commercial-120',
    name: 'AquaPure ProCommercial 120K',
    category: 'commercial',
    grainCapacity: '120,000 Grains',
    flowRate: '28.0 GPM High Volume',
    valveType: 'Flextrol Pro 1.5-Inch Top-Mounted Valve',
    idealFor: 'Hotels, Restaurants, Commercial Kitchens & Laundromats',
    saltEfficiency: '4,900 Grains/lb of salt',
    warranty: '5-Year Comprehensive Commercial Warranty',
    description: 'High-flow heavy-duty ion-exchange system designed to protect commercial boilers, steam ovens, commercial dishwashers, and laundry operations.',
    highlights: [
      'Heavy-duty fiberglass reinforced composite vessel',
      'High-velocity salt brine eductor for rapid recharge cycle',
      'NEMA-4X water-resistant digital control housing',
      'Integrated water meter with programmable auxiliary relay outputs'
    ],
    dimensions: '65" H x 32" W x 24" D'
  },
  {
    id: 'aquapure-industrial-skid-300',
    name: 'AquaPure Industrial Skid 300K',
    category: 'industrial',
    grainCapacity: '300,000–600,000 Grains',
    flowRate: '75–180 GPM Industrial Flow',
    valveType: 'Multi-Port Diaphragm Nest with PLC Controller',
    idealFor: 'Manufacturing Plants, Boiler Feed & Cooling Towers',
    saltEfficiency: '5,100 Grains/lb of salt',
    warranty: '5-Year Structural / 2-Year Instrumentation',
    description: 'Custom engineered skid-mounted duplex or triplex softening system with 316 stainless steel interconnecting piping and industrial touch-screen PLC.',
    highlights: [
      'Factory pre-piped, wired, and hydro-tested on structural steel skid',
      'Modbus / BACnet connectivity for building management integration',
      'Automatic differential pressure sensor initiates backwash on demand',
      'Heavy-duty brine saturator pit with automatic makeup control'
    ],
    dimensions: '82" H x 84" W x 48" D'
  },
  {
    id: 'aquapure-smart-eco-48',
    name: 'AquaPure SmartEco Pro 48K',
    category: 'smart',
    grainCapacity: '48,000 Grains',
    flowRate: '14.0 GPM Continuous',
    valveType: 'Microprocessor Demand Regeneration Valve',
    idealFor: 'Modern Suburban Homes (2–4 Bathrooms)',
    saltEfficiency: '5,050 Grains/lb of salt',
    warranty: '10-Year Tank / 5-Year Valve Warranty',
    description: 'Eco-intelligent water softener that calculates household usage trends, automatically optimizing brine dosage to reduce salt consumption by 40%.',
    highlights: [
      'Optical infrared salt level monitor warns before salt runs empty',
      'Leak detection prober with automatic safety shut-off',
      'Soft water brine tank refill prevents sludge buildup',
      'NSF/ANSI 44 and WQA Gold Seal certified components'
    ],
    dimensions: '48" H x 15" W x 22" D'
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'installation',
    title: 'Professional Water Softener Installation',
    subtitle: 'Code-compliant plumbing integration with zero pressure drop',
    description: 'Our licensed master technicians evaluate your main water inlet, measure incoming water pressure and dynamic flow rate, and install your system with full-port bypass loops and dedicated drain lines.',
    features: [
      'Pre-installation site survey and dynamic pressure balancing',
      'Full-port brass or stainless steel bypass manifold installed',
      'Air-gap compliant sanitary drain connection',
      'Free initial 100 lb food-grade solar salt delivery & complete calibration'
    ],
    turnaroundTime: 'Completed in 3–4 hours',
    idealFor: 'New homeowners, replacement upgrades, and renovation projects'
  },
  {
    id: 'testing',
    title: 'Certified Water Hardness Testing & Assessment',
    subtitle: 'NABL & WQA standard on-site and laboratory chemical analysis',
    description: 'We don’t guess water hardness. Our certified water specialists perform rigorous digital titration testing for Total Hardness (GPG/PPM), Total Dissolved Solids (TDS), pH, and Ferrous Iron.',
    features: [
      'Direct on-site digital titration testing kit',
      'Full diagnostic report with GPG, Iron, TDS, and Silica levels',
      'Exact grain sizing calculation based on occupants and peak fixtures',
      'Zero sales pressure—pure empirical water data report provided'
    ],
    turnaroundTime: 'Instant results in 30 minutes',
    idealFor: 'Anyone experiencing white stains, scale buildup, or moving into a new area'
  },
  {
    id: 'maintenance',
    title: 'Preventive Maintenance & Salt Replenishment',
    subtitle: 'Scheduled care to guarantee 15+ years of peak softening efficiency',
    description: 'Keep your resin bed free of iron fouling and bacterial biofilms. Our Annual Maintenance Contracts (AMC) handle scheduled resin cleanings, valve seal inspections, and hands-free salt refills.',
    features: [
      'Resin bed chemical rejuvenation wash removing iron & manganese fouling',
      'O-ring lubrication and internal piston/spacer inspection',
      'Brine tank inspection, sanitization, and float assembly calibration',
      'Scheduled heavy-lift salt bag doorstep delivery right to the brine tank'
    ],
    turnaroundTime: 'Bi-annual or quarterly visits',
    idealFor: 'Busy homeowners and commercial facility managers'
  },
  {
    id: 'repair',
    title: 'Water Softener Repair & Re-Bedding Services',
    subtitle: 'Fast troubleshooting for hard water breakthrough and error codes',
    description: 'Is your softener running constantly, overflowing brine, showing error codes, or delivering hard water? Our mobile emergency service vans carry parts for all major valve brands.',
    features: [
      'Complete valve rebuilds and digital circuit replacement',
      'High-capacity resin extraction and re-bedding with premium 10% cross-link resin',
      'Brine line clog clearing and venturi injector rebuilds',
      'Emergency same-day dispatch available 6 days a week'
    ],
    turnaroundTime: 'Same-day or next-day service',
    idealFor: 'All brands including Fleck, Clack, Autotrol, Culligan, Kinetico, and EcoWater'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand Your Water',
    tagline: 'Initial Consultation',
    description: 'We review your property layout, household size, peak fixture flow demands, and primary water hardness pain points over a quick phone or video consultation.'
  },
  {
    step: '02',
    title: 'Water Testing & Assessment',
    tagline: 'On-Site Diagnostic Audit',
    description: 'A certified water specialist visits your property with digital testing equipment to measure hardness grains per gallon (GPG), TDS, and incoming water pressure.'
  },
  {
    step: '03',
    title: 'System Sizing & Clean Install',
    tagline: 'Code-Compliant Implementation',
    description: 'We install the custom-sized softener system with full-port bypass plumbing, safety overflow valves, and calibrate the digital regeneration meter to your exact water profile.'
  },
  {
    step: '04',
    title: 'Maintenance & Support',
    tagline: 'Lifetime Pure Soft Water',
    description: 'Enjoy guaranteed soft water backed by our 10-year warranty, automated salt delivery options, and annual checkups to keep efficiency at peak performance.'
  }
];

export const APPLICATIONS = [
  {
    title: 'Independent Homes & Luxury Villas',
    sector: 'Residential',
    description: 'Preserve imported marble tiles, custom rain-showers, tankless heaters, and luxury brassware with silky, soft water that pampers your family.',
    impact: 'Protects $40,000+ in plumbing & high-end bathroom fixtures'
  },
  {
    title: 'Hotels, Spas & Boutique Resorts',
    sector: 'Hospitality',
    description: 'Deliver crisp, spotless glassware at dining tables, ultra-soft linens for guest suites, and eliminate scale in commercial laundry boilers.',
    impact: 'Reduces linen replacement rates by 34% and laundry chemical costs by 45%'
  },
  {
    title: 'Hospitals & Healthcare Clinics',
    sector: 'Healthcare',
    description: 'Protect sensitive autoclaves, sterilization units, laundry boilers, and RO pre-treatment loops from destructive mineral scale precipitation.',
    impact: 'Meets stringent ASTM/AAMI water standards for medical facility equipment'
  },
  {
    title: 'Restaurants & Commercial Kitchens',
    sector: 'Food & Beverage',
    description: 'Ensure coffee espresso machine boilers remain 100% scale-free, combi-steamers cook efficiently, and dishwashers leave sparkling spotless plates.',
    impact: 'Zero boiler downtime and prevents $2,500 espresso machine heating element failures'
  },
  {
    title: 'Apartment Complexes & Condos',
    sector: 'Multi-Family',
    description: 'Centralized high-capacity duplex softening systems delivering conditioned soft water to every tenant while protecting common riser pipework.',
    impact: 'Lowers shared maintenance fees and prevents clogged riser plumbing leaks'
  },
  {
    title: 'Manufacturing & Industrial Facilities',
    sector: 'Industrial',
    description: 'Continuous high-volume softened water for cooling towers, high-pressure steam boilers, and manufacturing rinse processes.',
    impact: 'Prevents thermal efficiency loss and tube fouling in cooling loops'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'austin-villa-estate',
    client: 'The Westbrook Residence',
    location: 'Westlake Hills, TX',
    type: 'Residential Estate',
    initialHardness: '24 GPG (Very Hard)',
    treatedHardness: '< 0.5 GPG (Silky Soft)',
    systemInstalled: 'AquaPure Twin-Matrix 64K Duplex System',
    results: [
      'Eliminated stubborn calcium ring on 4 master bathroom marble tubs',
      'Water heater energy consumption reduced by 26% within first 90 days',
      'Zero limescale spots on newly installed dark bronze shower fixtures'
    ],
    quote: 'Our brand new Italian marble bathroom was already staining with white chalk after just 2 months. AquaPure evaluated our water, installed the twin-tank system cleanly, and now our fixtures look perpetually showroom-new.',
    author: 'David & Catherine Westbrook'
  },
  {
    id: 'boutique-hotel-grand',
    client: 'The Laurel Boutique Hotel & Spa',
    location: 'Downtown Austin, TX',
    type: 'Boutique Hotel',
    initialHardness: '21 GPG (Extremely Hard)',
    treatedHardness: '< 0.3 GPG (Optimal)',
    systemInstalled: 'AquaPure ProCommercial 120K Duplex System',
    results: [
      'Annual laundry detergent consumption slashed by 52% across 84 guest suites',
      'Commercial dishwasher rinse agent expenses dropped by $4,200/year',
      'Guest feedback regarding shower water softness reached 98% positive'
    ],
    quote: 'Scale was killing our commercial laundry wash machines and clogging steam irons. AquaPure’s commercial team engineered a system that paid for itself within 14 months purely in detergent and energy savings.',
    author: 'Marcus Vance, Operations Director'
  },
  {
    id: 'craft-brewery-facility',
    client: 'Highland Ridge Craft Brewery',
    location: 'Georgetown, TX',
    type: 'Craft Brewery',
    initialHardness: '19 GPG',
    treatedHardness: '< 0.2 GPG (Precision Water Profile)',
    systemInstalled: 'AquaPure Skid 300K Automated Industrial Unit',
    results: [
      'Protected 500-gallon brew kettles from heavy thermal scale encrustation',
      'Consistent baseline water profile achieved for proprietary craft ales',
      'Boiler heat-transfer efficiency maintained at 99.2%'
    ],
    quote: 'Water profile is everything in brewing. AquaPure’s engineering gave our head brewer total control over mineral content while safeguarding our steam boiler from scaling.',
    author: 'Elena Rostova, Brewmaster'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Robert Hensley',
    role: 'Homeowner (4-Bedroom Home)',
    location: 'Barton Creek, TX',
    projectType: 'Residential Home',
    rating: 5,
    text: 'Before AquaPure, our shower doors looked like frosted glass from the hard calcium deposits. Three weeks after installation, the existing scale wiped off easily and our skin feels hydrated without that dry, tight winter feeling. Outstanding workmanship by their installation crew!',
    verifiedDate: 'October 2026'
  },
  {
    id: 'test-2',
    name: 'Sophia Lindqvist',
    role: 'General Manager, Bistro Sol',
    location: 'Austin, TX',
    projectType: 'Commercial Business',
    rating: 5,
    text: 'Our 3-group espresso machine kept scaling up every 4 months, costing us thousands in down-time. AquaPure engineered a dedicated commercial softening setup. Not only is the espresso crema visibly richer, but our dishwasher leaves wine glasses sparkling without towel polishing.',
    verifiedDate: 'September 2026'
  },
  {
    id: 'test-3',
    name: 'Julian Montgomery',
    role: 'Property Manager, Vista Ridge Towers (120 Units)',
    location: 'Round Rock, TX',
    projectType: 'Multi-Family Complex',
    rating: 5,
    text: 'Managing central boilers for 120 units in a hard water territory was an operational nightmare until AquaPure replaced our outdated system with their twin-matrix industrial skid. Outstanding remote telemetry and reliable monthly salt service.',
    verifiedDate: 'August 2026'
  },
  {
    id: 'test-4',
    name: 'Dr. Michael Chang',
    role: 'Dental Clinic Director',
    location: 'Cedar Park, TX',
    projectType: 'Commercial Business',
    rating: 5,
    text: 'Our dental autoclaves and clinical water lines require high-purity softened water. AquaPure conducted a comprehensive water analysis and delivered a pristine, medical-grade installation that passed inspection with flying colors.',
    verifiedDate: 'November 2026'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is hard water and how do I know if I have it?',
    answer: 'Hard water contains high concentrations of dissolved minerals, primarily calcium (Ca²⁺) and magnesium (Mg²⁺) ions. Typical signs include chalky white stains on faucets, crusty buildup on showerheads, soap that won’t lather, stiff laundry, and dry, itchy skin after showering. Water above 7 Grains Per Gallon (GPG) is classified as hard, while above 14 GPG is extremely hard.'
  },
  {
    id: 'faq-2',
    category: 'technology',
    question: 'How does a water softener actually work?',
    answer: 'A true water softener operates via an ion-exchange process. Untreated hard water passes through a pressurized tank packed with millions of microscopic food-grade polystyrene resin beads charged with sodium or potassium ions. As hard water flows through, the calcium and magnesium ions have a stronger electrical charge and cling to the resin, swapping places with harmless sodium ions. The result is 100% physically softened water.'
  },
  {
    id: 'faq-3',
    category: 'technology',
    question: 'What is the difference between water softening and water purification?',
    answer: 'Water softeners specifically target hardness minerals (calcium and magnesium) to protect plumbing, appliances, and skin from scale. Water purifiers (such as Reverse Osmosis systems or activated carbon filters) target dissolved contaminants, heavy metals, chlorine, fluoride, bacteria, and microplastics for pure drinking water. In modern homes, the ideal setup is a whole-house water softener at the main inlet paired with a point-of-use Reverse Osmosis system at the kitchen sink.'
  },
  {
    id: 'faq-4',
    category: 'installation',
    question: 'Is a water softener suitable for residential apartments and condos?',
    answer: 'Yes! We offer compact, all-in-one cabinet water softeners (such as the AquaPure Compact 32K) designed specifically for apartments and homes with dedicated water inlet shutoffs. For condominium buildings without individual water inlets, we engineer centralized duplex softening systems for the building’s main mechanical room.'
  },
  {
    id: 'faq-5',
    category: 'installation',
    question: 'How do I choose the right water softener capacity for my home?',
    answer: 'Capacity is calculated based on three factors: (1) Total grains of hardness in your water (GPG), (2) The number of residents in your home, and (3) Average daily water consumption (~75 gallons per person per day). For example: 4 people x 75 gallons = 300 gallons/day. At 15 GPG hardness, your home uses 4,500 grains of hardness per day. A 48,000-grain system will regenerate comfortably every 7–9 days at peak salt efficiency. Our team provides free sizing calculations during your water test.'
  },
  {
    id: 'faq-6',
    category: 'maintenance',
    question: 'How frequently does a water softener require salt refills and maintenance?',
    answer: 'A typical family of four uses approximately one 40-50 lb bag of high-purity solar salt per month with our metered demand systems. We recommend checking your brine tank every 4–6 weeks. On an annual basis, our technicians perform resin bed rejuvenation, valve seal lubrication, and brine injector cleanings to guarantee decades of peak performance.'
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'Will soft water make my water taste salty or feel slippery?',
    answer: 'Soft water does not taste salty; the amount of sodium added during ion-exchange is minimal (typically less sodium than a single slice of white bread in an entire quart of water). If you are on a strict sodium-free diet, potassium chloride pellets can be used instead of sodium salt, or a drinking water Reverse Osmosis system removes 98%+ of all minerals. The "smooth" feeling in the shower is your body’s natural oils and clean skin without soap-curd residue!'
  },
  {
    id: 'faq-8',
    category: 'maintenance',
    question: 'Do you provide professional installation, repairs, and warranty coverage?',
    answer: 'Yes. All installations are performed by our licensed in-house master plumbers with code-compliant full-port bypass manifolds and air-gap drain fixtures. Every residential system includes up to a 10–12 year tank warranty and 5-year electronic valve warranty, backed by 24/7 emergency repair support.'
  },
  {
    id: 'faq-9',
    category: 'general',
    question: 'How can I request a free water quality assessment?',
    answer: 'You can click any "Get a Free Water Test" button on this website, fill out our quick 1-minute form, call us directly at 1-800-555-PURE, or send us a WhatsApp message. Our specialist will schedule a convenient 30-minute on-site assessment at your home or business with zero purchase obligation.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'true-cost-of-hard-water',
    title: 'The Hidden Financial Cost of Hard Water on Modern Households',
    category: 'Homeowner Guide',
    readTime: '5 min read',
    date: 'November 2026',
    excerpt: 'How 15 GPG hard water silently drains up to $1,800 every single year through premature appliance failure, wasted detergents, and soaring energy bills.',
    content: [
      'Most homeowners view hard water merely as a cosmetic nuisance—a few chalky spots on the faucet or cloudy drinking glasses. However, rigorous studies conducted by the Water Quality Association (WQA) demonstrate that hard water causes significant compounding financial damage to household mechanical systems.',
      'According to WQA research, a gas water heater operated on hard water loses up to 24% of its thermal efficiency over a 15-year lifespan. The layer of calcium carbonate that bakes onto the heating elements acts as an insulating blanket, forcing the heater to burn dramatically more energy to reach temperature.',
      'Furthermore, washing machines operated on soft water require up to 60% less detergent to achieve superior stain removal at cold water settings compared to hard water at hot temperatures. When you tally appliance repairs, excess soap, premature clothing wear, and elevated energy bills, a typical family loses between $1,200 and $1,800 annually.',
      'Investing in a high-efficiency metered water softener typically yields a full financial return on investment (ROI) within 24 to 36 months.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'ion-exchange-vs-salt-free-conditioners',
    title: 'Ion-Exchange Softeners vs. Salt-Free Descalers: The Engineering Truth',
    category: 'Technology & Science',
    readTime: '7 min read',
    date: 'October 2026',
    excerpt: 'An objective engineering breakdown comparing true ion-exchange water softeners with catalytic template-assisted crystallization (TAC) conditioners.',
    content: [
      'The water treatment marketplace is often clouded by conflicting claims regarding "salt-free softeners". From a chemical and physical standpoint, it is vital to understand the difference between true water softening and water conditioning.',
      'A true water softener removes calcium and magnesium ions completely using cation exchange resin. The water exits the unit with 0 GPG hardness. This completely eliminates soap scum, protects skin moisture, and enables soap to lather freely.',
      'In contrast, salt-free conditioners (often using Template Assisted Crystallization or magnetic fields) do not remove calcium or magnesium from the water. Instead, they attempt to crystallize the minerals in suspension so they do not adhere as easily to heated pipe walls. While TAC systems can reduce scale in hot water pipes, the minerals remain in the water—meaning you will still experience soap scum, dry skin, and water spotting when water evaporates on glass.',
      'For genuine soft water benefits and complete limescale eradication, an engineered ion-exchange softener remains the international gold standard.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'signs-water-softener-needs-service',
    title: '5 Warning Signs Your Water Softener Needs Immediate Service',
    category: 'Maintenance Tips',
    readTime: '4 min read',
    date: 'September 2026',
    excerpt: 'Learn how to detect salt bridging, resin exhaustion, and valve seal leaks before hard water damages your expensive plumbing fixtures.',
    content: [
      'Even the most rugged water softeners require occasional inspection to maintain peak efficiency. Here are the five most common indicators that your system requires professional attention:',
      '1. Hard Water Breakthrough: If soap suddenly stops lathering or white spots reappear on your shower door, your resin may be fouled by iron or the control valve may not be drawing brine properly.',
      '2. Salt Level Not Dropping (Salt Bridge): If your salt tank appears full month after month, a hard crust or "salt bridge" may have formed, creating a hollow void above the water level that prevents brine formation.',
      '3. Salty Water at the Tap: If your tap water tastes distinctly salty after a night cycle, the drain line restrictor or injector may be clogged, failing to rinse the brine completely before service mode resumes.',
      '4. Constant Draining: If you hear water trickling down the drain line continuously 24 hours a day, the internal valve piston or seal kit has worn out and needs replacement.',
      '5. High Brine Tank Water Level: If water in your salt tank is rising near the overflow elbow, the safety float valve is clogged with salt silt or the venturi injector is blocked.'
    ]
  }
];
