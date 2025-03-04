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
  },

  // Contact form
  trackContactFormOpen: () => {
    ReactGA.event({
      category: 'Contact',
      action: 'Open Contact Form',
      label: 'Contact Form'
    });
  },

  trackContactFormSubmit: () => {
    ReactGA.event({
      category: 'Contact',
      action: 'Submit Contact Form',
      label: 'Contact Form'
    });
  },

  // Add this method to your existing Analytics object
  trackEvent: (eventData) => {
    ReactGA.event(eventData);
  }
}; 