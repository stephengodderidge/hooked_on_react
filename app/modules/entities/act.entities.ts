import { FSA } from 'types/fsa';

//#region Normalize Query Data
export interface INormalizeQueryData extends FSA {
  type: 'NORMALIZE_QUERY_DATA';
  payload: any;
}

/** Action to normalize data from query */
export const normalizeQueryData = (data: any): INormalizeQueryData => ({
  payload: { data },
  type: 'NORMALIZE_QUERY_DATA',
});
//#endregion Normalize Query Data

/** All entities actions */
export type EntitiesActions = INormalizeQueryData;
