import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (
  threshold: number | number[] = 0,
  root?: React.RefObject<HTMLElement>,
  rootMargin: string = '0px',
) => {
  const target = useRef<HTMLElement>();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting !== isIntersecting) && setIntersecting(entry.isIntersecting),
      {
        root: root && root.current,
        threshold,
        rootMargin,
      }
    );

    target.current && observer.observe(target.current)

    return () => target.current && observer.unobserve(target.current);
  }, [isIntersecting, threshold, root, rootMargin]);

  return [target, isIntersecting];
};

export default useIntersectionObserver;
