import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const FlexColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

/** Flex Column */
export const Column: SFC<IDefaultProps> = props => <FlexColumn {...props} />;

export const PaddedColumn = styled(Column)`
  padding: 16px;
`;
