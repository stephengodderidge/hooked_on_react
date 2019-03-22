import React from 'react';
import styled from 'styled-components';

import { colors } from 'modules/config/colors';
import { IDefaultProps } from 'types/default-props';

export enum BoldnessLevels {
  Light,
  Normal,
  Medium,
  Semibold,
  Bold,
}

export enum FontColor {
  BLACK = 1,
  WHITE,
}

interface IFontProps extends IDefaultProps {
  /**
   * [optional] specify the boldness level.
   * Use the BoldnessLevels enum.
   * Default is Normal if not specified
   */
  boldness?: BoldnessLevels;

  /**
   * [optional] Url for links
   */
  linkUrl?: string;

  /**
   * [optional] Target when user clicks on links
   */
  target?: string;

  /**
   * [optional] Prop for any onClick events.  This allows the font text
   * to become clickable
   */
  onClick?: (...args: any[]) => any;

  /**
   * [optional] Color of font text
   */
  color?: FontColor;
}

const Font = (props: IFontProps) => {
  const { linkUrl, color, ...otherProps } = props;
  const elementProps = linkUrl ? { ...otherProps, href: linkUrl } : otherProps;
  if (linkUrl) {
    return <a {...elementProps} />;
  }
  return <div {...elementProps} />;
};

const getBoldness = (boldnessLevel: BoldnessLevels): number => {
  switch (boldnessLevel) {
    case BoldnessLevels.Light:
    case BoldnessLevels.Normal:
      return 400;
    case BoldnessLevels.Medium:
      return 500;
    case BoldnessLevels.Semibold:
      return 600;
    case BoldnessLevels.Bold:
      return 700;
    default:
      return 400;
  }
};

const FONT = 'Courier' || 'Arial';

const getFontColor = (props: IFontProps) => {
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
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
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

export const H4 = styled(BaseFont)`
  font-size: 18px;
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
  color: ${(props: IFontProps) => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Link2 = styled(H3)`
  color: ${(props: IFontProps) => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Link3 = styled(Body1)`
  color: ${(props: IFontProps) => props.theme.colors.blue};
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
