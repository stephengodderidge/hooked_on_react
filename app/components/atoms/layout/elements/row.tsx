import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const FlexRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const Padding = styled.div<{ width: number }>`
  width: ${props => props.width || 16}px;
`;

interface IRowWithPadding extends IDefaultProps {
  /** Space between children */
  childPadding?: number;
}

/** Flex Row */
export const Row: SFC<IDefaultProps> = props => <FlexRow {...props} />;

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
