import { 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Plane, 
  FileCheck, 
  Users 
} from "lucide-react";

export const countryImages = {
  australia: {
    name: "Australia",
    slug: "australia",
    hero: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=80",
    city: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    study: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=800&q=80",
    work: "https://images.unsplash.com/photo-1579603099903-8eec5a815777?auto=format&fit=crop&w=800&q=80",
    lifestyle: "https://images.unsplash.com/photo-1525695230005-efd074d54751?auto=format&fit=crop&w=800&q=80",
    description: "Build a thriving future in Australia, a land of endless opportunities and world-class education.",
  },
  canada: {
    name: "Canada",
    slug: "canada",
    hero: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1920&q=80",
    city: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    study: "https://images.unsplash.com/photo-1521452843733-5c8a99479e0a?auto=format&fit=crop&w=800&q=80",
    work: "https://images.unsplash.com/photo-1563725553655-b0d876d7870a?auto=format&fit=crop&w=800&q=80",
    lifestyle: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
    description: "Experience high living standards and a welcoming environment for immigrants in Canada.",
  },
  uk: {
    name: "United Kingdom",
    slug: "uk",
    hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80",
    city: "https://images.unsplash.com/photo-1505322747495-6afdd3b70760?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    study: "https://images.unsplash.com/photo-1521452843733-5c8a99479e0a?auto=format&fit=crop&w=800&q=80",
    work: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    lifestyle: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=800&q=80",
    description: "Access prestigious education and diverse career pathways in the United Kingdom.",
  },
  usa: {
    name: "United States",
    slug: "usa",
    hero: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=80",
    city: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    study: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    work: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    lifestyle: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=800&q=80",
    description: "Pursue the American dream with limitless educational and professional prospects.",
  },
  newZealand: {
    name: "New Zealand",
    slug: "new-zealand",
    hero: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80",
    city: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f8?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    study: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    work: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80",
    lifestyle: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    description: "Enjoy a perfect work-life balance and stunning landscapes in New Zealand.",
  },
  europe: {
    name: "Europe",
    slug: "europe",
    hero: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80",
    city: "https://images.unsplash.com/photo-1502602898657-3e90760b296b?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    study: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    work: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    lifestyle: "https://images.unsplash.com/photo-1515542622106-78b28af7815d?auto=format&fit=crop&w=800&q=80",
    description: "Explore opportunities across Europe's rich cultures and growing economies.",
  }
};

export const servicesData = [
  {
    title: "Study Abroad",
    slug: "study-abroad",
    icon: GraduationCap,
    description: "University admission and student visa guidance tailored to your academic goals.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    title: "Visitor Visa",
    slug: "visitor-visa",
    icon: Plane,
    description: "Tourism, family visits, and short-term travel guidance made simple.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Permanent Residency",
    slug: "permanent-residency",
    icon: Globe,
    description: "Guidance for long-term immigration pathways and securing your future.",
    image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Family Immigration",
    slug: "family-immigration",
    icon: Users,
    description: "Support for eligible family migration pathways to reunite loved ones.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business / Investor",
    slug: "business-investor",
    icon: FileCheck,
    description: "Guidance for applicable business and investment immigration routes.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Understand the client's goals, timeline, and preferred destination."
  },
  {
    step: "02",
    title: "Profile Assessment",
    description: "Review background, eligibility, and destination requirements."
  },
  {
    step: "03",
    title: "Strategy",
    description: "Recommend suitable pathways and customized plans."
  },
  {
    step: "04",
    title: "Documentation",
    description: "Prepare and organize all required documents thoroughly."
  },
  {
    step: "05",
    title: "Application",
    description: "Guide the application process for precision and compliance."
  },
  {
    step: "06",
    title: "Decision",
    description: "Support the client through the final stage of the journey."
  }
];

export const trustIndicators = [
  "Expert Guidance",
  "End-to-End Support",
  "Transparent Process",
  "Multiple Destinations"
];
