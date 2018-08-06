import React, {Component} from 'react';
import {ThemeProvider} from 'react-jss';
import theme from './theme';

// TODO: Add ability to namespace the theme that is created
// export const ThemeWrapper = ({children}) => <ThemeProvider theme={theme}> {children} </ThemeProvider>;


export default class ThemeWrapper extends Component {
  render() {
    const mergedTheme = {...theme, ...this.props.theme};

    return (
      <ThemeProvider theme={mergedTheme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
