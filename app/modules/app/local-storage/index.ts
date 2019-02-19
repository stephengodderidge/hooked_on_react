import { IAppState } from 'types/react-context-provider';

/** Updates local storage for each key stored in App State */
export const updateLocalStorage = (appState: IAppState) => {
  if (typeof window !== 'undefined') {
    Object.keys(appState).forEach(key => {
      if (key !== 'dispatch') {
        window.localStorage.setItem(key, JSON.stringify(appState[key]));
      }
    });
  }
};

/** Updates local storage for each key stored in App State */
export const hydrateStateWithLocalStorage = (appState: IAppState): IAppState => {
  if (typeof window !== 'undefined') {
    const hydratedState = Object.keys(appState).reduce((partialState, key) => {
      if (key !== 'dispatch') {
        return {
          ...partialState,
          [key]: JSON.parse(window.localStorage.getItem(key)),
        };
      }
    }, {});
    return hydratedState as IAppState;
  }
  return appState;
};
