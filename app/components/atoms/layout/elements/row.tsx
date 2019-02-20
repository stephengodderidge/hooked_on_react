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

export const RowWithPadding: SFC<IRowWithPadding> = props => (
  <FlexRow>
    {props.children.map((child: JSX.Element, index: number) =>
      index < props.children.length - 1 ? (
        <React.Fragment key={`child-${index}`}>
          {child}
          <Padding width={props.childPadding} />
        </React.Fragment>
      ) : (
        child
      ),
    )}
  </FlexRow>
);
