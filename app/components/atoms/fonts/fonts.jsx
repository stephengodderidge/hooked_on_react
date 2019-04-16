import React from 'react';
import styled from 'styled-components';
import { colors } from 'modules/config/colors';

export const BoldnessLevels = {
  LIGHT: 1,
  MEDIUM: 2,
  BOLD: 3,
};

export const FontColor = {
  BLACK: 1,
  WHITE: 2,
};

const Font = props => {
  const { linkUrl, color, ...otherProps } = props;
  const elementProps = linkUrl ? { ...otherProps, href: linkUrl } : otherProps;
  if (linkUrl) {
    return <a {...elementProps} />;
  }
  return <div {...elementProps} />;
};

const getBoldness = boldnessLevel => {
  switch (boldnessLevel) {
    case BoldnessLevels.LIGHT:
      return 300;
    case BoldnessLevels.BOLD:
      return 700;
    case BoldnessLevels.MEDIUM:
    default:
      return 500;
  }
};

const FONT = 'Courier' || 'Arial';

const getFontColor = props => {
  switch (props.color) {
    case FontColor.WHITE:
      return colors.white;
    case FontColor.BLACK:
    default:
      return colors.black;
  }
};

const BaseFont = styled(Font)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${props =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.MEDIUM,
    )};
`;

/*  'Display' fonts (large headers)  */
export const Display1 = styled(BaseFont)`
  font-size: 72px;
  line-height: 80px;
`;

export const Display2 = styled(BaseFont)`
  font-size: 48px;
  line-height: 54px;
`;

export const Display3 = styled(BaseFont)`
  font-size: 40px;
  line-height: 46px;
`;

/*  'H' fonts (headers)  */
export const H1 = styled(BaseFont)`
  font-size: 28px;
  line-height: 34px;
`;

export const H2 = styled(BaseFont)`
  font-size: 24px;
  line-height: 30px;
`;

export const H3 = styled(BaseFont)`
  font-size: 20px;
  line-height: 30px;
`;

/*  'Body' Styles  */
export const Body1 = styled(BaseFont)`
  font-size: 16px;
  line-height: 20px;
`;

export const Body2 = styled(BaseFont)`
  font-size: 14px;
  line-height: 18px;
`;

export const Body3 = styled(BaseFont)`
  font-size: 12px;
  line-height: 16px;
`;

/*  'Link' Styles  */
export const Link1 = styled(H1)`
  color: ${props => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Link2 = styled(H3)`
  color: ${props => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Link3 = styled(Body1)`
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Label = styled(BaseFont)`
  font-size: 11px;
  line-height: 14px;
`;
