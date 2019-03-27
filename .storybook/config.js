import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components';

// material ui typeface
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.css';

const ThemeDecorator = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
addDecorator(ThemeDecorator);
addParameters({
  options: { showPanel: false, sortStoriesByKind: true },
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
