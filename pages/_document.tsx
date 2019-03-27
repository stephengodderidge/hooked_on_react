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
          {/* EXTERNAL CSS SHEETS, SCRIPTS, ETC GO HERE */}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}

// Material UI styles <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
// Material UI styles <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
// Semantic UI styles <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
// Reactstrap UI styles <script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.min.js"></script>
