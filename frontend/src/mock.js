// Mock data for SoloScale website

export const mockData = {
  brand: {
    name: "SoloScale",
    tagline: "Scale Smarter. Sell Faster.",
    description: "India's trusted e-commerce growth agency helping brands and MSMEs scale on Amazon, Flipkart, Meesho, and JioMart."
  },
  
  contact: {
    address: "Building, Aashray Pearl, Office No. 23, D-Wing, Opp. Water Tank, Pale Gaon, Ambernath, Maharashtra – 421501",
    serviceArea: "Ulhasnagar & Pan-India (Online)",
    hours: "Monday to Saturday — 10:00 AM to 7:00 PM",
    deliveryMode: "100% Online"
  },
  
  services: [
    {
      id: 1,
      title: "Marketplace Account Management",
      problem: "Overwhelmed managing multiple marketplace accounts?",
      solution: "We handle day-to-day operations, compliance, and seller health.",
      outcome: "Focus on growth while we manage the backend."
    },
    {
      id: 2,
      title: "SEO-Rich Product Listing Creation",
      problem: "Low visibility despite great products?",
      solution: "Keyword-optimized listings that rank higher and convert better.",
      outcome: "Increased discoverability and organic sales."
    },
    {
      id: 3,
      title: "A+ Content & Brand Store Design",
      problem: "Generic product pages failing to build trust?",
      solution: "Premium brand storytelling with enhanced visuals and content.",
      outcome: "Higher conversion rates and brand credibility."
    },
    {
      id: 4,
      title: "PPC Ads & Performance Marketing",
      problem: "Burning ad budget with poor ROI?",
      solution: "Data-driven campaigns optimized for profitability, not just clicks.",
      outcome: "Lower ACoS and sustainable ad performance."
    },
    {
      id: 5,
      title: "Pricing Strategy & Profit Optimization",
      problem: "High sales but low margins?",
      solution: "Strategic pricing analysis to maximize profit without losing competitiveness.",
      outcome: "Healthier margins and sustainable business growth."
    },
    {
      id: 6,
      title: "Returns & Claims Control",
      problem: "Losing revenue to returns and unfair claims?",
      solution: "Proactive claim management and return reduction strategies.",
      outcome: "Protected revenue and improved seller metrics."
    },
    {
      id: 7,
      title: "Growth Analytics & Transparent Reporting",
      problem: "Flying blind without clear performance data?",
      solution: "Weekly dashboards with actionable insights and growth metrics.",
      outcome: "Data-backed decisions and clear ROI visibility."
    }
  ],
  
  platforms: [
    {
      id: 1,
      name: "Amazon",
      expertise: "Full-service Amazon management including Seller Central optimization, FBA logistics, Amazon Ads, and Brand Registry support.",
      features: ["Seller Central Management", "FBA Optimization", "Amazon PPC", "Brand Registry"]
    },
    {
      id: 2,
      name: "Flipkart",
      expertise: "End-to-end Flipkart growth strategies covering listing optimization, ads management, and seller performance improvement.",
      features: ["Seller Hub Management", "Flipkart Ads", "Big Billion Days", "Flipkart Plus"]
    },
    {
      id: 3,
      name: "Meesho",
      expertise: "Specialized Meesho seller support for reseller network expansion, pricing strategy, and catalogue management.",
      features: ["Reseller Network", "Zero Commission", "Catalogue Optimization", "Meesho Ads"]
    },
    {
      id: 4,
      name: "JioMart",
      expertise: "JioMart integration and growth services for brands looking to tap into Reliance's digital commerce ecosystem.",
      features: ["JioMart Seller", "Reliance Network", "Digital Commerce", "Omnichannel"]
    }
  ],
  
  whyChoose: [
    {
      id: 1,
      title: "Systems, Not Guesswork",
      description: "Proven playbooks and SOPs that deliver consistent results."
    },
    {
      id: 2,
      title: "Profit Over Vanity Metrics",
      description: "We optimize for margins and ROI, not just top-line sales."
    },
    {
      id: 3,
      title: "100% Transparent Reporting",
      description: "Weekly dashboards with real metrics and actionable insights."
    },
    {
      id: 4,
      title: "Pan-India Expertise",
      description: "Serving sellers across metros and tier-2 cities with 100% online delivery."
    }
  ],
  
  cities: [
    "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Ahmedabad", "Ulhasnagar", "Pan-India"
  ],
  
  targetClients: [
    "Amazon & Flipkart Sellers",
    "D2C Brands",
    "MSMEs",
    "Furniture & Home Category Sellers"
  ]
};

// Mock form submission
export const submitContactForm = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Form submitted:", formData);
  
  // Store in localStorage for demo
  const existingLeads = JSON.parse(localStorage.getItem('soloscale_leads') || '[]');
  existingLeads.push({
    ...formData,
    id: Date.now(),
    submittedAt: new Date().toISOString()
  });
  localStorage.setItem('soloscale_leads', JSON.stringify(existingLeads));
  
  return { success: true, message: "Thank you! We'll contact you within 24 hours." };
};