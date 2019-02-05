import * as React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  typography: {
    useNextVariants: true,
  },
})

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
