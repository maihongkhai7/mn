import React from 'react'
import Header from './components/Header'
import {ThemeProvider} from 'styled-components'
import theme from './styled/themeDefault'

const App=()=>{

  return(
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider> 
  )
}

export default App
    