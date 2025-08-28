"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  const hasImages = images && images.length > 0;

  useEffect(() => {
    setMounted(true);
  }, []);

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
      e.preventDefault();
      e.stopPropagation();
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    
    // Store original body styles
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const originalHeight = document.body.style.height;
    
    // Lock the body completely
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.top = "0";
    document.body.style.left = "0";
    
    window.addEventListener("keydown", onKey, true);
    
    return () => {
      window.removeEventListener("keydown", onKey, true);
      // Restore original body styles
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      document.body.style.height = originalHeight;
      document.body.style.top = "";
      document.body.style.left = "";
    };
  }, [open, prev, next]);

  if (!hasImages) return null;

  const LightboxModal = () => (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="relative w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 999999,
        }}
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{
            maxWidth: '95vw',
            maxHeight: '95vh',
          }}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt || title || `Image ${index + 1}`}
            fill
            className="object-contain select-none"
            sizes="95vw"
            priority
          />
        </div>

        {/* Controls */}
        {images.length > 1 && (
          <>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/95 dark:bg-black/80 border-2 border-white/20 dark:border-black/40 px-5 py-4 text-xl hover:bg-white dark:hover:bg-black/90 shadow-2xl transition-all hover:scale-110"
              style={{ zIndex: 999999 }}
            >
              ‹
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/95 dark:bg-black/80 border-2 border-white/20 dark:border-black/40 px-5 py-4 text-xl hover:bg-white dark:hover:bg-black/90 shadow-2xl transition-all hover:scale-110"
              style={{ zIndex: 999999 }}
            >
              ›
            </button>
          </>
        )}

        <button
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="absolute top-6 right-6 rounded-full bg-white/95 dark:bg-black/80 border-2 border-white/20 dark:border-black/40 px-5 py-3 text-xl hover:bg-white dark:hover:bg-black/90 shadow-2xl transition-all hover:scale-110"
          style={{ zIndex: 999999 }}
        >
          ✕
        </button>

        {/* Caption */}
        {(images[index].caption || title) && (
          <div 
            className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
            style={{ zIndex: 999999 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-white text-xl font-semibold mb-3 drop-shadow-2xl">
                {images[index].caption || title}
              </div>
              <div className="text-white/90 text-base drop-shadow-xl">
                {index + 1} of {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <figure
            key={i}
            className="group rounded-lg overflow-hidden border border-border/50 cursor-zoom-in shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            onClick={() => onOpen(i)}
          >
            <div className="relative bg-slate-100 dark:bg-slate-800 aspect-video overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt || title || `Image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 dark:bg-black/80 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            {img.caption && (
              <figcaption className="text-sm text-muted-foreground p-3 bg-muted/30">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Portal the lightbox to document.body to escape all containers */}
      {open && mounted && createPortal(<LightboxModal />, document.body)}
    </div>
  );
}
