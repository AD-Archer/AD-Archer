export type PublicationCategory = 'Self' | 'Mention' | 'Quote' | 'Article';

export type Publication = {
  id: string;
  title: string;
  description: string;
  date: string;
  publisher: string;
  link: string;
  image?: string;
  tags?: string[];
  /** Category of the publication, e.g., Self, Mention, Quote */
  category: PublicationCategory;
};

export const publications: Publication[] = [
  {
    id: '1',
    title: "Launchpad's first grads face a tough job market — and the program's adapting to help them",
    description:
      "Entry-level jobs are harder to get, so the workforce development org is looking for ways to add externships and apprenticeships to boost its next cohort's resumes.",
    date: '2025-11-05',
    publisher: 'Technical.ly',
    link: 'https://technical.ly/workforce/launchpad-first-cohort-tech-job-market/',
    tags: ['Mention', 'Tech Workforce', 'Launchpad'],
    image: 'https://technical.ly/wp-content/uploads/2025/11/Launchpadgraduation-1536x1025.jpg',
    category: 'Mention',
  },
];
