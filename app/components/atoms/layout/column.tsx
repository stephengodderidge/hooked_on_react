import React, { SFC } from 'react';
import styled from 'styled-components';
import { IFlexboxComponentProps, Spacer, InjectElement, getFlexboxStyles } from '.';

const FlexColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const EvenlySpacedColumn: SFC<IFlexboxComponentProps> = props => (
  <FlexColumn>
    <InjectElement element={<Spacer height={props.childSpacing} />}>
      {props.children}
    </InjectElement>
  </FlexColumn>
);

const BaseColumn: SFC<IFlexboxComponentProps> = ({ bgColor, ...props }) => {
  if (!!props.childSpacing) {
    return <EvenlySpacedColumn {...props} />;
  }
  return <FlexColumn {...props} />;
};

/** Flex Column */
export const Column = styled(BaseColumn)`
  ${props => getFlexboxStyles(props)}
`;
