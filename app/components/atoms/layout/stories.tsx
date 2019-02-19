import { storiesOf } from '@storybook/react';
import { greys } from 'modules/config/colors';
import React from 'react';
import styled from 'styled-components';
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
  <LayoutElements.RowWithPadding childPadding={4}>
    {elements}
  </LayoutElements.RowWithPadding>
);
const column = <LayoutElements.Column>{elements}</LayoutElements.Column>;

storiesOf('Layout Elements', module)
  .add('Row', () => row)
  .add('Row With Padding', () => rowWithPadding)
  .add('Column', () => column);
