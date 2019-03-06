import React, { SFC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
`;

/** Wrapper component for examples */
export const ExampleWrapper: SFC<{}> = props => <Wrapper>{props.children}</Wrapper>;
