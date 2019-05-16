import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ClipTransition } from 'react-transition-components';
import ListItem from '../../../story-components/ListItem';
import withLazyRender from '..';


const VeryTallDiv = ({ style }) => (
  <div
    style={{
      height: '105vh',
      background: 'white',
      marginBottom: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    <h1>a v tall div</h1>
  </div>
);

const AnimatedComponent = () => (
  <ClipTransition
    shape="circle"
    duration={900}
    delay={600}
  >
    <ListItem />
  </ClipTransition>
);

const LazyRenderedAnimatedComponent = withLazyRender(AnimatedComponent);

// lazy loaded component bundle
const LazyLoadedGalaxy = React.lazy(() => import('../../../story-components/Galaxy'));

// lazy rendered component
const LazyLoadedLazyRenderedGalaxy = withLazyRender(LazyLoadedGalaxy, 16);

storiesOf('withLazyRender', module)
  .add('Animate when in view', () => (
    <div>
      <VeryTallDiv />
      <LazyRenderedAnimatedComponent />
    </div>
  ))
  .add('Load component bundle when in view', () => (
    <div>
      <VeryTallDiv />
      <React.Suspense fallback={<div />}>
        <LazyLoadedLazyRenderedGalaxy />
      </React.Suspense>
    </div>
  ))
