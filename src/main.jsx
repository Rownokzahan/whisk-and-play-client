import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1440px] mx-auto px-2 md:px-12 lg:px-14'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
