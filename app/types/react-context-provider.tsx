import {
  IEntities,
  initialState as initialEntities,
} from 'modules/entities/rdc.entities';
import * as PropTypes from 'prop-types';
import { Component } from 'react';
import { FSA } from 'types/fsa';

/** App Props */
export interface IAppProps {
  children: JSX.Element | JSX.Element[] | string;
}

/** App State */
export interface IAppState {
  dispatch: (action: FSA) => void;
  entities: IEntities;
  [key: string]: any;
}

/** Initial State for App */
export const initialState: IAppState = {
  dispatch: () => ({}),
  entities: initialEntities,
};

/** Custom React Context Provider */
export class ContextProvider extends Component<IAppProps, IAppState> {
  static childContextTypes = {
    dispatch: PropTypes.func,
    entities: PropTypes.object,
  };
  getChildContext(): IAppState {
    return initialState;
  }
}
