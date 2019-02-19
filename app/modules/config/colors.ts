export interface IColors {
  lightRed: '#fc5c65';
  red: '#eb3b5a';
  lightOrange: '#fd9644';
  orange: '#fa8231';
  lightYellow: '#fed330';
  yellow: '#f7b731';
  lightBlue: '#45aaf2';
  blue: '#2d98da';
  lightRoyalBlue: '#4b7bec';
  royalBlue: '#3867d6';
  lightGreen: '#26de81';
  green: '#20bf6b';
  lightTeal: '#2bcbba';
  teal: '#0fb9b1';
  lightPurple: '#a55eea';
  purple: '#8854d0';
  grey1: '#a6b2c2';
  grey2: '#818d9c';
  grey3: '#5e6978';
  black: '#3d4856';
  white: '#f5f6fa';
  [key: string]: TColorCodes;
}

export type TColorNames =
  | 'lightRed'
  | 'red'
  | 'lightOrange'
  | 'orange'
  | 'lightYellow'
  | 'yellow'
  | 'lightBlue'
  | 'blue'
  | 'lightRoyalBlue'
  | 'royalBlue'
  | 'lightGreen'
  | 'green'
  | 'lightTeal'
  | 'teal'
  | 'lightPurple'
  | 'purple'
  | 'grey1'
  | 'grey2'
  | 'grey3'
  | 'black'
  | 'white';

export type TColorCodes =
  | '#fc5c65'
  | '#eb3b5a'
  | '#fd9644'
  | '#fa8231'
  | '#fed330'
  | '#f7b731'
  | '#45aaf2'
  | '#2d98da'
  | '#4b7bec'
  | '#3867d6'
  | '#26de81'
  | '#20bf6b'
  | '#2bcbba'
  | '#0fb9b1'
  | '#a55eea'
  | '#8854d0'
  | '#a6b2c2'
  | '#818d9c'
  | '#5e6978'
  | '#3d4856'
  | '#f5f6fa';

interface IColorSubset {
  [key: string]: TColorCodes;
}

export const reds: IColorSubset = {
  lightRed: '#fc5c65',
  red: '#eb3b5a',
};

export const oranges: IColorSubset = {
  lightOrange: '#fd9644',
  orange: '#fa8231',
};

export const yellows: IColorSubset = {
  lightYellow: '#fed330',
  yellow: '#f7b731',
};

export const blues: IColorSubset = {
  lightBlue: '#45aaf2',
  blue: '#2d98da',
  lightRoyalBlue: '#4b7bec',
  royalBlue: '#3867d6',
};

export const greens: IColorSubset = {
  lightGreen: '#26de81',
  green: '#20bf6b',
  lightTeal: '#2bcbba',
  teal: '#0fb9b1',
};

export const purples: IColorSubset = {
  lightPurple: '#a55eea',
  purple: '#8854d0',
};

export const greys: IColorSubset = {
  grey1: '#a6b2c2',
  grey2: '#818d9c',
  grey3: '#5e6978',
  black: '#3d4856',
};

export const whites: IColorSubset = {
  white: '#f5f6fa',
};

export const colors = {
  ...reds,
  ...oranges,
  ...yellows,
  ...greens,
  ...blues,
  ...purples,
  ...greys,
  ...whites,
};
