import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';

const req = require.context('../src/components', true, /.stories.js$/);

addParameters({
  options: {
    showPanel: false,
    theme: themes.dark,
  }
});

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
