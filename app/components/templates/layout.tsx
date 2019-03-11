import { BgColor } from 'components/atoms/layout/elements/row';
import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontColor, Fonts, LayoutElements, theme } from '../atoms';

const AppContent = styled.div`
  width: 100%;
  flex: 1 1 auto;
`;

const AppWrapper = styled(LayoutElements.Column)`
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
 * App Layout
 */
export const Layout: SFC<ILayoutProps> = props => {
  const { ActionBar, FilterBar, PageContent } = props.children;
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <LayoutElements.Row bgColor={BgColor.BLUE}>
          <Fonts.Display3 color={FontColor.WHITE}>PETE Allocation</Fonts.Display3>
        </LayoutElements.Row>
        <LayoutElements.Row>{FilterBar}</LayoutElements.Row>
        <LayoutElements.Row>{ActionBar}</LayoutElements.Row>
        <AppContent>{PageContent}</AppContent>
      </AppWrapper>
    </ThemeProvider>
  );
};
