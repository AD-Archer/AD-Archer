import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type CompanyLinkProps = {
  name: string;
  url?: string;
  className?: string;
};

export function CompanyLink({ name, url, className }: CompanyLinkProps) {
  if (!url) {
    return <span className={className}>{name}</span>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} website (opens in a new tab)`}
      className={cn(
        'inline-flex items-center gap-1 underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
    >
      {name}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}
