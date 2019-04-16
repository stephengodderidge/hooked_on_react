import { IDefaultProps } from 'types/default-props';
import { colors } from 'modules/config';

export * from './theme';
export * from './column';
export * from './row';
export * from './spacer';
export * from './inject-element';
export * from './expander';
export * from './modal';

export enum FlexContent {
  START = 1,
  END,
  CENTER,
  SPACE_BETWEEN,
}

export enum LayoutBgColor {
  WHITE = 1,
  BLUE,
  GREY,
  TRANSPARENT,
}

interface IPaddingObjectProp {
  top: number;
  right: number;
  bottom?: number;
  left?: number;
}

type TPaddingProp = number | IPaddingObjectProp;

export const isPaddingObject = (
  padding: TPaddingProp,
): padding is IPaddingObjectProp => !!padding && isNaN(padding as number);

export interface IFlexboxComponentProps extends IDefaultProps {
  /**
   * [optional] Justification for children of Flexbox Component. Controls the value
   * used with `justify-content` css property
   *
   * @default START
   */
  justifyContent?: FlexContent;

  /**
   * [optional] Justification for children of Flexbox Component. Controls the value
   * used with `align-items` css property
   *
   * @default START
   */
  alignItems?: FlexContent;

  /**
   * [optional] Background color for Flexbox Component.  Controls the `background-color`
   * css property
   *
   * @default TRANSPARENT
   */
  bgColor?: LayoutBgColor;

  /**
   * [optional] Amount of spacing to inject between children
   */
  childSpacing?: number;

  /**
   * [optional] Padding for Flexbox Component
   *
   * Follows same rules as css property `padding`.  When number is provided,
   * all padding will be set equal to same value:
   *
   * i.e. `padding: 16px;`
   *
   * When object is provided, either `top` & `right` values can be provided OR
   * all 4 (`top`, `right`, `bottom`, `left`).
   *
   * i.e. `padding: { top: 10, right: 20 } => padding: 10px 20px;`
   * i.e. `padding: { top: 10, right: 20, bottom: 30, left: 40 } => padding: 10px 20px 30px 40px;`
   */
  padding?: TPaddingProp;

  /**
   * [optional] Enables `overflow-y: scroll` css style
   */
  scrollY?: boolean;

  /**
   * [optional] Sets height of Flexbox Component
   */
  height?: string;

  /**
   * [optional] Sets width of Flexbox Component
   */
  width?: string;

  /**
   * [optional] Enables border radius styling (set to 3px)
   */
  useBorderRadius?: boolean;
}

const getContentJustification = (props: IFlexboxComponentProps) => {
  switch (props.justifyContent) {
    case FlexContent.END:
      return 'flex-end';
    case FlexContent.CENTER:
      return 'center';
    case FlexContent.SPACE_BETWEEN:
      return 'space-between';
    case FlexContent.START:
    default:
      return 'flex-start';
  }
};

const getBackgroundColor = (props: IFlexboxComponentProps) => {
  switch (props.bgColor) {
    case LayoutBgColor.WHITE:
      return colors.white;
    case LayoutBgColor.BLUE:
      return colors.royalBlue;
    case LayoutBgColor.GREY:
      return colors.grey1;
    case LayoutBgColor.TRANSPARENT:
    default:
      return 'transparent';
  }
};

const getPadding = (props: IFlexboxComponentProps) => {
  if (isPaddingObject(props.padding)) {
    const { top, right, bottom, left } = props.padding;
    if (!!top && !!right && !!bottom && !!left) {
      return `${top}px ${right}px  ${bottom}px  ${left}px`;
    }
    return `${top}px ${right}px`;
  }
  return !!props.padding ? `${props.padding}px;` : '';
};

const getOverflowY = (props: IFlexboxComponentProps) => {
  if (props.scrollY) {
    return 'scroll';
  }
  return 'inherit';
};

const getHeight = (props: IFlexboxComponentProps) => {
  if (props.height) {
    return `height: ${props.height};`;
  }
  return;
};
const getWidth = (props: IFlexboxComponentProps) => {
  if (props.width) {
    return `width: ${props.width};`;
  }
  return;
};

export const getFlexboxStyles = (props: IFlexboxComponentProps) => `
  justify-content: ${getContentJustification(props)};
  align-items: ${getContentJustification(props)};
  background-color: ${getBackgroundColor(props)};
  padding: ${getPadding(props)};
  overflow-y: ${getOverflowY(props)};
  border-radius: ${props.useBorderRadius ? '3px' : '0px'};
  ${getHeight(props)};
  ${getWidth(props)};
`;
