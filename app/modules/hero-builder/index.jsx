import React, { FunctionComponent, useEffect } from 'react';
import {
  SummaryLayout,
  Row,
  Column,
  Body1,
  H2,
  H1,
  Expander,
  MaterialFormElements,
  LayoutBgColor,
  useCalculateTotals,
  useList,
  setTotalForKey,
  recalculateTotals,
  Sprites,
} from 'components';

import styled from 'styled-components';

const HeaderFont = styled(H1)`
  padding: 0px 8px;
`;

const CellFont = styled(H2)`
  padding: 8px 28px;
`;

const TotalsFont = styled(Body1)`
  padding: 4px 8px;
`;

const ListWrapper = props => {
  return (
    <Column
      width="90%"
      childSpacing={8}
      padding={16}
      bgColor={LayoutBgColor.GREY}
      scrollY
      useBorderRadius
    >
      {props.children.map(Child => {
        return (
          <Row
            key={Child.key}
            width="100%"
            bgColor={LayoutBgColor.WHITE}
            useBorderRadius
          >
            {Child}
          </Row>
        );
      })}
    </Column>
  );
};

export const HeroBuilder = props => {
  const calcTotalsFor = {
    armor: equipment => equipment.armor * equipment.level,
    health: equipment => equipment.health * equipment.level,
    damage: equipment => equipment.damage * equipment.level,
    powerLevel: 0,
  };

  const { list, updateList } = useList([]);

  const equippedItems = props.equipment.filter(item => {
    return list.includes(item.name);
  });

  const { totals, dispatch } = useCalculateTotals(equippedItems, calcTotalsFor);

  /**cll in checkbox on change */
  // updateList('string');

  useEffect(() => {
    /**
     * Calculate Power Level
     */
    const powerLevel = totals.armor + totals.health + totals.damage;

    dispatch(setTotalForKey('powerLevel', powerLevel));
  }, [totals.armor, totals.health, totals.damage]);

  const onValueChange = (newItem, clicked) => {
    updateList(newItem);
    dispatch(recalculateTotals(list, calcTotalsFor));
  };

  return (
    <SummaryLayout title="Hero Builder">
      {{
        Left: (
          <>
            <Row width="90%" padding={16}>
              <HeaderFont>Item</HeaderFont>
              <Expander />
              <HeaderFont>Armr</HeaderFont>
              <HeaderFont>Hlth</HeaderFont>
              <HeaderFont>Dmg</HeaderFont>
              <HeaderFont>Lvl</HeaderFont>
            </Row>
            <ListWrapper>
              {props.equipment.map(item => {
                return (
                  <React.Fragment key={item.name}>
                    <MaterialFormElements.Checkbox
                      key={item.level}
                      onChange={onValueChange}
                      value={item.name}
                    />
                    <CellFont>{item.name}</CellFont>
                    <Expander />
                    <CellFont>{item.armor || 0}</CellFont>
                    <CellFont>{item.health || 0}</CellFont>
                    <CellFont>{item.damage || 0}</CellFont>
                    <CellFont>{item.level}</CellFont>
                  </React.Fragment>
                );
              })}
            </ListWrapper>
          </>
        ),
        Right: (
          <>
            <Column width="100%" height="83%" bgColor={LayoutBgColor.BLUE}>
              <Sprites.CharacterLayout>
                {{
                  helmet: list.includes('Wizard Hat') ? <Sprites.WizardHat /> : '',
                  glove: list.includes('Glove') ? <Sprites.Glove /> : '',
                  chest: list.includes('Silver Chest Piece') ? (
                    <Sprites.ChestPiece />
                  ) : (
                    ''
                  ),
                  weapon: list.includes('Axe') ? <Sprites.Axe /> : '',
                  leftFoot: list.includes('Boots') ? <Sprites.Boots /> : '',
                  rightFoot: list.includes('Boots') ? <Sprites.Boots /> : '',
                }}
              </Sprites.CharacterLayout>
            </Column>
            <ListWrapper>
              {[
                { name: 'Health', value: totals.health },
                { name: 'Armor', value: totals.armor },
                { name: 'Damage', value: totals.damage },
                { name: 'Total Power', value: totals.powerLevel },
              ].map(total => (
                <React.Fragment key={total.name}>
                  <TotalsFont>{total.name}</TotalsFont>
                  <Expander />
                  <TotalsFont>{total.value}</TotalsFont>
                </React.Fragment>
              ))}
            </ListWrapper>
          </>
        ),
      }}
    </SummaryLayout>
  );
};
