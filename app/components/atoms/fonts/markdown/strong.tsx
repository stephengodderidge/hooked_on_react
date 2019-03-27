import { BoldnessLevels, Body1 } from 'components';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const StrongFont = styled(Body1)`
  display: inline;
`;

interface IStrongProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to Strong
   */
  children: any;
}

export const Strong: SFC<IStrongProps> = props => (
  <StrongFont boldness={BoldnessLevels.BOLD} className={props.className}>
    {props.children}
  </StrongFont>
);
