import React, { SFC, useReducer } from 'react';
import { FSA } from 'types/fsa';

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

export const CartComponent: SFC<{}> = () => {
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
  console.log('totals: ', totals);
  console.log('dispatch: ', dispatch);
  return <div>Bleh</div>;
};

export const CharacterComponent: SFC<{}> = () => {
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
  console.log('totals: ', totals);
  console.log('dispatch: ', dispatch);
  return <div>Bleh</div>;
};
