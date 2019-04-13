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
} from 'components';

import styled from 'styled-components';

const CellFont = styled(H2)`
  padding: 8px 16px;
`;

const TotalsFont = styled(Body1)`
  padding: 4px 8px;
`;

interface IProduct {
  name: string;
  price: number;
  quantity: number;
  [key: string]: number | string;
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

interface ICart {
  name: string;
  products: IProduct[];
}

interface ICartSummaryProps {
  cart: ICart;
}

const calcShipping = (totalCost: number) => {
  if (totalCost > 50) {
    return 0;
  }
  return 15;
};

export const CartSummary: FunctionComponent<ICartSummaryProps> = props => {
  const calcTotalsFor: any = {
    subTotal: (product: IProduct) => product.price * product.quantity,
    taxes: null,
    shipping: null,
    totalCost: null,
  };

  const { totals, dispatch } = useCalculateTotals(
    props.cart.products,
    calcTotalsFor,
  );

  console.table(totals);
  useEffect(() => {
    /**
     * Calculate Taxes
     */
    const subTotal = Number(totals.subTotal as number);
    const taxes = subTotal * 0.1;
    const shipping = calcShipping(subTotal);
    const totalCost = subTotal + taxes + shipping;

    dispatch(setTotalForKey('taxes', taxes));
    dispatch(setTotalForKey('shipping', shipping));
    dispatch(setTotalForKey('totalCost', totalCost));
  }, totals.subTotal);

  return (
    <SummaryLayout title="Cart Summary">
      {{
        Left: (
          <>
            <H1>Products</H1>
            <ListWrapper>
              {props.cart.products.map(product => {
                return (
                  <React.Fragment key={product.name}>
                    <CellFont>{product.name}</CellFont>
                    <Expander />
                    <CellFont>${product.price}</CellFont>
                    <CellFont>{product.quantity}</CellFont>
                  </React.Fragment>
                );
              })}
            </ListWrapper>
          </>
        ),
        Right: (
          <ListWrapper>
            {[
              { name: 'Subtotal', value: totals.subTotal },
              { name: 'Taxes', value: totals.taxes },
              { name: 'Shipping', value: totals.shipping },
              { name: 'Total Cost', value: totals.totalCost },
            ].map(total => (
              <React.Fragment key={total.name}>
                <TotalsFont>{total.name}</TotalsFont>
                <Expander />
                <TotalsFont>${total.value}</TotalsFont>
              </React.Fragment>
            ))}
          </ListWrapper>
        ),
      }}
    </SummaryLayout>
  );
};
