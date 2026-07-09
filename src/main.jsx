import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import favicon from './assets/favicon.svg'; // 1. ምስሉን እዚህ ጋር እንጠራዋለን

// 2. ይህ ሎጂክ በ HTML ላይ ያለውን የ Favicon ሊንክ በራስ-ሰር ያስተካክላል
const link = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = favicon;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})