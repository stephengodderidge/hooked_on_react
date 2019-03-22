import { IDefaultProps } from 'types/default-props';
import { colors } from 'modules/config/colors';

export * from './theme';
export * from './column';
export * from './row';
export * from './inject-element';
export * from './spacer';

export enum JustifyContent {
  START = 1,
  END,
  CENTER,
}

export enum BgColor {
  WHITE = 1,
  BLUE,
  GREY,
}

export const getContentJustification = (props: IFlexDivProps) => {
  switch (props.justifyContent) {
    case JustifyContent.CENTER:
      return 'center';
    case JustifyContent.END:
      return 'flex-end';
    case JustifyContent.START:
    default:
      return 'flex-start';
  }
};

export const getBackgroundColor = (props: IFlexDivProps) => {
  switch (props.bgColor) {
    case BgColor.WHITE:
      return colors.white;
    case BgColor.BLUE:
      return colors.royalBlue;
    case BgColor.GREY:
      return colors.grey1;
    default:
      return 'transparent';
  }
};

export interface IFlexDivProps extends IDefaultProps {
  /**
   * [optional] Justification for children of Row component. Controls the value
   * used with `justify-content` css property
   *
   * @default START
   */
  justifyContent?: JustifyContent;

  /**
   * [optional] Background color for Row
   *
   * @default TRANSPARENT
   */
  bgColor?: BgColor;

  /**
   * [optional] Amount of spacing to inject between children
   */
  childSpacing?: number;
}

export const generateSharedLayoutStyle = (props: IFlexDivProps) => `
  justify-content: ${getContentJustification(props)};
  background-color: ${getBackgroundColor(props)};
`;
