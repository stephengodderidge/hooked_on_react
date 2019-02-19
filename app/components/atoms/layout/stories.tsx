import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { greys } from 'modules/config/colors';
import React from 'react';
import styled from 'styled-components';
import rowDocs from './docs/row-docs.mkd';
import rowWithPaddingDocs from './docs/row-with-padding-docs.mkd';
import { LayoutElements } from './elements';

const Tile = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${props => props.color};
`;

const elements = Object.keys(greys).map(grey => (
  <Tile color={greys[grey]} key={grey} />
));

const row = <LayoutElements.Row>{elements}</LayoutElements.Row>;
const rowWithPadding = (
  <LayoutElements.RowWithPadding>{elements}</LayoutElements.RowWithPadding>
);
const column = <LayoutElements.Column>{elements}</LayoutElements.Column>;

storiesOf('Layout Elements', module)
  .add(
    'Row',
    withInfo({
      text: rowDocs,
      source: false,
      header: false,
      propTables: [],
      propTablesExclude: [Tile],
      inline: true,
    })(() => row),
  )
  .add(
    'Row With Padding',
    withInfo({
      text: rowWithPaddingDocs,
      source: false,
      header: false,
      propTables: [],
      propTablesExclude: [Tile],
      inline: true,
    })(() => rowWithPadding),
  )
  .add('Column', () => column);
