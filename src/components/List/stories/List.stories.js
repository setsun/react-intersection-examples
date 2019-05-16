import * as React from 'react';
import { useState } from 'react'

import { storiesOf } from '@storybook/react';

import ListItem from '../../../story-components/ListItem';
import List from '..';

const Loading = () => <div style={{ color: 'white', textAlign: 'center', padding: '16px' }}>Loading...</div>

const InfiniteList = () => {
  const [itemCount, setItemCount] = useState(5);

  return (
    <List onIntersect={() => setItemCount(itemCount + 5)}>
      {[...new Array(itemCount)].map((_, i) => (
        <ListItem key={i} />
      ))}
    </List>
  );
}

const PaginatedList = () => {
  const [loading, setLoading] = useState(false);
  const [itemCount, setItemCount] = useState(5);
  const fetchNext = () => {
    setLoading(true);

    setTimeout(() => {
      setItemCount(itemCount + 5);
      setLoading(false);
    }, 1000);
  }

  return (
    <List onIntersect={() => fetchNext()}>
      {[...new Array(itemCount)].map((_, i) => (
        <ListItem key={i} />
      ))}
      {loading && <Loading />}
    </List>
  );
}

storiesOf('List', module)
  .add('Infinite scrolling', () => (
    <InfiniteList />
  ))
  .add('Infinite scolling w/ pagination', () => (
    <PaginatedList />
  ))
