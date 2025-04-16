import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// Import Components
import { PortfolioApp } from './PortfolioApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioApp/>
  </StrictMode>,
)
