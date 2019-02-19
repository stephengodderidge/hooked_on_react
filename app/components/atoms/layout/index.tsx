import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { IDefaultProps } from 'types/default-props';
import { LayoutElements } from './elements';
import { theme } from './theme';

const AppWrapper = styled(LayoutElements.Row)`
  height: 100%;
  width: 100%;
`;

const AppContent = styled(LayoutElements.Column)`
  width: 100%;
`;

const BodyContent = styled(LayoutElements.Column)`
  height: 100%;
  overflow: scroll;
  width: auto;
  padding: 16px;
`;

/**
 * App Layout
 */
export const Layout: SFC<IDefaultProps> = props => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <AppContent>
        <BodyContent>{props.children}</BodyContent>
      </AppContent>
    </AppWrapper>
  </ThemeProvider>
);
