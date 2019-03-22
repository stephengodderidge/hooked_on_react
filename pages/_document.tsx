import { GlobalStyles } from 'modules/config/global-styles';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

// inject global styles
GlobalStyles.injectGlobalStyles();

/** Root document for configuring global page setup */
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
          <link href="/static/global.css" rel="stylesheet" />
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
