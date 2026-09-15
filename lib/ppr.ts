export interface PPRImage {
  src: string;
  country: string;
  category?: string;
  client?: string;
  status?: string;
  isStamp?: boolean;
  stamped?: boolean;
  region?: 'australia' | 'europe' | 'new-zealand' | 'all';
  type?: 'ppr' | 'visa' | 'stamp';
}

export const PPR_IMAGES: PPRImage[] = [
  {
    src: '/ppr/ppr-1.jpeg',
    country: 'Australia',
    category: 'Visitor Visa (Subclass 600)',
    client: 'Sanjeev',
    status: 'Visa Granted',
    stamped: true,
    region: 'australia',
    type: 'ppr',
  },
  {
    src: '/ppr/ppr-2.jpeg',
    country: 'Slovakia',
    category: 'National Visa Type D (Schengen)',
    client: 'Mohit Ramniwas',
    status: 'Visa Stamp Issued',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  {
    src: '/ppr/ppr-3.jpeg',
    country: 'Malta',
    category: 'Tourist Visa Type C (Schengen)',
    client: 'Manjot Singh',
    status: 'Visa Stamp Issued',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  {
    src: '/ppr/ppr-4.jpeg',
    country: 'Slovakia',
    category: 'National Visa Type D (Schengen)',
    client: 'Jagdip Singh',
    status: 'Visa Stamp Issued',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  {
    src: '/ppr/ppr-5.jpeg',
    country: 'Greece',
    category: 'Work & Residence Visa (Type D)',
    client: 'Pankaj Bhatti',
    status: 'Visa Granted & Travel',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  {
    src: '/ppr/ppr-6.jpeg',
    country: 'New Zealand',
    category: 'Passport Entry Clearance Stamp',
    client: 'Client Entry',
    status: 'Entry Cleared',
    isStamp: true,
    stamped: true,
    region: 'new-zealand',
    type: 'stamp',
  },
  {
    src: '/ppr/ppr-7.jpeg',
    country: 'Europe (Schengen)',
    category: 'International Flight Departure',
    client: 'Manjot Singh',
    status: 'Departed New Delhi',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  {
    src: '/ppr/ppr-8.jpeg',
    country: 'Australia',
    category: 'Transit Visa (Subclass 771)',
    client: 'Harsh Saini',
    status: 'Granted & Sydney Flight',
    stamped: true,
    region: 'australia',
    type: 'visa',
  },
  {
    src: '/ppr/ppr-9.jpeg',
    country: 'Australia',
    category: 'Skill Shortage Visa (Subclass 482)',
    client: 'Waleed Muhammad',
    status: 'Application Lodged',
    stamped: true,
    region: 'australia',
    type: 'ppr',
  },
  {
    src: '/ppr/ppr-10.jpeg',
    country: 'Australia',
    category: 'Visitor Visa (Subclass 600)',
    client: 'Luxmi Devi',
    status: 'Visa Granted',
    stamped: true,
    region: 'australia',
    type: 'visa',
  },
];
