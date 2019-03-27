import styled from 'styled-components';

interface ISpacerProps {
  /**
   * [optional] Fixed width spacer should be
   */
  width?: number;
  /**
   * [optional] Fixed height spacer should be
   */
  height?: number;
}

export const Spacer = styled.div<ISpacerProps>`
  ${props => !!props.width && `width: ${props.width}px;`}
  ${props => !!props.height && `height: ${props.height}px;`}
`;
