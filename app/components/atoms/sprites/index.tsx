import styled from 'styled-components';
import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types/default-props';

import { Row } from 'components';

const BaseSprite: FunctionComponent<IDefaultProps> = props => <div {...props} />;

// export const SummaryLayout: FunctionComponent<ISummaryLayoutProps> = props => {
//   const { Left, Right } = props.children;
//   return (
//     <Row height="100vh">
//       <Column width="70vw" height="100vh">
//         <Row padding={{ top: 48, right: 16 }}>
//           <Display1>{props.title}</Display1>
//         </Row>
//         <Column width="100%">{Left}</Column>
//       </Column>
//       <Column width="30vw" height="100vh">
//         {Right}
//       </Column>
//     </Row>
//   );
// };

const BaseEquipmentSlot = styled.div`
  position: absolute;
  width: 50px;
`;

const HelmetDiv = styled(BaseEquipmentSlot)`
  top: 10px;
  left: 67px;
`;

const GloveDiv = styled(BaseEquipmentSlot)`
  top: 93px;
  left: 34px;
`;

const WeaponDiv = styled(BaseEquipmentSlot)`
  top: 76px;
  left: 100px;
`;

const ChestDiv = styled(BaseEquipmentSlot)`
  top: 72px;
  left: 63px;
`;

const LeftFootDiv = styled(BaseEquipmentSlot)`
  top: 125px;
  left: 41px;
`;

const RightFootDiv = styled(BaseEquipmentSlot)`
  top: 125px;
  left: 76px;
  transform: scaleX(-1);
`;

const CharacterLayout: FunctionComponent<IDefaultProps> = props => {
  const { helmet, glove, chest, weapon, leftFoot, rightFoot } = props.children;
  return (
    <Cyclops>
      <HelmetDiv>{helmet}</HelmetDiv>
      <GloveDiv>{glove}</GloveDiv>
      <ChestDiv>{chest}</ChestDiv>
      <WeaponDiv>{weapon}</WeaponDiv>
      <LeftFootDiv>{leftFoot}</LeftFootDiv>
      <RightFootDiv>{rightFoot}</RightFootDiv>
    </Cyclops>
  );
};

const SimpleCharacterSprite = styled(BaseSprite)`
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
`;

const SimpleMediumSprite = styled(BaseSprite)`
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
`;

const SimpleSmallSprite = styled(BaseSprite)`
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
`;

const Cyclops = styled<{ children: JSX.Element[] }>(SimpleCharacterSprite)`
  position: relative;
  background-image: url('/static/characters/cyclops-sprite-sheet.png');
  background-position: -11px -40px;
  background-size: 3000px;
  margin: auto;
`;

// should be 80 x 80, with size being 40
const WizardHat = styled(SimpleMediumSprite)`
  background-image: url('/static/items/black-wizard-hat.png');
  background-position: center;
  background-size: 40px;
`;
const Boots = styled(SimpleSmallSprite)`
  background-image: url('/static/items/brown-boots.png');
  background-position: center;
  background-size: 25px;
`;
const Glove = styled(SimpleSmallSprite)`
  background-image: url('/static/items/brown-glove.png');
  background-position: center;
  background-size: 25px;
  transform: rotate(-30deg);
`;
const Axe = styled(SimpleMediumSprite)`
  background-image: url('/static/items/double-headed-axe.png');
  background-position: center;
  /* right handed axe*/
  transform: scaleX(-1);
  background-size: 40px;
`;

const ChestPiece = styled(SimpleMediumSprite)`
  background-image: url('/static/items/silver-chest-piece.png');
  background-position: center;
  background-size: 40px;
`;

export const Sprites = {
  Cyclops,
  WizardHat,
  Boots,
  Glove,
  Axe,
  ChestPiece,
  CharacterLayout,
};
