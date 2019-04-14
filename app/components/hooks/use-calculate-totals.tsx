import { useReducer } from 'react';
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
    value: number | string;
  };
}

export const setTotalForKey = (
  key: string,
  value: number | string,
): ISetTotalForKey => ({
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
): IUseCalculateTotals<{ [key: string]: number }> => {
  const initialTotals = Object.keys(calcTotalsFor).reduce(
    (totals, calculationKey) => {
      if (typeof calcTotalsFor[calculationKey] === 'function') {
        const total = data.reduce(
          (currentTotal, obj) =>
            currentTotal + getSafeTotal(calcTotalsFor[calculationKey](obj)),
          0,
        );
        return {
          ...totals,
          [calculationKey]: total,
        };
      }
      return {
        ...totals,
        [calculationKey]: calcTotalsFor[calculationKey],
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
