import { createMuiTheme } from '@material-ui/core';

const MuiTheme = createMuiTheme({
});

const { breakpoints, palette } = MuiTheme;

window.console.log(breakpoints, palette);

const defaultTheme = {
  ...MuiTheme,
};

export default defaultTheme;
