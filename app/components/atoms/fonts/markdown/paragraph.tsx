import { Body1 } from 'components';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

interface IParagraphProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to paragraph
   */
  children: any;
}

const ParagraphFont = styled(Body1)`
  margin: 4px 0px 16px 0px;
`;

export const Paragraph: SFC<IParagraphProps> = props => (
  <ParagraphFont className={props.className}>{props.children}</ParagraphFont>
);
