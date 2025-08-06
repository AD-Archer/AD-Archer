import { NextResponse } from 'next/server';
import { 
  projects, 
  skills, 
  certifications, 
  jobs, 
  education,
  
} from '@/lib/data';

export async function GET() {
  try {
    // Return all the data from data.ts file
    // Map skills to only include name
    const cleanSkills = Object.fromEntries(
      Object.entries(skills).map(([category, arr]) => [
        category,
        arr.map(skill => ({ name: skill.name }))
      ])
    );

    // Map skillsList to only include name and category


    // Calculate age from birthdate
    const birthDate = new Date('2006-09-01');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    const data = {
      skills: cleanSkills,
      certifications,
      jobs,
      education,
      projects,
      meta: {
        name: 'Antonio Archer',
        age,
        birthdate: 'September 2006',
        phoneNumber: '+1 (267) 225-6778',
        email: 'antonioarcher.dev@gmail.com',
        location: 'Philadelphia',
        website: 'https://antonioarcher.com',
        github: 'https://github.com/ad-archer',
        linkedin: 'https://www.linkedin.com/in/antonio-archer/',
        resume: 'https://ad-archer.app/resume.pdf',
        getResumeBackendContent: 'https://ad-archer.app/api/resume',
        lastUpdated: new Date().toISOString()
      }
    };

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=86400', // Cache for 1 day
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
