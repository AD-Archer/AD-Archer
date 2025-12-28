'use client';

import { useEffect } from 'react';

export default function PlausibleAnalytics() {
  useEffect(() => {
    // Only initialize on client side
    if (typeof window !== 'undefined') {
      import('@plausible-analytics/tracker').then(({ init }) => {
        init({
          domain: 'antonioarcher.com',
          endpoint: 'https://plausible.adarcher.app/api/event',
          autoCapturePageviews: true,
          hashBasedRouting: false,
          outboundLinks: true,
          fileDownloads: true,
          formSubmissions: true,
          captureOnLocalhost: false,
          logging: true,
          customProperties: {
            content_category: 'portfolio',
          },
          bindToWindow: true,
        });
      });
    }
  }, []);

  return null;
}
