import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { LayoutElements } from 'components/atoms';
import { greys } from 'modules/config/colors';
import React from 'react';
import styled from 'styled-components';
import docs from './docs.mkd';

const Tile = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${props => props.color};
`;

const elements = Object.keys(greys).map(grey => (
  <Tile color={greys[grey]} key={grey} />
));

const rowWithPadding = (
  <LayoutElements.RowWithPadding>{elements}</LayoutElements.RowWithPadding>
);

storiesOf('_PATTERNS', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: docs,
      source: false,
      header: false,
      propTablesExclude: [Tile],
      inline: true,
    },
  })
  .add('2 - Children as Array', () => rowWithPadding);
