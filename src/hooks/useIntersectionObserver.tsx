import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = () => {
  const target = useRef<HTMLElement>();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== isIntersecting) {
          setIntersecting(entry.isIntersecting)
        }
      },
    );

    if (target.current) {
      observer.observe(target.current)
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    }
  }, [target.current, isIntersecting]);

  return [target, isIntersecting];
};

export default useIntersectionObserver;
