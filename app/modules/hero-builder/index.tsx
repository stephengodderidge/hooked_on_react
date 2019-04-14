import React, { FunctionComponent, useEffect } from 'react';
import { IDefaultProps } from 'types';
import {
  SummaryLayout,
  Row,
  Column,
  Body1,
  H2,
  H1,
  Expander,
  LayoutBgColor,
  useCalculateTotals,
  setTotalForKey,
  Sprites,
} from 'components';

import styled from 'styled-components';

const CellFont = styled(H2)`
  padding: 8px 16px;
`;

const TotalsFont = styled(Body1)`
  padding: 4px 8px;
`;

interface ICharacterEquipment {
  name: string;
  health?: number;
  armor?: number;
  damage?: number;
  level: number;
}

interface IListWrapperProps extends IDefaultProps {
  children: JSX.Element[];
}

const ListWrapper: FunctionComponent<IListWrapperProps> = props => {
  return (
    <Column
      width="90%"
      childSpacing={8}
      padding={16}
      bgColor={LayoutBgColor.GREY}
      scrollY
    >
      {props.children.map(Child => {
        return (
          <Row key={Child.key} width="100%" bgColor={LayoutBgColor.WHITE}>
            {Child}
          </Row>
        );
      })}
    </Column>
  );
};

interface IHero {
  name: string;
  equipment: ICharacterEquipment[];
}

interface IHeroBuilderProps {
  hero: IHero;
}

export const HeroBuilder: FunctionComponent<IHeroBuilderProps> = props => {
  const calcTotalsFor: any = {
    armor: (equipment: ICharacterEquipment) => equipment.armor * equipment.level,
    health: (equipment: ICharacterEquipment) => equipment.health * equipment.level,
    damage: (equipment: ICharacterEquipment) => equipment.damage * equipment.level,
    powerLevel: 0,
  };

  const { totals, dispatch } = useCalculateTotals(
    props.hero.equipment,
    calcTotalsFor,
  );

  useEffect(() => {
    /**
     * Calculate Power Level
     */
    const powerLevel = totals.armor + totals.health + totals.damage;

    dispatch(setTotalForKey('powerLevel', powerLevel));
  }, [totals.armor, totals.health, totals.damage, dispatch]);
  return (
    <SummaryLayout title="Hero Builder">
      {{
        Left: (
          <>
            <H1>Attributes</H1>
            <ListWrapper>
              {props.hero.equipment.map(item => {
                return (
                  <React.Fragment key={item.name}>
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
            <Expander />
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
