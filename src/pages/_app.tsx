import NextApp from 'next/app'
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import {theme} from "@/styles/themes/default";
import "@/styles/scss/default.scss"

export default class App extends NextApp {

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
        // observe that both providers are using the same theme. this is for consistency.
        // Styled Component provider
        <StyledThemeProvider theme={theme}>
          {/* Material UI Provider*/}
          <MaterialThemeProvider theme={theme}>
            <Component {...pageProps} />
          </MaterialThemeProvider>
        </StyledThemeProvider>
    )
  }
}
