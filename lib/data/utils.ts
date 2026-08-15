import { Project, Publication } from './types';
import { enabledProjects } from './projects';
import { publications } from './publications';

export const hasProjectSlug = (project: Project): project is Project & { slug: string } =>
  typeof project.slug === 'string' && project.slug.length > 0;

export const getProjectRouteSlugs = (project: Project) => {
  if (!hasProjectSlug(project)) {
    return [];
  }

  return [project.slug, ...(project.retiredSlugs ?? [])];
};

export const getProjectBySlug = (slug: string) =>
  enabledProjects.find(
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

export const getFeaturedProjects = (projectList: Project[] = enabledProjects) => {
  return projectList
    .filter(project => project.disabled !== true && project.featured)
    .sort((a, b) => {
      const aPriority = a.featuredPriority ?? 999;
      const bPriority = b.featuredPriority ?? 999;
      return aPriority - bPriority;
    });
};

export const getNonFeaturedProjects = (projectList: Project[] = enabledProjects) => {
  return projectList.filter(project => project.disabled !== true && !project.featured);
};

export const getPublicationsWithProjectVideos = (): Publication[] => {
  const projectVideos: Publication[] = enabledProjects
    .filter(
      (project): project is Project & { video: NonNullable<Project['video']> } =>
        !!project.video && project.showVideoInPublications !== false
    )
    .map(project => ({
      id: `project-video-${project.id}`,
      title: project.video.title || `${project.title} Demo`,
      description: project.description,
      publisher: project.title,
      link: project.video.url,
      image: project.image,
      category: 'Video',
      additionalCategories: ['Self'],
      tags: ['Video', 'Project Demo', ...(project.tags ?? [])],
    }));

  return [...publications, ...projectVideos].sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : Number.NEGATIVE_INFINITY;
    const bTime = b.date ? new Date(b.date).getTime() : Number.NEGATIVE_INFINITY;
    return bTime - aTime;
  });
};
