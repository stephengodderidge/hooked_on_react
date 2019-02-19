import React from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const HrComponent = styled.hr`
  margin: 16px 0px;
  color: ${props => props.theme.colors.grey3};
`;

export const HorizontalRule: React.SFC<IDefaultProps> = props => (
  <HrComponent className={props.className} />
);
