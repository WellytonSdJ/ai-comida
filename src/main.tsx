import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from '@/pages/main-page'

import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Normalize />
    <MainPage />
  </React.StrictMode>,
)
