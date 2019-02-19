import { FSA } from 'types/fsa';

/** State Entities */
export interface IEntities {
  [key: string]: { [key: string]: any };
}

export const initialState: IEntities = {};

export const entitiesReducer = (state: IEntities = initialState, action: FSA) => {
  switch (action.type) {
    case 'NORMALIZE_QUERY_DATA':
      const entityKeys = Object.keys(action.payload);
      const updatedKeys = entityKeys.reduce(
        (entities: Partial<IEntities>, currentKey) => ({
          ...entities,
          [currentKey]: {
            ...state[currentKey],
            ...action.payload[currentKey],
          },
        }),
        {},
      );
      return {
        ...state,
        ...updatedKeys,
      };
    default:
      return state;
  }
};
