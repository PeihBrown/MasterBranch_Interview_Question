import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './app/provider'
import { Router } from './app/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>,
)
