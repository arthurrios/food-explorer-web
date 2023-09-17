import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'
import { Home } from './pages/Home'

import { themeDark } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <GlobalStyles />
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
