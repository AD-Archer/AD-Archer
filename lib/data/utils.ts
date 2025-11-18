import { Project } from './types';
import { projects } from './projects';

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
