import { createMuiTheme } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

/**
 * For additional config see:
 * https://material-ui.com/style/color/#color-tool
 * https://material-ui.com/customization/themes/#palette
 */

export const materialUiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
    error: red,
  },
});
