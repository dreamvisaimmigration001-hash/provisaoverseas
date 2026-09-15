'use server';

import fs from 'fs';
import path from 'path';

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

const PPR_METADATA: Record<string, { country: string; category: string; client?: string; status?: string; isStamp?: boolean; stamped?: boolean; region?: 'australia' | 'europe' | 'new-zealand'; type?: 'ppr' | 'visa' | 'stamp' }> = {
  'ppr-1.jpeg': {
    country: 'Australia',
    category: 'Visitor Visa (Subclass 600)',
    client: 'Sanjeev',
    status: 'Visa Granted',
    stamped: true,
    region: 'australia',
    type: 'ppr',
  },
  'ppr-2.jpeg': {
    country: 'Slovakia',
    category: 'National Visa Type D (Schengen)',
    client: 'Mohit Ramniwas',
    status: 'Visa Stamp Issued',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  'ppr-3.jpeg': {
    country: 'Malta',
    category: 'Tourist Visa Type C (Schengen)',
    client: 'Manjot Singh',
    status: 'Visa Stamp Issued',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  'ppr-4.jpeg': {
    country: 'Slovakia',
    category: 'National Visa Type D (Schengen)',
    client: 'Jagdip Singh',
    status: 'Visa Stamp Issued',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  'ppr-5.jpeg': {
    country: 'Greece',
    category: 'Work & Residence Visa (Type D)',
    client: 'Pankaj Bhatti',
    status: 'Visa Granted & Travel',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  'ppr-6.jpeg': {
    country: 'New Zealand',
    category: 'Passport Entry Clearance Stamp',
    client: 'Client Entry',
    status: 'Entry Cleared',
    isStamp: true,
    stamped: true,
    region: 'new-zealand',
    type: 'stamp',
  },
  'ppr-7.jpeg': {
    country: 'Europe (Schengen)',
    category: 'International Flight Departure',
    client: 'Manjot Singh',
    status: 'Departed New Delhi',
    isStamp: true,
    stamped: true,
    region: 'europe',
    type: 'stamp',
  },
  'ppr-8.jpeg': {
    country: 'Australia',
    category: 'Transit Visa (Subclass 771)',
    client: 'Harsh Saini',
    status: 'Granted & Sydney Flight',
    stamped: true,
    region: 'australia',
    type: 'visa',
  },
  'ppr-9.jpeg': {
    country: 'Australia',
    category: 'Skill Shortage Visa (Subclass 482)',
    client: 'Waleed Muhammad',
    status: 'Application Lodged',
    stamped: true,
    region: 'australia',
    type: 'ppr',
  },
  'ppr-10.jpeg': {
    country: 'Australia',
    category: 'Visitor Visa (Subclass 600)',
    client: 'Luxmi Devi',
    status: 'Visa Granted',
    stamped: true,
    region: 'australia',
    type: 'visa',
  },
};

export async function getPPRImages(): Promise<PPRImage[]> {
  const pprDir = path.join(process.cwd(), 'public/ppr');
  const stampsDir = path.join(process.cwd(), 'public/stamps');
  let pprImages: PPRImage[] = [];

  const targetDirs = [
    { dirPath: pprDir, webPathPrefix: '/ppr', isDefaultStamp: false },
    { dirPath: stampsDir, webPathPrefix: '/stamps', isDefaultStamp: true },
  ];

  try {
    const allFileDetails: { name: string; mtime: number; webPath: string; isDirStamp: boolean }[] = [];

    for (const { dirPath, webPathPrefix, isDefaultStamp } of targetDirs) {
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        for (const file of files) {
          const ext = path.extname(file).toLowerCase();
          if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp') {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);
            allFileDetails.push({
              name: file,
              mtime: stat.mtimeMs,
              webPath: `${webPathPrefix}/${encodeURIComponent(file)}`,
              isDirStamp: isDefaultStamp,
            });
          }
        }
      }
    }

    // Sort numerically if files are formatted like ppr-1, ppr-2, etc., else by mtime
    allFileDetails.sort((a, b) => {
      const numA = parseInt(a.name.match(/\d+/)?.[0] || '0', 10);
      const numB = parseInt(b.name.match(/\d+/)?.[0] || '0', 10);
      if (numA && numB) return numA - numB;
      return b.mtime - a.mtime;
    });

    pprImages = allFileDetails.map(f => {
      const meta = PPR_METADATA[f.name.toLowerCase()] || PPR_METADATA[f.name];
      if (meta) {
        return {
          src: f.webPath,
          country: meta.country,
          category: meta.category,
          client: meta.client,
          status: meta.status,
          stamped: meta.stamped ?? true,
          region: meta.region,
          isStamp: meta.isStamp ?? f.isDirStamp,
          type: meta.type ?? (f.isDirStamp ? 'stamp' : 'visa'),
        };
      }

      let country = 'Visa Granted';
      const lowerName = f.name.toLowerCase();
      const isStamp = f.isDirStamp || lowerName.includes('stamp');
      let region: 'australia' | 'europe' | 'new-zealand' | undefined = undefined;

      if (lowerName.includes('canada')) {
        country = 'Canada';
      } else if (lowerName.includes('australia') || lowerName.includes('vevo')) {
        country = 'Australia';
        region = 'australia';
      } else if (lowerName.includes('uk') || lowerName.includes('united kingdom')) {
        country = 'United Kingdom';
        region = 'europe';
      } else if (lowerName.includes('usa') || lowerName.includes('united states')) {
        country = 'United States';
      } else if (lowerName.includes('germany') || lowerName.includes('europe') || lowerName.includes('schengen')) {
        country = 'Europe';
        region = 'europe';
      } else if (lowerName.includes('new zealand') || lowerName.includes('nz')) {
        country = 'New Zealand';
        region = 'new-zealand';
      }

      return {
        src: f.webPath,
        country,
        category: isStamp ? 'Passport Visa Stamp' : 'Visa Approval',
        status: isStamp ? 'Stamp Verified' : 'Granted',
        isStamp,
        stamped: true,
        region,
        type: isStamp ? 'stamp' : 'visa',
      };
    });
  } catch (error) {
    console.error('Failed to read PPR and Stamp directories:', error);
  }

  return pprImages;
}
