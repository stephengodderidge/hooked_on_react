import { Link3 } from 'components';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const LinkFont = styled(Link3)`
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

export const Link: SFC<ILinkProps> = props => (
  <LinkFont className={props.className} linkUrl={props.href} target="_">
    {props.children}
  </LinkFont>
);
