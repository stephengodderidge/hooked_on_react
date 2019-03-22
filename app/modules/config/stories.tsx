import { storiesOf } from '@storybook/react';
import { Column, H2, Row } from 'components';
import { colors, TColorNames } from 'modules/config/colors';
import React from 'react';
import styled from 'styled-components';

const TileRow = styled(Row)`
  padding: 4px;
`;

const ColorHeading = styled(H2)`
  margin: 4px;
`;

/** Array of Colors to use in stories with Tiles */
export const tileColors: TColorNames[] = Object.keys(colors) as TColorNames[];

const ColoredTile = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 3px;
  background-color: ${props => props.color};
`;
const getColoredTile = (color: TColorNames) => <ColoredTile color={colors[color]} />;
const SmallTiles = tileColors.map(color => (
  <TileRow key={color}>
    {getColoredTile(color)}
    <ColorHeading>{color}</ColorHeading>
  </TileRow>
));
const story = <Column>{SmallTiles}</Column>;

storiesOf('Colors', module).add('All', () => story);
