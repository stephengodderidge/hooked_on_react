import React from 'react';
import styled from 'styled-components';
import { IDefaultProps } from 'types/default-props';

const getSharedStyle = (props: ITableCellProps) => `
  text-align: ${props.align};
  padding: 4px 8px;
  border: 1px solid ${props.theme.colors.grey3};
`;

export const TableCellComponent = styled.td<ITableCellProps>`
  ${props => getSharedStyle(props)}
`;

export const TableHeadCellComponent = styled.td<ITableCellProps>`
  ${props => getSharedStyle(props)}
`;

interface ITableCellProps extends IDefaultProps {
  /**
   * See https://github.com/rexxars/commonmark-react-renderer#type-renderer-options
   * for more information on props
   */

  /**
   * [required] Any children being passed to TableCell
   */
  children: any;

  /**
   * [required] Identifies if table cell is a header cell
   */
  isHeader: boolean;

  /**
   * [optional] Text alignment for cell
   *
   * @default `left`
   */
  align?: 'left' | 'right' | 'center' | 'justify' | 'char';
}

export const TableCell: React.SFC<ITableCellProps> = props => {
  return props.isHeader ? (
    <th className={props.className} align={props.align}>
      {props.children}
    </th>
  ) : (
    <td className={props.className} align={props.align}>
      {props.children}
    </td>
  );
};
