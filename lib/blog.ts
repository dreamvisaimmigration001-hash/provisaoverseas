export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: {
    type: 'tip' | 'info' | 'warning';
    title: string;
    text: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  image: string;
  tags: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'navigating-the-new-point-system-for-australian-pr',
    title: 'Navigating the New Point System for Australian PR',
    category: 'Immigration',
    excerpt: 'An in-depth look at recent changes to the Australian permanent residency points system and what it means for skilled workers.',
    date: 'October 12, 2023',
    readTime: '6 min read',
    author: {
      name: 'Simranjit Singh',
      role: 'Senior Immigration Strategist',
    },
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Australia', 'Permanent Residency', 'Points Test', 'GSM Visa', 'Subclass 189', 'Subclass 190'],
    sections: [
      {
        heading: 'Understanding Australia’s General Skilled Migration (GSM)',
        paragraphs: [
          'Australia’s General Skilled Migration (GSM) program is designed for qualified professionals who want to live and work in Australia permanently. The foundation of this system is the Points Test, where candidates earn points across various categories such as age, English language ability, skilled employment experience, educational qualifications, and Australian study.',
          'With recent immigration quota announcements and changes to priority occupation lists, understanding how points are awarded and strategically maximizing your score is more critical than ever to receiving an Invitation to Apply (ITA).'
        ],
        callout: {
          type: 'info',
          title: 'Minimum Benchmark vs. Realistic Cutoff',
          text: 'While the statutory minimum to submit an Expression of Interest (EOI) via SkillSelect is 65 points, high demand in major occupations often requires candidates to achieve 85 to 95+ points for Subclass 189, or 80+ points with State Nomination (Subclass 190).'
        }
      },
      {
        heading: 'Core Scoring Factors in the Points Test',
        paragraphs: [
          'The points system rewards candidates based on factors that demonstrate long-term economic contribution and integration potential:',
        ],
        bulletPoints: [
          'Age: Applicants aged 25 to 32 receive the maximum 30 points, while those aged 33 to 39 secure 25 points.',
          'English Language Ability: Superior English (IELTS 8.0 each or PTE Academic 79 each) awards 20 points, compared to 10 points for Proficient English (IELTS 7.0 or PTE 65).',
          'Skilled Employment: Up to 15 points can be earned for 8+ years of relevant overseas experience, and up to 20 points for Australian work experience.',
          'Educational Qualifications: A recognized Doctorate awards 20 points, while a Bachelor’s or Master’s degree awards 15 points.',
          'Specialist Educational Qualification: Master’s by research or PhD in STEM fields awards an additional 10 points.',
          'Partner Qualifications: Having a skilled partner with a positive skills assessment and competent English yields 10 points; single applicants also receive 10 points.'
        ]
      },
      {
        heading: 'Actionable Strategies to Boost Your Score',
        paragraphs: [
          'If your current score sits just below the recent invitation rounds, there are several proven avenues to boost your standing:',
          '1. Target Superior English: Jumping from Proficient (10 points) to Superior (20 points) in PTE or IELTS is often the fastest way to gain 10 additional points.',
          '2. Credentialed Community Language (CCL): Passing the NAATI CCL test in your native language grants an immediate 5 bonus points.',
          '3. State Nomination (Subclass 190 & 491): State sponsorship offers an extra 5 points for the Subclass 190 visa and a significant 15 points for the regional Subclass 491 visa.',
          '4. Professional Year Program: Completing an approved Professional Year in Australia in Accounting, Engineering, or IT adds 5 points.'
        ],
        callout: {
          type: 'tip',
          title: 'State Priority Sectors',
          text: 'States and territories currently prioritize healthcare professionals, early childhood educators, civil engineers, and cybersecurity specialists. Aligning your application with regional shortage lists can dramatically shorten invitation waiting times.'
        }
      },
      {
        heading: 'How Pro Visa Overseas Can Assist You',
        paragraphs: [
          'Navigating skills assessment authorities (such as ACS, VETASSESS, Engineers Australia, or ANMAC), calculating claimed experience, and lodging a flawless EOI requires expert precision. One minor mistake in calculating overseas work experience can lead to a visa refusal down the road.',
          'Our licensed immigration consultants review your complete profile, identify every point-scoring opportunity, and structure a seamless pathway toward your Australian Permanent Residency.'
        ]
      }
    ]
  },
  {
    id: '2',
    slug: 'top-5-universities-in-canada-for-international-students',
    title: 'Top 5 Universities in Canada for International Students',
    category: 'Student Visa',
    excerpt: 'Exploring the best educational institutions in Canada that offer exceptional support for international students.',
    date: 'September 28, 2023',
    readTime: '5 min read',
    author: {
      name: 'Harpreet Kaur',
      role: 'Study Abroad Director',
    },
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80',
    tags: ['Canada', 'Study Abroad', 'Student Visa', 'Universities', 'PGWP', 'Higher Education'],
    sections: [
      {
        heading: 'Why Choose Canada for Higher Education?',
        paragraphs: [
          'Canada continues to be one of the premier study abroad destinations globally, welcoming hundreds of thousands of international students each year. Known for its world-class academic institutions, multicultural society, post-graduation work permit (PGWP) opportunities, and clear pathways to permanent residency, Canadian universities deliver exceptional return on education.',
          'Choosing the right university depends on your target program, research aspirations, campus culture, tuition budget, and long-term career goals.'
        ]
      },
      {
        heading: '1. University of Toronto (U of T) — Ontario',
        paragraphs: [
          'Consistently ranked as Canada’s top university and among the top 25 globally, the University of Toronto is renowned for research excellence, world-class faculty, and prime location in the financial hub of Toronto. With over 700 undergraduate and 200 graduate programs, U of T is an academic powerhouse in Computer Science, Business (Rotman School of Management), Medicine, and Engineering.',
          'International students benefit from extensive career fairs, global alumni networks, and robust research funding.'
        ]
      },
      {
        heading: '2. University of British Columbia (UBC) — Vancouver, BC',
        paragraphs: [
          'Situated between coastal mountains and the Pacific Ocean, UBC boasts one of the most stunning campuses in the world. UBC is celebrated for its forward-thinking sustainability initiatives, life sciences, economics, and business (Sauder School of Business).',
          'UBC offers a dedicated International Student Guide, comprehensive mental health support, and integrated co-op programs that connect students directly with industry leaders in Vancouver and beyond.'
        ]
      },
      {
        heading: '3. McGill University — Montreal, Quebec',
        paragraphs: [
          'Often described as the ‘Harvard of Canada’, McGill boasts more Rhodes Scholars and Nobel laureates than any other Canadian institution. Located in downtown Montreal—one of the world’s most vibrant and affordable student cities—McGill offers a rich bilingual and cultural atmosphere.',
          'Programs in Medicine, Law, Arts, and Management attract top minds worldwide. While French is the dominant language in Quebec, McGill conducts its instruction entirely in English.'
        ]
      },
      {
        heading: '4. McMaster University — Hamilton, Ontario',
        paragraphs: [
          'Famous for inventing Problem-Based Learning (PBL), McMaster University is consistently ranked in the global top 100. It is especially distinguished for its Health Sciences, Bio-medical Engineering, and Materials Science faculties.',
          'Located in Hamilton, just an hour from Toronto, McMaster offers a cost-effective living environment with access to cutting-edge research hospitals and high-tech manufacturing corridors.'
        ]
      },
      {
        heading: '5. University of Waterloo — Waterloo, Ontario',
        paragraphs: [
          'If your dream is a career in Software Engineering, Artificial Intelligence, or Mathematics, Waterloo stands unmatched. Hosting the world’s largest post-secondary co-operative education program, Waterloo students alternate academic terms with paid internships at top tech employers like Google, Microsoft, and Shopify.',
          'Over 95% of co-op graduates secure employment within six months of graduation.'
        ],
        callout: {
          type: 'tip',
          title: 'Provincial Attestation Letter (PAL) Requirement',
          text: 'Under recent IRCC regulations, most international undergraduate study permit applicants must obtain a Provincial Attestation Letter (PAL) from their designated learning institution before submitting their visa application.'
        }
      },
      {
        heading: 'Securing Your Canadian Study Permit',
        paragraphs: [
          'Admission is only the first step. Preparing a solid Statement of Purpose (SOP), demonstrating adequate financial capability (GIC and first-year tuition), and presenting clean documentation are vital to avoid visa delays or refusals.',
          'Pro Visa Overseas guides you from university shortlisting and application submission to visa filing and pre-departure orientation.'
        ]
      }
    ]
  },
  {
    id: '3',
    slug: 'complete-guide-to-uk-family-and-spouse-visa-pathways',
    title: 'Complete Guide to UK Family and Spouse Visa Pathways',
    category: 'Family Visa',
    excerpt: 'A comprehensive guide to requirements, financial criteria, and application steps for UK Family migration.',
    date: 'September 15, 2023',
    readTime: '7 min read',
    author: {
      name: 'Simranjit Singh',
      role: 'Senior Immigration Strategist',
    },
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    tags: ['UK', 'Family Visa', 'Spouse Visa', 'Settlement', 'Immigration Rules', 'ILR'],
    sections: [
      {
        heading: 'Bringing Your Loved Ones to the UK',
        paragraphs: [
          'The UK Family and Spouse Visa route enables British citizens, persons settled in the UK (with Indefinite Leave to Remain or EU Settled Status), and holders of certain refugee protections to bring their non-British partners and family members to live with them in the United Kingdom.',
          'Because the UK Home Office applies strict scrutiny to family migration applications, understanding the qualifying criteria and assembling indisputable documentation is critical for a smooth approval.'
        ]
      },
      {
        heading: 'Key Eligibility Criteria',
        paragraphs: [
          'To qualify for a UK Spouse or Partner Visa, both the applicant and the sponsor must satisfy several mandatory legal requirements:',
        ],
        bulletPoints: [
          'Relationship Authenticity: The couple must be legally married or in a civil partnership recognized in the UK, or have lived together in a relationship akin to marriage for at least two years.',
          'Minimum Income Requirement (MIR): The sponsor must meet the financial threshold through salaried employment, self-employment, cash savings, or non-employment income.',
          'Adequate Accommodation: You must demonstrate that you have suitable housing available without relying on public funds.',
          'English Language Requirement: The applicant must demonstrate proficiency at CEFR Level A1 (for initial entry) or Level A2/B1 for subsequent extensions.',
          'Tuberculosis (TB) Screening: Applicants from designated countries must pass a TB test at an approved clinic.'
        ],
        callout: {
          type: 'warning',
          title: 'Financial Threshold Changes',
          text: 'The UK Government recently increased the standard minimum income requirement for family visas. Sponsors must carefully evaluate their financial documents and payslips to ensure full compliance before filing.'
        }
      },
      {
        heading: 'Proving a Genuine and Subsisting Relationship',
        paragraphs: [
          'One of the most common reasons for refusal is insufficient evidence that the relationship is genuine and ongoing. The Home Office expects tangible proof across the duration of your partnership.',
          'Essential supporting evidence includes joint tenancy agreements or mortgage statements, shared utility bills, joint bank statements, travel itineraries of visits, photographs across different occasions, and consistent communication logs over messaging platforms.'
        ]
      },
      {
        heading: 'The 5-Year Route to Indefinite Leave to Remain (ILR)',
        paragraphs: [
          'A successful initial spouse visa is typically granted for 33 months (if applied from outside the UK) or 30 months (if switching within the UK). Before it expires, you must apply for an extension for another 30 months.',
          'After completing 5 continuous years on this route (and passing the Life in the UK test and CEFR B1 English), the applicant becomes eligible for Indefinite Leave to Remain (settlement), and can apply for British citizenship shortly thereafter.'
        ]
      },
      {
        heading: 'How We Ensure Your Family’s Approval',
        paragraphs: [
          'At Pro Visa Overseas, we have helped hundreds of families reunite in the UK without unnecessary delays. We structure your documentation bundle, audit financial evidence against Appendix FM-SE requirements, and draft legal representation letters that leave no room for ambiguity.'
        ]
      }
    ]
  },
  {
    id: '4',
    slug: 'essential-documents-for-us-visitor-visas',
    title: 'Essential Documents for US Visitor Visas',
    category: 'Visitor Visa',
    excerpt: 'Make sure you are prepared for your consular interview with this essential documentation checklist.',
    date: 'August 30, 2023',
    readTime: '5 min read',
    author: {
      name: 'Aman Sharma',
      role: 'Consular Visa Specialist',
    },
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    tags: ['USA', 'Visitor Visa', 'B1/B2', 'Consular Interview', 'DS-160', 'Travel'],
    sections: [
      {
        heading: 'Navigating the B1/B2 Visa Process',
        paragraphs: [
          'The United States B1/B2 non-immigrant visa is designed for temporary visitors traveling for business (B1), tourism, vacation, or medical treatment (B2). While millions of travelers visit the US annually, the application process is rigorous, and consular interviews require thorough preparation.',
          'Under US Immigration law (specifically INA Section 214(b)), every applicant is presumed to have immigrant intent until they convince the consular officer that they possess compelling ties that will compel them to return to their home country.'
        ],
        callout: {
          type: 'info',
          title: 'Section 214(b) Presumption of Immigrant Intent',
          text: 'The burden of proof rests entirely on the applicant. You must demonstrate that your stay in the United States is strictly temporary and that you have strong economic, social, and familial ties to your home country.'
        }
      },
      {
        heading: 'Mandatory Application Documents',
        paragraphs: [
          'Before stepping into the embassy or consulate for your interview, ensure you have the core mandatory paperwork in order:',
        ],
        bulletPoints: [
          'Valid Passport: Must be valid for at least 6 months beyond your intended period of stay in the United States.',
          'Form DS-160 Confirmation Page: Printed with a legible barcode.',
          'Appointment Confirmation Letter: Confirming both biometric (OFC/VAC) and consular interview appointments.',
          'MRV Fee Payment Receipt: Proof of paid visa application fees.',
          'Passport Photographs: In accordance with US Department of State photo specifications (2x2 inches, white background).'
        ]
      },
      {
        heading: 'Proof of Strong Ties and Financial Stability',
        paragraphs: [
          'Consular officers may not always request supporting documents, but you must have them organized and immediately accessible if asked:',
          '1. Employment & Business Evidence: Official employment verification letters specifying designation, salary, tenure, and approved leave of absence; or business registration documents, GST filings, and company financial statements for entrepreneurs.',
          '2. Financial Capability: Recent 6 months of personal bank statements, income tax returns (ITR/Form 16) for the past 2-3 years, and proof of liquid assets.',
          '3. Property & Family Assets: Property valuation deeds, land records, or fixed deposits showing solid financial roots.',
          '4. Travel Purpose: A realistic travel itinerary, hotel reservations, or an invitation letter from family/business associates in the US explaining the nature of your visit.'
        ]
      },
      {
        heading: 'Mastering the Consular Interview',
        paragraphs: [
          'The visa interview usually lasts only 2 to 3 minutes. Clarity, honesty, and confidence are paramount:',
          '• Be concise: Answer specifically what is asked without rambling.',
          '• Align with your DS-160: Inconsistencies between your spoken answers and your submitted form are the leading cause of instant rejections.',
          '• Clearly state your intent: Be ready to explain who you are visiting, where you are staying, and why you must return by a specific date.'
        ]
      },
      {
        heading: 'Let Pro Visa Overseas Prepare You',
        paragraphs: [
          'From precise Form DS-160 filing to custom mock interview sessions, our consular specialists ensure you approach your US visa appointment with total clarity and confidence.'
        ]
      }
    ]
  },
  {
    id: '5',
    slug: 'step-by-step-guide-to-canada-express-entry-pr',
    title: 'Step-by-Step Guide to Canada Express Entry PR',
    category: 'PR',
    excerpt: 'Everything you need to know about navigating the Express Entry system, maximizing your CRS score, and securing Canada PR.',
    date: 'November 14, 2023',
    readTime: '6 min read',
    author: {
      name: 'Simranjit Singh',
      role: 'Senior Immigration Strategist',
    },
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
    tags: ['Canada', 'Permanent Residency', 'Express Entry', 'CRS Score', 'PNP', 'FSWP'],
    sections: [
      {
        heading: 'What is Canada’s Express Entry System?',
        paragraphs: [
          'Express Entry is Immigration, Refugees and Citizenship Canada’s (IRCC) flagship online application management system for skilled economic immigration. It manages candidates across three primary economic immigration programs: the Federal Skilled Worker Program (FSWP), the Canadian Experience Class (CEC), and the Federal Skilled Trades Program (FSTP).',
          'Candidates who enter the Express Entry pool are assigned a score via the Comprehensive Ranking System (CRS). IRCC conducts regular invitation rounds inviting the highest-ranking candidates to apply for permanent residence.'
        ]
      },
      {
        heading: 'Key Steps in the Express Entry Process',
        paragraphs: [
          'Securing permanent residency through Express Entry involves several systematic stages:',
        ],
        bulletPoints: [
          'Step 1 — Educational Credential Assessment (ECA): Get your foreign degrees evaluated by designated bodies such as WES, IQAS, or ICES.',
          'Step 2 — Language Proficiency Test: Take IELTS General or CELPIP for English (or TEF/TCF for French) aiming for CLB 9 or higher.',
          'Step 3 — Profile Creation & EOI: Create an online Express Entry profile and enter the candidate pool.',
          'Step 4 — Receive an Invitation to Apply (ITA): When your CRS score meets or exceeds a draw cutoff, IRCC issues an ITA.',
          'Step 5 — Complete PR Application: You have 60 days from ITA to submit medicals, police clearances, reference letters, and fee payment.',
          'Step 6 — Confirmation of Permanent Residence (COPR): Upon approval, receive your COPR and passport visa stamping.'
        ],
        callout: {
          type: 'tip',
          title: 'Category-Based Selection Draws',
          text: 'IRCC now conducts category-based draws targeting healthcare professionals, STEM careers, trades, transport, agriculture, and strong French-speaking proficiency. Candidates in these categories often receive ITAs at significantly lower CRS scores.'
        }
      },
      {
        heading: 'Maximizing Your CRS Score',
        paragraphs: [
          'If your CRS score is hovering below 480-500, Provincial Nominee Programs (PNP) offer a game-changing 600 bonus points, virtually guaranteeing an ITA in the next draw.',
          'Other high-impact ways to improve your score include maximizing language scores to CLB 9/10, gaining an additional year of skilled work experience, or learning French as a second language.'
        ]
      }
    ]
  },
  {
    id: '6',
    slug: 'living-and-studying-in-new-zealand-complete-guide',
    title: 'Living and Studying in New Zealand: Complete Guide',
    category: 'Country Guides',
    excerpt: 'Discover why New Zealand is an incredible destination for international students and professionals seeking quality of life.',
    date: 'December 05, 2023',
    readTime: '6 min read',
    author: {
      name: 'Harpreet Kaur',
      role: 'Study Abroad Director',
    },
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    tags: ['New Zealand', 'Study in NZ', 'Post Study Work', 'Green List', 'Lifestyle', 'Immigration'],
    sections: [
      {
        heading: 'Why New Zealand?',
        paragraphs: [
          'Known for its breathtaking landscapes, exceptionally safe communities, welcoming culture, and world-class universities, New Zealand ranks among the happiest and most livable countries on Earth.',
          'For ambitious students and skilled workers, New Zealand provides not only globally recognized credentials, but also straightforward pathways to post-study work and long-term settlement through the Green List.'
        ]
      },
      {
        heading: 'World-Class Universities & Practical Learning',
        paragraphs: [
          'All eight universities in New Zealand are ranked within the top 3% worldwide by QS World University Rankings. Leading institutions like the University of Auckland, University of Otago, and Victoria University of Wellington emphasize hands-on research and practical skills.',
          'International students can work up to 20 hours per week during term time and full-time during scheduled holidays, helping offset living costs while gaining valuable local work experience.'
        ]
      },
      {
        heading: 'Post-Study Work Visa (PSWV) & Green List Pathways',
        paragraphs: [
          'Graduates from eligible programs can apply for a Post-Study Work Visa valid for up to three years depending on their qualification level.',
          'New Zealand’s Green List fast-tracks residency for in-demand occupations including engineers, IT professionals, doctors, nurses, and teachers through either the Straight to Residence or Work to Residence pathways.'
        ],
        callout: {
          type: 'info',
          title: 'Family Friendly Work Rights',
          text: 'Partners of international students enrolled in master’s or doctoral degree programs are eligible to apply for an open work visa, allowing them to work for any employer in New Zealand.'
        }
      },
      {
        heading: 'Plan Your Journey with Pro Visa Overseas',
        paragraphs: [
          'From selecting the right university and course aligned with New Zealand’s skill shortage list to preparing your financial documentation and lodging your student visa, Pro Visa Overseas ensures an effortless transition to Kiwi life.'
        ]
      }
    ]
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 2): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  blogPosts.forEach((post) => categories.add(post.category));
  return ['All', ...Array.from(categories)];
}
