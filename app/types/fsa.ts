/** Interface for Standard Action object */
// tslint:disable-next-line:interface-name
export interface FSA {
  type: string;
  meta?: {
    [key: string]: any;
  };
  payload?: {
    [key: string]: any;
  };
}
