import { IDefaultProps } from 'types/default-props';
import styled from 'styled-components';

interface ISpacerProps extends IDefaultProps {
  /**
   * [optional] spacer width between items (used to add space in row)
   */
  width?: number;

  /**
   * [optional] spacer height between items (used to add space in column)
   */
  height?: number;
}

export const Spacer = styled.div<ISpacerProps>`
  ${props => !!props.width && `width: ${props.width}px;`}
  ${props => !!props.height && `height: ${props.height}px;`}
`;
