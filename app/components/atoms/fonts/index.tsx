import React from 'react';
import styled from 'styled-components';

import { colors } from 'modules/config/colors';
import { IDefaultProps } from 'types/default-props';

enum BoldnessLevels {
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

export interface IFontProps extends IDefaultProps {
  /**
   * [optional] specify the boldness level.
   * Use the BoldnessLevels enum.
   * Default is Normal if not specified
   */
  boldness?: BoldnessLevels;

  /**
   * [optional] specify the type of tag to which the font will be applied.
   * For instance, pass 'a' or 'div' or 'span'.
   * Default is 'div' if not specified
   */
  tag?: 'a' | 'div' | 'p' | 'span';

  /**
   * [optional] Url for links
   */
  linkUrl?: string;

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

const BaseFont = (props: IFontProps) => {
  const { linkUrl, tag, color, ...otherProps } = props;
  const tagType = tag ? tag : 'div';
  const factory = React.createFactory(tagType);
  const tagProps = linkUrl ? { ...otherProps, href: linkUrl } : otherProps;
  return factory(tagProps, otherProps.children);
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

/*  'Display' fonts (large headers)  */
const Display1 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Light,
    )};
  font-size: 72px;
  line-height: 80px;
`;

const Display2 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 48px;
  line-height: 54px;
`;

const Display3 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 40px;
  line-height: 46px;
`;

/*  'H' fonts (headers)  */
const H1 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 28px;
  line-height: 34px;
`;

const H2 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 24px;
  line-height: 30px;
`;

const H3 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 20px;
  line-height: 30px;
`;

const H4 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 18px;
  line-height: 30px;
`;

/*  'Body' Styles  */
const Body1 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 16px;
  line-height: 20px;
`;

const Body2 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 14px;
  line-height: 18px;
`;

const Body3 = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 12px;
  line-height: 16px;
`;

/*  'Link' Styles  */
const Link1 = styled(H1)`
  color: ${(props: IFontProps) => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Link2 = styled(H3)`
  color: ${(props: IFontProps) => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Link3 = styled(Body1)`
  color: ${(props: IFontProps) => props.theme.colors.blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Label = styled(BaseFont)`
  color: ${props => getFontColor(props)};
  font-family: ${FONT};
  font-weight: ${(props: IFontProps) =>
    getBoldness(
      props.boldness !== undefined ? props.boldness : BoldnessLevels.Normal,
    )};
  font-size: 11px;
  line-height: 14px;
`;

export const Fonts = {
  Display1,
  Display2,
  Display3,
  H1,
  H2,
  H3,
  H4,
  Body1,
  Body2,
  Body3,
  Link1,
  Link2,
  Link3,
  Label,
  BoldnessLevels,
};
