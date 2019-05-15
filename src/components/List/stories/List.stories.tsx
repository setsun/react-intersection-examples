import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, radios } from '@storybook/addon-knobs';

import List from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Expand Spring', module)
  .add('Animate height', () => (
    <List>
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
      <PlaceKitten />
    </List>
  ));
