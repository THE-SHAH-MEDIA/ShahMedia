"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite]",
        className
      )}
    />
  );
}

// Specific skeleton components for different sections
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-4" />
      <Skeleton className="h-10 w-1/3" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <Skeleton className="h-8 w-1/4 mx-auto mb-4" />
      <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-5/6 mx-auto mb-8" />
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-12 w-40" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  );
}

export function PricingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl p-8 border border-gray-200">
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-4 w-3/4 mb-4" />
          <Skeleton className="h-12 w-1/3 mb-6" />
          <div className="space-y-3 mb-6">
            {[1, 2, 3, 4].map((j) => (
              <Skeleton key={j} className="h-4 w-full" />
            ))}
          </div>
          <Skeleton className="h-12 w-full" />
        </div>
      ))}
    </div>
  );
}
