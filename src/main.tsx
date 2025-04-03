import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InvestmentSimulator from './InvestementSimulator.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InvestmentSimulator />
  </StrictMode>,
)
