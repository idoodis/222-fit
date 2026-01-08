"use client";

import { useState } from "react";
import Image from "next/image";

interface ResultsGalleryProps {
  images: string[];
}

export function ResultsGallery({ images }: ResultsGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((imagePath, i) => (
        <ResultImage
          key={i}
          src={imagePath}
          alt={`Client transformation result from 222 Fit personal training in Carol Stream, IL - Before and after ${i + 1}`}
          index={i}
        />
      ))}
    </div>
  );
}

function ResultImage({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative aspect-square overflow-hidden rounded-lg bg-card border border-border">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          <span>Result Image {index + 1}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-card border border-border">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setHasError(true)}
        unoptimized
      />
    </div>
  );
}


