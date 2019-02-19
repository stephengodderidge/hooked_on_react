import { entitiesReducer } from 'modules/entities/rdc.entities';
import { IAppState } from 'types/react-context-provider';

export const stateReducer = (state: IAppState, action: any): IAppState => {
  return {
    dispatch: () => ({}),
    entities: entitiesReducer(state.entities, action),
  };
};
