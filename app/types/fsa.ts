/* eslint-disable @typescript-eslint/interface-name-prefix */
/** Interface for Standard Action object */
export interface FSA {
  type: string;
  meta?: {
    [key: string]: any;
  };
  payload?: {
    [key: string]: any;
  };
}
