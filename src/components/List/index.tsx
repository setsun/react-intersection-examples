import * as React from 'react';
import { useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

type Props = {
  children: React.ReactNode;
  onIntersect?: Function;
}

const List = ({
  children,
  onIntersect,
}: Props) => {
  const [intersectRef, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    isIntersecting && onIntersect && onIntersect();
  });

  return (
    <div>
      {children}
      {/** watcher element, to see we've reached the bottom of the list */}
      <div ref={intersectRef} data-test-id="watcher-div" />
    </div>
  );
}

export default List;
