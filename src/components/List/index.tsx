import * as React from 'react';
import { useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const List = ({
  children,
  onIntersect,
}) => {
  const [intersectRef, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    isIntersecting && onIntersect && onIntersect();
  });

  return (
    <div>
      {children}
      {/** watcher element, to see we've reached the bottom of the list */}
      <div ref={intersectRef} />
    </div>
  );
}

export default List;
