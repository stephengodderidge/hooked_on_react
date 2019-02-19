import { GlobalStyles } from 'modules/config/global-styles';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import styled, { ServerStyleSheet } from 'styled-components';

// inject global styles
GlobalStyles.injectGlobalStyles();

// added styles to prevent scrolling in background when modal is open
const Body = styled.body`
  &.ReactModal__Body--open {
    overflow-y: hidden;
  }
`;

/** TODO: Add comment */
export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          {styleTags}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js" />
        </Head>
        <Body>
          {main}
          <NextScript />
        </Body>
      </html>
    );
  }
}
