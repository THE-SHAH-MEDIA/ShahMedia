"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [element, threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

export function useStaggeredAnimation(count: number, delay: number = 100) {
  const refs = useRef<(HTMLElement | null)[]>(Array(count).fill(null));
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const observers = refs.current.map((element: HTMLElement | null, index: number) => {
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * delay);
            observer.unobserve(element);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer: IntersectionObserver | null) => observer?.disconnect());
    };
  }, [count, delay]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  return { setRef, visibleItems };
}
