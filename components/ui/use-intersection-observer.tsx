"use client";
import { useState, useRef, useEffect } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = (
  options?: UseIntersectionObserverOptions
): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);
  const hasBeenVisible = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (entry.isIntersecting) {
        // Element is in viewport
        if (!hasBeenVisible.current || !isScrollingDown) {
          // First time visible OR scrolling up and re-entering
          setIsVisible(true);
          hasBeenVisible.current = true;
        }
      } else {
        // Element is out of viewport
        if (hasBeenVisible.current && !isScrollingDown) {
          // Scrolling up and leaving viewport - reset for re-animation
          setIsVisible(false);
          hasBeenVisible.current = false;
        }
        // If scrolling down and leaving viewport, keep visible (do nothing)
      }

      lastScrollY.current = currentScrollY;
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [targetRef, isVisible];
};

export default useIntersectionObserver;
