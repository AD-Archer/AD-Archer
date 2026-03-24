import { Project } from './types';
import { projects } from './projects';

export const hasProjectSlug = (project: Project): project is Project & { slug: string } =>
  typeof project.slug === 'string' && project.slug.length > 0;

export const getProjectRouteSlugs = (project: Project) => {
  if (!hasProjectSlug(project)) {
    return [];
  }

  return [project.slug, ...(project.retiredSlugs ?? [])];
};

export const getProjectBySlug = (slug: string) =>
  projects.find(
    (project): project is Project & { slug: string } =>
      hasProjectSlug(project) && getProjectRouteSlugs(project).includes(slug)
  );

export const isRetiredProjectSlug = (project: Project, slug: string) =>
  hasProjectSlug(project) && slug !== project.slug && (project.retiredSlugs ?? []).includes(slug);

// Utility functions for project sorting
export const sortProjectsByFeaturedPriority = (projects: Project[]) => {
  return [...projects].sort((a, b) => {
    // First, separate featured from non-featured
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // If both are featured, sort by priority (lower number = higher priority)
    if (a.featured && b.featured) {
      const aPriority = a.featuredPriority ?? 999; // Default to low priority if not set
      const bPriority = b.featuredPriority ?? 999;
      return aPriority - bPriority;
    }

    // If neither are featured, maintain original order (by id)
    return parseInt(a.id) - parseInt(b.id);
  });
};

export const getFeaturedProjects = (projectList: Project[] = projects) => {
  return projectList
    .filter(project => project.featured)
    .sort((a, b) => {
      const aPriority = a.featuredPriority ?? 999;
      const bPriority = b.featuredPriority ?? 999;
      return aPriority - bPriority;
    });
};

export const getNonFeaturedProjects = (projectList: Project[] = projects) => {
  return projectList.filter(project => !project.featured);
};
