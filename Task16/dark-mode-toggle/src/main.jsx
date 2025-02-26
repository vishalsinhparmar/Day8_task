import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToggleContext } from './components/context/ToggleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ToggleContext>
       <App />
    </ToggleContext>
  </StrictMode>,
)
