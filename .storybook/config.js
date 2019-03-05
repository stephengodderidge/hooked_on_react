import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withOptions } from '@storybook/addon-options';
import { theme } from 'components/atoms';

Object.values = obj => Object.keys(obj).map(key => obj[key]);

const ThemeDecorator = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
addDecorator(ThemeDecorator);

withOptions({
  sortStoriesByKind: true,
});

const req = require.context('../app', true, /stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(path => {
    try {
      return req(path);
    } catch (exception) {
      console.error(`Error when rendering story: ${path}`, exception);
    }
  });
}

configure(loadStories, module);
