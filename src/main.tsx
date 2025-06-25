import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { mirageServer } from './lib/mirage'

if (import.meta.env.ENVIRONMENT === 'DEVELOPMENT') {
  mirageServer({ environment: 'development' })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
