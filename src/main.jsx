import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import phrases from './utils/phrases.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
    initIndex = {Math.floor(Math.random() * phrases.length)}
    />
  </React.StrictMode>,
)
