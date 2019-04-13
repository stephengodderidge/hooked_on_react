import styled from 'styled-components';
import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types/default-props';

const BaseSprite: FunctionComponent<IDefaultProps> = props => <div {...props} />;

const SimpleSprite = styled(BaseSprite)`
  background-repeat: no-repeat;
  height: 40px;
  width: 40px;
`;

const Cyclops = styled(SimpleSprite)`
  background-image: url('/static/characters/cyclops-sprite-sheet.png');
  background-position: -11px -25px;
`;

const WizardHat = styled(SimpleSprite)`
  background-image: url('/static/items/black-wizard-hat.png');
  background-position: 10px;
`;
const Boots = styled(SimpleSprite)`
  background-image: url('/static/items/brown-boots.png');
  background-position: 10px;
`;
const Glove = styled(SimpleSprite)`
  background-image: url('/static/items/brown-glove.png');
  background-position: 10px;
`;
const Axe = styled(SimpleSprite)`
  background-image: url('/static/items/double-headed-axe.png');
  background-position: 10px;
`;
const ChestPiece = styled(SimpleSprite)`
  background-image: url('/static/items/silver-chest-piece.png');
  background-position: 10px;
`;

export const Sprites = {
  Cyclops,
  WizardHat,
  Boots,
  Glove,
  Axe,
  ChestPiece,
};
