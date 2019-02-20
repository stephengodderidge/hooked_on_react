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

storiesOf('_PATTERNS', module).add(
  'Children as Array',
  withInfo({
    text: docs,
    source: false,
    header: false,
    propTables: [],
    propTablesExclude: [Tile],
    inline: true,
  })(() => rowWithPadding),
);
