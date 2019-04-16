import styled from 'styled-components';

export const Spacer = styled.div`
  ${props => !!props.width && `width: ${props.width}px;`}
  ${props => !!props.height && `height: ${props.height}px;`}
`;
