import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'

const doc:  HTMLElement = document.getElementById('root')!;

createRoot(doc).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
