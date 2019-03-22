import { Body1 } from 'components';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const getSharedStyle = () => `
  margin-bottom: 16px;
`;

const OrderedList = styled.ol`
  ${getSharedStyle()}
`;
const UnOrderedList = styled.ul`
  ${getSharedStyle()}
`;

interface IListProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Heading level to be rendered (ranges from 1 to 6)
   */
  start: number;

  /**
   * [required] Indicates whether list is ordered or not
   */
  ordered: boolean;

  /**
   * [required] Any children being passed to heading
   */
  children: any;
}

export const List: SFC<IListProps> = props => {
  const renderList = () => <Body1>{props.children}</Body1>;
  return props.ordered ? (
    <OrderedList>{renderList()}</OrderedList>
  ) : (
    <UnOrderedList>{renderList()}</UnOrderedList>
  );
};
