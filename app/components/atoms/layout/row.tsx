import React, { SFC } from 'react';
import styled from 'styled-components';
import { InjectElement, IFlexDivProps, Spacer, generateSharedLayoutStyle } from './';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EvenlySpacedRow: SFC<IFlexDivProps> = props => (
  <FlexRow className={props.className}>
    <InjectElement element={<Spacer width={props.childSpacing} />}>
      {props.children}
    </InjectElement>
  </FlexRow>
);

const BaseRow: SFC<IFlexDivProps> = props => {
  if (!!props.childSpacing) {
    return <EvenlySpacedRow {...props} />;
  }
  return <FlexRow {...props} />;
};

/** Flex Row */
export const Row = styled(BaseRow)`
  ${props => generateSharedLayoutStyle(props)}
`;
