import React, { SFC } from 'react';
import styled from 'styled-components';
import { IFlexboxComponentProps, Spacer, InjectElement, getFlexboxStyles } from '.';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EvenlySpacedRow: SFC<IFlexboxComponentProps> = props => (
  <FlexRow>
    <InjectElement element={<Spacer width={props.childSpacing} />}>
      {props.children}
    </InjectElement>
  </FlexRow>
);

const BaseRow: SFC<IFlexboxComponentProps> = ({ bgColor, ...props }) => {
  if (!!props.childSpacing) {
    return <EvenlySpacedRow {...props} />;
  }
  return <FlexRow {...props} />;
};

/** Flex Row */
export const Row = styled(BaseRow)`
  ${props => getFlexboxStyles(props)};
`;
