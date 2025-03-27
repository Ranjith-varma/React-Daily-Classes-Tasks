import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Greet } from './App.jsx'
import OrderPizza from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greet />
    <OrderPizza/>
  </StrictMode>,
)
