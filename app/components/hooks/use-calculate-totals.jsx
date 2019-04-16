import { useReducer, useEffect } from 'react';

// #region Calculation Logic
const getSafeTotal = value => {
  return !!value ? value : 0;
};

const calcTotals = (data, calcTotalsFor) =>
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
// #endregion Calculation Logic

// #region Actions
export const setTotalForKey = (key, value) => ({
  type: 'SET_TOTAL_FOR_KEY',
  payload: {
    key,
    value,
  },
});

export const recalculateTotals = (data, calculateTotalsFor) => ({
  type: 'RECALCULATE_TOTALS',
  payload: {
    data,
    calculateTotalsFor,
  },
});

/** All app actions */
const CalculateTotalAction = {
  SET_TOTAL_FOR_KEY: 'SET_TOTAL_FOR_KEY',
  RECALCULATE_TOTALS: 'RECALCULATE_TOTALS',
};
// #endregion Actions

// #region Reducer
const totalsReducer = (state, action) => {
  switch (action.type) {
    case CalculateTotalAction.SET_TOTAL_FOR_KEY:
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    case CalculateTotalAction.RECALCULATE_TOTALS:
      const { data, calculateTotalsFor } = action.payload;
      return calcTotals(data, calculateTotalsFor);
    default:
      throw new Error();
  }
};
// #endregion Reducer
// #region useCalculateTotals Hook
export const useCalculateTotals = (data, calcTotalsFor) => {
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
// #endregion useCalculateTotals Hook
