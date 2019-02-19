import { Fonts } from 'components/atoms';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const LinkFont = styled(Fonts.Link1)`
  margin: 16px 0px;
`;

interface ILinkProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to paragraph
   */
  children: any;

  /**
   * [optional] Url associated with link
   */
  href?: string;
}

export const Link: SFC<ILinkProps> = props => {
  const linkUrl =
    typeof window !== 'undefined'
      ? `${window.location.pathname}/${props.href}`
      : props.href;
  return (
    <LinkFont className={props.className} tag="a" linkUrl={linkUrl}>
      {props.children}
    </LinkFont>
  );
};
