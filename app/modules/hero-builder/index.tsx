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
  // const calcTotalsFor: any = {
  //   subTotal: (hero: IHero) => product.price * product.quantity,
  //   taxes: null,
  //   shipping: null,
  //   totalCost: null,
  // };

  // const { totals, dispatch } = useCalculateTotals(
  //   props.cart.products,
  //   calcTotalsFor,
  // );

  // useEffect(() => {
  //   /**
  //    * Calculate Taxes
  //    */
  //   const subTotal = Number(totals.subTotal as number);
  //   const taxes = subTotal * 0.1;
  //   const shipping = calcShipping(subTotal);
  //   const totalCost = subTotal + taxes + shipping;

  //   dispatch(setTotalForKey('taxes', taxes));
  //   dispatch(setTotalForKey('shipping', shipping));
  //   dispatch(setTotalForKey('totalCost', totalCost));
  // }, totals.subTotal);

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
                    <CellFont>{item.price}</CellFont>
                    <CellFont>{item.quantity}</CellFont>
                  </React.Fragment>
                );
              })}
            </ListWrapper>
          </>
        ),
        Right: (
          <ListWrapper>
            {[
              { name: 'Health', value: 10 },
              { name: 'Armor', value: 2 },
              { name: 'Damage', value: 12 },
              { name: 'Total Power', value: 50 },
            ].map(total => (
              <React.Fragment key={total.name}>
                <TotalsFont>{total.name}</TotalsFont>
                <Expander />
                <TotalsFont>{total.value}</TotalsFont>
              </React.Fragment>
            ))}
          </ListWrapper>
        ),
      }}
    </SummaryLayout>
  );
};
