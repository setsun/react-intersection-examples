import * as React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const withLazyRender = (Component, threshold?) => {
  const LazyRenderComponent = (props) => {
    const [intersectRef, isIntersecting] = useIntersectionObserver();

    if (isIntersecting) {
      return <Component {...props} />
    }

    return <div ref={intersectRef} style={{ height: '4px' }}/>;
  }

  return LazyRenderComponent;
}

export default withLazyRender;
