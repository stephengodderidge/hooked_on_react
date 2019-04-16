import React from 'react';
import styled from 'styled-components';
import { Spacer, InjectElement, getFlexboxStyles } from '.';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EvenlySpacedRow = props => (
  <FlexRow {...props}>
    <InjectElement element={<Spacer width={props.childSpacing} />}>
      {props.children}
    </InjectElement>
  </FlexRow>
);

const BaseRow = ({ bgColor, ...props }) => {
  if (!!props.childSpacing) {
    return <EvenlySpacedRow {...props} />;
  }
  return <FlexRow {...props} />;
};

/** Flex Row */
export const Row = styled(BaseRow)`
  ${props => getFlexboxStyles(props)};

  /* border: 3px solid green; */
`;
