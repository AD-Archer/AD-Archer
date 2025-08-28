'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useCallback, useState } from 'react';

type Props = {
  url: string;
  title: string;
  summary?: string;
  className?: string;
};

export default function ShareButtons({ url, title, summary, className }: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      // no-op
    }
  }, [url]);

  const onNativeShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ url });
      } catch (_) {
        // user cancelled
      }
    } else {
      onCopy();
    }
  }, [onCopy, url]);

  return (
    <div className={className} aria-label="Share this project">
      <Button variant="outline" size="sm" onClick={onNativeShare} aria-live="polite">
        <Share2 className="h-4 w-4 mr-1" /> {copied ? 'Copied' : 'Share'}
      </Button>
    </div>
  );
}
