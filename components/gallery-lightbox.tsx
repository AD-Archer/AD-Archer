"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
};

interface GalleryLightboxProps {
  images: GalleryImage[];
  title?: string;
}

export default function GalleryLightbox({ images, title }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const hasImages = images && images.length > 0;

  const onOpen = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  if (!hasImages) return null;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <figure
            key={i}
            className="rounded-md overflow-hidden border border-border/50 cursor-zoom-in"
            onClick={() => onOpen(i)}
          >
            <div className="relative bg-slate-100 dark:bg-slate-800">
              <Image
                src={img.src}
                alt={img.alt || title || `Image ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {img.caption && (
              <figcaption className="text-xs text-muted-foreground p-2">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[95vw] md:w-[85vw] lg:w-[70vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt || title || `Image ${index + 1}`}
              fill
              className="object-contain select-none"
              sizes="100vw"
              priority
            />

            {/* Controls */}
            {images.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-black/40 border border-border/50 px-3 py-2 text-sm hover:bg-white shadow"
                >
                  ‹
                </button>
                <button
                  aria-label="Next image"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-black/40 border border-border/50 px-3 py-2 text-sm hover:bg-white shadow"
                >
                  ›
                </button>
              </>
            )}

            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 rounded-full bg-white/80 dark:bg-black/40 border border-border/50 px-3 py-1 text-sm hover:bg-white shadow"
            >
              ✕
            </button>

            {(images[index].caption || title) && (
              <div className="absolute left-0 right-0 bottom-0 p-3 text-xs text-white/90 bg-gradient-to-t from-black/60 to-transparent">
                <div className="font-medium">
                  {images[index].caption || title}
                </div>
                <div className="text-white/70">{index + 1} / {images.length}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
