import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import CountProvider from './contexts/count'
import TodosProvider from './contexts/todos'

import './styles/reset.css'
import './styles/styles.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <TodosProvider>
    <CountProvider>
      <App />
    </CountProvider>
  </TodosProvider>
)
