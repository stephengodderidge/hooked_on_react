import React from 'react';
import styled from 'styled-components';
import { IFlexboxComponentProps, Spacer, InjectElement, getFlexboxStyles } from '.';

const FlexColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const EvenlySpacedColumn = props => (
  <FlexColumn {...props}>
    <InjectElement element={<Spacer height={props.childSpacing} />}>
      {props.children}
    </InjectElement>
  </FlexColumn>
);

const BaseColumn = ({ bgColor, ...props }) => {
  if (!!props.childSpacing) {
    return <EvenlySpacedColumn {...props} />;
  }
  return <FlexColumn {...props} />;
};

/** Flex Column */
export const Column = styled(BaseColumn)`
  ${props => getFlexboxStyles(props)} /* border: 2px solid blue; */
`;
