'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { ExternalLink, Monitor, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface ProjectDemoDialogProps {
  url: string;
  title: string;
}

export default function ProjectDemoDialog({ url, title }: ProjectDemoDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button size="sm" variant="outline" className="shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-0 z-50 bg-black">
            <Dialog.Title className="sr-only">{title} live demo</Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-white"
                aria-label="Close live demo"
              >
                <X className="h-4 w-4" />
                Close
              </button>
            </Dialog.Close>
            <iframe
              title={`${title} live demo`}
              src={open ? url : undefined}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Button asChild variant="outline" size="sm" className="shadow-md hover:shadow-lg w-full sm:w-auto">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Site
        </Link>
      </Button>
    </>
  );
}
