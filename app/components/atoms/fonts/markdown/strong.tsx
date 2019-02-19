import { Fonts } from 'components/atoms';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const StrongFont = styled(Fonts.Body1)`
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
  <StrongFont boldness={Fonts.BoldnessLevels.Semibold} className={props.className}>
    {props.children}
  </StrongFont>
);
