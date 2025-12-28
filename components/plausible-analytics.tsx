'use client';

import { useEffect } from 'react';

export default function PlausibleAnalytics() {
  useEffect(() => {
    // Only initialize on client side
    if (typeof window !== 'undefined') {
      import('@plausible-analytics/tracker').then(({ init }) => {
        init({
          domain: 'plausible.adarcher.app',
          autoCapturePageviews: true,
          outboundLinks: true,
          fileDownloads: true,
        });
      });
    }
  }, []);

  return null;
}
