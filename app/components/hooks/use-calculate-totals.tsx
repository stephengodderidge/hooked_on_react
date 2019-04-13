import React, { useReducer, FunctionComponent } from 'react';
import { FSA } from 'types/fsa';
import Styled from "styled-components";

import {ActionButton, PrimaryButton, SecondaryButton, ButtonColor, ButtonSize} from '../atoms/buttons/material';
import {LeftRightTemplateWithLabel} from '../templates/left-right-template-with-label';

type TDispatchCallback = (action: FSA) => void;

interface IUseCalculateTotals<T> {
  totals: T;
  dispatch: TDispatchCallback;
}

interface ISetTotalForKey extends FSA {
  type: 'SET_TOTAL_FOR_KEY';
  payload: {
    key: string;
    value: number;
  };
}

export const setTotalForKey = (key: string, value: number): ISetTotalForKey => ({
  type: 'SET_TOTAL_FOR_KEY',
  payload: {
    key,
    value,
  },
});

/** All app actions */
enum CalculateTotalAction {
  SET_TOTAL_FOR_KEY = 'SET_TOTAL_FOR_KEY',
}
type TCalculateTotalActions = ISetTotalForKey;

const totalsReducer = <T extends {}>(
  state: T,
  action: TCalculateTotalActions,
): T => {
  switch (action.type) {
    case CalculateTotalAction.SET_TOTAL_FOR_KEY:
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    default:
      throw new Error();
  }
};

interface ICalculateTotalsFor {
  [key: string]: (dataObject: {}) => number;
}

const getSafeTotal = (value: number) => {
  return !!value ? value : 0;
};

export const useCalculateTotals = <T extends { [key: string]: number | string }>(
  data: T[],
  calcTotalsFor: ICalculateTotalsFor,
): IUseCalculateTotals<T> => {
  const initialTotals = Object.keys(calcTotalsFor).reduce(
    (totals, calculationKey) => {
      const total = data.reduce(
        (currentTotal, obj) =>
          currentTotal + getSafeTotal(calcTotalsFor[calculationKey](obj)),
        0,
      );
      return {
        ...totals,
        [calculationKey]: total,
      };
    },
    {},
  );
  const [totals, dispatch] = useReducer(totalsReducer, initialTotals);
  return {
    totals,
    dispatch,
  };
};

export const CartComponent: FunctionComponent<{}> = () => {
  interface IProduct {
    name: string;
    price: number;
    quantity: number;
  }

  const cart = {
    name: 'My Cart',
    products: [
      {
        name: 'Soccer Ball',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Stapler',
        price: 5,
        quantity: 2,
      },
    ],
  };

  const calcTotalsFor = {
    price: (product: IProduct) => product.price * product.quantity,
  };
  const { totals, dispatch } = useCalculateTotals(cart.products, calcTotalsFor);
  console.table(totals);
  return <div>Bleh</div>;
};

export const CharacterComponent: FunctionComponent<{}> = () => {
  interface ICharacterEquipment {
    name: string;
    health?: number;
    armor?: number;
    damage?: number;
    level: number;
  }

  const character = {
    name: 'My Character',
    equipment: [
      {
        name: 'Helmet',
        armor: 10,
        health: 10,
        level: 1,
      },
      {
        name: 'Sword',
        damage: 5,
        level: 3,
      },
      {
        name: 'Lucky Charm',
        health: 5,
        level: 5,
      },
      {
        name: 'Unlucky Charm',
        health: -1,
        level: 3,
      },
    ],
  };

  const calcTotalsFor = {
    health: (equipment: ICharacterEquipment) => equipment.health * equipment.level,
    armor: (equipment: ICharacterEquipment) => equipment.armor * equipment.level,
    damage: (equipment: ICharacterEquipment) => equipment.damage * equipment.level,
  };
  const { totals, dispatch } = useCalculateTotals(
    character.equipment,
    calcTotalsFor,
  );
  console.table(totals);
  return(
  <div>
    <ModalDiv>
      <ModalContent>
        <LeftRightTemplateWithLabel title="Cart Total">
          {{
            Left: `Hello`,
            Right: <div>hello world</div>
          }}
        </LeftRightTemplateWithLabel>
        <PrimaryButton color={ButtonColor.BLUE} size={ButtonSize.SMALL} onClick={()=>console.log("hello")}>hello</PrimaryButton>
      </ModalContent>
    </ModalDiv>
  </div>
  );
};


/**
 * components to be broken out into different files
 */

export const TotalsList: FunctionComponent<{}> = () => {

  return <div>Bleh</div>;
}

export const TotalsListItem: FunctionComponent<{}> = () => {
  return <div>Bleh</div>;
}

 const ModalDiv = Styled.div`
//  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  `

  const ModalContent = Styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  `

