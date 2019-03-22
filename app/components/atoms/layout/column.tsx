import React, { SFC } from 'react';
import styled from 'styled-components';
import { InjectElement, IFlexDivProps, Spacer, generateSharedLayoutStyle } from './';

const FlexColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const EvenlySpacedColumn: SFC<IFlexDivProps> = props => (
  <FlexColumn className={props.className}>
    <InjectElement element={<Spacer height={props.childSpacing} />}>
      {props.children}
    </InjectElement>
  </FlexColumn>
);

const BaseColumn: SFC<IFlexDivProps> = props => {
  if (!!props.childSpacing) {
    return <EvenlySpacedColumn {...props} />;
  }
  return <FlexColumn {...props} />;
};

/** Flex Column */
export const Column = styled(BaseColumn)`
  ${props => generateSharedLayoutStyle(props)}
`;
