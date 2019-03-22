import { BgColor, Column, FontColor, Display3, Row, theme } from 'components';
import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const AppContent = styled.div`
  width: 100%;
  flex: 1 1 auto;
`;

const AppWrapper = styled(Column)`
  width: 100%;
  height: 100%;
`;

interface ILayoutProps {
  children: {
    /** List of filters currently being applied */
    FilterBar: JSX.Element;
    /** Components to render for action bar */
    ActionBar: JSX.Element;
    /** Components to render for page content */
    PageContent: JSX.Element;
  };
}

/**
 * Layout Template for Main Grid
 */
export const MainGrid: SFC<ILayoutProps> = props => {
  const { ActionBar, FilterBar, PageContent } = props.children;
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Row bgColor={BgColor.BLUE}>
          <Display3 color={FontColor.WHITE}>PETE Allocation</Display3>
        </Row>
        <Row>{FilterBar}</Row>
        <Row>{ActionBar}</Row>
        <AppContent>{PageContent}</AppContent>
      </AppWrapper>
    </ThemeProvider>
  );
};
