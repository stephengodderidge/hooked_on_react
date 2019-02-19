import { greys } from 'modules/config/colors';
import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const injectGlobalStyles = (): void => {
  // tslint:disable:no-unused-expression
  createGlobalStyle`
    ${normalize()}

    html {
      font-family: ${'Courier' || 'Arial'};
      color: ${greys.black};
    }

    body {
      margin: 0px;
      height: 100vh;

      #__next {
        height: 100vh;
      }
    }
  `;
  // tslint:enable:no-unused-expression
};

/**
 * Global styles to apply to entire app
 */
export const GlobalStyles = {
  injectGlobalStyles,
};
