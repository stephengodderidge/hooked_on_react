import { colors } from 'modules/config';

export * from './theme';
export * from './column';
export * from './row';
export * from './spacer';
export * from './inject-element';
export * from './expander';

export const FlexContent = {
  START: 1,
  END: 2,
  CENTER: 3,
  SPACE_BETWEEN: 4,
};

export const LayoutBgColor = {
  WHITE: 1,
  BLUE: 2,
  GREY: 3,
  TRANSPARENT: 4,
};

export const isPaddingObject = padding => !!padding && isNaN(padding);

const getContentJustification = props => {
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

const getBackgroundColor = props => {
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

const getPadding = props => {
  if (isPaddingObject(props.padding)) {
    const { top, right, bottom, left } = props.padding;
    if (!!top && !!right && !!bottom && !!left) {
      return `${top}px ${right}px  ${bottom}px  ${left}px`;
    }
    return `${top}px ${right}px`;
  }
  return !!props.padding ? `${props.padding}px;` : '';
};

const getOverflowY = props => {
  if (props.scrollY) {
    return 'scroll';
  }
  return 'inherit';
};

const getHeight = props => {
  if (props.height) {
    return `height: ${props.height};`;
  }
  return;
};
const getWidth = props => {
  if (props.width) {
    return `width: ${props.width};`;
  }
  return;
};

export const getFlexboxStyles = props => `
  justify-content: ${getContentJustification(props)};
  align-items: ${getContentJustification(props)};
  background-color: ${getBackgroundColor(props)};
  padding: ${getPadding(props)};
  overflow-y: ${getOverflowY(props)};
  border-radius: ${props.useBorderRadius ? '3px' : '0px'};
  ${getHeight(props)};
  ${getWidth(props)};
`;
