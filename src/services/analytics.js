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

  // Generic event tracking
  trackEvent: (eventData) => {
    ReactGA.event(eventData);
  },

  // Resume interactions
  trackResumeDownload: () => {
    ReactGA.event({
      category: 'Resume',
      action: 'Download',
      label: 'Resume PDF'
    });
  },

  trackResumeExternalView: () => {
    ReactGA.event({
      category: 'Resume',
      action: 'View External',
      label: 'External Resume View'
    });
  },

  // Navigation tracking
  trackNavigation: (from, to) => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Page Change',
      label: `From: ${from} To: ${to}`
    });
  },

  // Tech stack interactions
  trackTechFilter: (technology) => {
    ReactGA.event({
      category: 'Tech Stack',
      action: 'Filter Applied',
      label: technology
    });
  },

  // Social interactions
  trackSocialClick: (platform) => {
    ReactGA.event({
      category: 'Social',
      action: 'Click',
      label: platform
    });
  },

  // External link clicks
  trackExternalLink: (url, label = 'External Link') => {
    ReactGA.event({
      category: 'External',
      action: 'Click',
      label: label,
      value: url
    });
  },

  // Time on page tracking (call when component unmounts)
  trackTimeOnPage: (page, timeInSeconds) => {
    ReactGA.event({
      category: 'Engagement',
      action: 'Time on Page',
      label: page,
      value: Math.round(timeInSeconds)
    });
  },

  // Scroll depth tracking
  trackScrollDepth: (percentage) => {
    ReactGA.event({
      category: 'Engagement',
      action: 'Scroll Depth',
      label: `${percentage}% scrolled`,
      value: percentage
    });
  },

  // Error tracking
  trackError: (errorMessage, errorSource) => {
    ReactGA.exception({
      description: errorMessage,
      fatal: false,
      extra: errorSource
    });
  },

  // Feature usage
  trackFeatureUse: (feature) => {
    ReactGA.event({
      category: 'Features',
      action: 'Use',
      label: feature
    });
  },

  // Mobile-specific interactions
  trackMobileInteraction: (action, label) => {
    ReactGA.event({
      category: 'Mobile',
      action: action,
      label: label
    });
  }
}; 