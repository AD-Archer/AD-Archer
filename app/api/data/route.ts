import { NextResponse } from 'next/server';
import {
  enabledProjects,
  skills,
  certifications,
  jobs,
  education,
  getPublicationsWithProjectVideos,
} from '@/lib/data';
import type { Project, Technology } from '@/lib/data';

export async function GET() {
  try {
    const publications = getPublicationsWithProjectVideos();

    // Flatten skills to a single list of unique names
    const skillsFlat = Array.from(
      new Set(
        Object.values(skills).flatMap((arr) => arr.map((s) => s.name))
      )
    );

    // Sanitize projects (remove sensitive/heavy fields)
    const sanitizedProjects = enabledProjects.map((p: Project) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id: _id, image: _image, team: _team, codeSnippets: _codeSnippets, video: _video, changelog: _changelog, milestones: _milestones, gallery: _gallery, technologies, ...rest } = p;

      // Strip images from architecture if present, keep summary/notes
      const architecture = rest.architecture
        ? { summary: rest.architecture.summary, notes: rest.architecture.notes }
        : undefined;

      return {
        ...rest,
        architecture,
        technologies: Array.isArray(technologies)
          ? technologies.map((t: Technology) => t.name)
          : undefined,
      };
    });


    // Calculate age from birthdate
    const birthDate = new Date('2006-09-01');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    const data = {
      skills: skillsFlat,
      publications,
      certifications,
      jobs,
      education,
      projects: sanitizedProjects,
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
