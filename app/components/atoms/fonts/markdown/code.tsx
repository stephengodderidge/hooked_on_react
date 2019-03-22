import { Body1 } from 'components';
import React, { SFC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

interface ICodeProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Language code snippet is written in
   */
  language: string;

  /**
   * [optional] Always true (see above documentation)
   */
  inline?: boolean;

  /**
   * [optional] Prop used for block-style code
   */
  value?: string;
}

const InlineCode = styled(Body1)`
  color: ${props => props.theme.colors.red};
  background-color: ${props => props.theme.colors.grey1};
  padding: 0px 4px;
  border-radius: 5px;
  display: inline-block;
`;

export const Code: SFC<ICodeProps> = props =>
  props.inline ? (
    <InlineCode className={props.className}>{props.children}</InlineCode>
  ) : (
    <SyntaxHighlighter language={props.language} style={hopscotch} useInlineStyles>
      {props.value}
    </SyntaxHighlighter>
  );
