import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CounterProvider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CounterProvider>
    <App />
  </CounterProvider>,
)
