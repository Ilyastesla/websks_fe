import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import DashboardPage from './components/pages/DashboardPage'
import HomeSchoolingKakSetoPage from './components/pages/HomeSchoolingKakSetoPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/homeschooling-kak-seto',
    element: <HomeSchoolingKakSetoPage />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/homeschooling-kak-seto',
    element: <HomeSchoolingKakSetoPage />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/homeschooling-kak-seto',
    element: <HomeSchoolingKakSetoPage />,
    // errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
