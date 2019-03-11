import { colors } from 'modules/config/colors';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BaseRow: SFC<IDefaultProps> = props => <FlexRow {...props} />;

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

interface IRowProps extends IDefaultProps {
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
}

const getContentJustification = (props: IRowProps) => {
  switch (props.justifyContent) {
    case JustifyContent.CENTER:
      return 'flex-end';
    case JustifyContent.END:
      return 'center';
    case JustifyContent.START:
    default:
      return 'flex-start';
  }
};

const getBackgroundColor = (props: IRowProps) => {
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

/** Flex Row */
export const Row = styled(BaseRow)<IRowProps>`
  justify-content: ${props => getContentJustification(props)};
  background-color: ${props => getBackgroundColor(props)};
`;

const Padding = styled.div<{ width: number }>`
  width: ${props => props.width || 16}px;
`;

interface IRowWithPadding extends IDefaultProps {
  /** Space between children */
  childPadding?: number;
}

/** Adds spacing between child elements for consistently spaced children */
export const RowWithPadding: SFC<IRowWithPadding> = props => (
  <FlexRow>
    {React.Children.toArray(props.children).map(
      (child: JSX.Element, index: number) =>
        index < props.children.length - 1 ? (
          <React.Fragment key={child.key}>
            {child}
            <Padding width={props.childPadding} />
          </React.Fragment>
        ) : (
          child
        ),
    )}
  </FlexRow>
);

const sortByKey = (a: JSX.Element, b: JSX.Element) =>
  a.key.toString() > b.key.toString() ? 1 : -1;

/** Sorts and adds spacing between child elements for consistently spaced children */
export const SortedRowWithPadding: SFC<IRowWithPadding> = props => (
  <FlexRow>
    {React.Children.toArray(props.children)
      .sort(sortByKey)
      .map((child: JSX.Element, index: number) =>
        index < props.children.length - 1 ? (
          <React.Fragment key={child.key}>
            {child}
            <Padding width={props.childPadding} />
          </React.Fragment>
        ) : (
          child
        ),
      )}
  </FlexRow>
);
