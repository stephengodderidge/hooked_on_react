import { Layout } from 'components/templates';
import { stateReducer } from 'modules/app/state-reducer';
import React from 'react';
import { FSA } from 'types/fsa';
import * as AppState from 'types/react-context-provider';
import { hydrateStateWithLocalStorage, updateLocalStorage } from './local-storage';

const createMandatoryContext = (
  defaultValue: AppState.IAppState = AppState.initialState,
) => {
  const context = React.createContext({ state: defaultValue });
  const consumer = (props: any) => {
    return (
      <context.Consumer>
        {(value: { state: AppState.IAppState }) =>
          value.state ? (
            props.children(value.state)
          ) : (
            <span style={{ color: 'red' }}>Missing Context</span>
          )
        }
      </context.Consumer>
    );
  };
  return {
    Consumer: consumer,
    Provider: context.Provider,
  };
};

/** App Context - Provider & Consumer */
export const AppContext = createMandatoryContext(AppState.initialState);

/** App state provider for overall application */
export class App extends AppState.ContextProvider {
  constructor(props: null) {
    super(props);

    const hydratedState = hydrateStateWithLocalStorage(AppState.initialState);

    this.state = {
      ...hydratedState,
      dispatch: this.updateApp,
    };
    this.updateApp = this.updateApp.bind(this);
  }

  updateApp(action: FSA) {
    this.setState(stateReducer(this.state, action));
  }

  render() {
    updateLocalStorage(this.state);
    return (
      <AppContext.Provider value={this}>
        <Layout>
          {{
            FilterBar: <div>Filter Bar</div>,
            ActionBar: <div>Action Bar</div>,
            PageContent: <div>Page Content</div>,
          }}
        </Layout>
      </AppContext.Provider>
    );
  }
}
