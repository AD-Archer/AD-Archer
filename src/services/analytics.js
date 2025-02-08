import ReactGA from 'react-ga';

// Initialize GA4 with environment variable
ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

// Custom events
export const Analytics = {
  // Page views
  trackPageView: (page) => {
    ReactGA.pageview(page);
  },

  // Job history views
  trackJobView: (jobTitle, company) => {
    ReactGA.event({
      category: 'Job History',
      action: 'View Job Details',
      label: `${jobTitle} at ${company}`
    });
  },

  // Project preview
  trackProjectPreview: (projectTitle) => {
    ReactGA.event({
      category: 'Projects',
      action: 'Preview Project',
      label: projectTitle
    });
  },

  // Site entry
  trackSiteEntry: () => {
    ReactGA.event({
      category: 'User',
      action: 'Site Entry',
      label: 'Initial Visit'
    });
  }
}; 