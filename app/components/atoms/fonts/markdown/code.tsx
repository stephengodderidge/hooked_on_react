import { Fonts } from 'components/atoms';
import React, { SFC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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

const InlineCode = styled(Fonts.Body1)`
  color: ${props => props.theme.colors.red};
  background-color: ${props => props.theme.colors.grey1};
  padding: 0px 4px;
  border-radius: 5px;
  display: inline-block;
`;

const BlockCode = styled(SyntaxHighlighter)`
  line-height: 20px;
  padding: 16px;
  border-radius: 5px;
  margin: 16px;
`;

export const Code: SFC<ICodeProps> = props =>
  props.inline ? (
    <InlineCode className={props.className}>{props.children}</InlineCode>
  ) : (
    <BlockCode
      language={props.language}
      style={tomorrowNightEighties}
      className={props.className}
    >
      {props.value}
    </BlockCode>
  );
