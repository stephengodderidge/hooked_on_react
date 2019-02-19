import React from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const FlexColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

/** Flex Column */
export const Column: React.SFC<IDefaultProps> = props => <FlexColumn {...props} />;
