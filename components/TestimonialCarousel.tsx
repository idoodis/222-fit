"use client";

import { useState, useEffect } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  content: string;
  rating: number;
  role?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotateInterval?: number; // in milliseconds
}

export function TestimonialCarousel({
  testimonials,
  autoRotate = true,
  rotateInterval = 5000, // 5 seconds default
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate functionality
  useEffect(() => {
    if (!autoRotate || isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, rotateInterval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return null;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="min-w-full w-full flex-shrink-0 px-2"
            >
              <TestimonialCard
                name={testimonial.name}
                content={testimonial.content}
                rating={testimonial.rating}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary"
            onClick={goToPrevious}
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary"
            onClick={goToNext}
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

