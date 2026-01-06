"use client";

import { useState } from "react";
import Image from "next/image";

export function TrainerPhoto() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative aspect-square overflow-hidden rounded-lg bg-card border border-border flex items-center justify-center">
        <span className="text-muted-foreground">Trainer Photo</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <Image
        src="/images/trainer.jpg"
        alt="Personal trainer at 222 Fit in Carol Stream, IL"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

