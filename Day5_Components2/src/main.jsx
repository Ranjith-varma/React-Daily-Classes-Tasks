import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Table } from './Components/Table'
import { Cards } from './Components/Cards'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Table/>
  <Cards/>
  </StrictMode>,
)
