import { useReducer, useEffect } from 'react';
import { FSA } from 'types/fsa';

const getSafeTotal = (value: number) => {
  return !!value ? value : 0;
};

const calcTotals = <T extends { [key: string]: number | string }>(
  data: T[],
  calcTotalsFor: ICalculateTotalsFor,
) =>
  Object.keys(calcTotalsFor).reduce((totals, calculationKey) => {
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
  }, {});

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

interface IRecalculateTotals<T> extends FSA {
  type: 'RECALCULATE_TOTALS';
  payload: {
    data: T[];
    calculateTotalsFor: ICalculateTotalsFor;
  };
}

export const recalculateTotals = <T extends { [key: string]: number | string }>(
  data: T[],
  calculateTotalsFor: ICalculateTotalsFor,
): IRecalculateTotals<T> => ({
  type: 'RECALCULATE_TOTALS',
  payload: {
    data,
    calculateTotalsFor,
  },
});

/** All app actions */
enum CalculateTotalAction {
  SET_TOTAL_FOR_KEY = 'SET_TOTAL_FOR_KEY',
  RECALCULATE_TOTALS = 'RECALCULATE_TOTALS',
}
type TCalculateTotalActions = ISetTotalForKey | IRecalculateTotals<any>;

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
    case CalculateTotalAction.RECALCULATE_TOTALS:
      const { data, calculateTotalsFor } = action.payload;
      return calcTotals(data, calculateTotalsFor) as any;
    default:
      throw new Error();
  }
};

interface ICalculateTotalsFor {
  [key: string]: (dataObject: {}) => number;
}

export const useCalculateTotals = <T extends { [key: string]: number | string }>(
  data: T[],
  calcTotalsFor: ICalculateTotalsFor,
): IUseCalculateTotals<{ [key: string]: number }> => {
  const initialTotals = calcTotals(data, calcTotalsFor);
  const [totals, dispatch] = useReducer(totalsReducer, initialTotals);

  useEffect(() => {
    dispatch(recalculateTotals(data, calcTotalsFor));
  }, [data.length]);

  return {
    totals,
    dispatch,
  };
};
