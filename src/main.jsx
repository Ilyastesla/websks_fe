import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Carousel from './components/templates/Carousel';
import Carousel1 from './components/templates/Carousel1';
import HeroPage2 from './components/templates/HeroPage2';
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
    path: '/carousel1',
    element: <Carousel1 />,
  },
  {
    path: '/carousel',
    element: <Carousel />,
  },
  {
    path: '/heropage2',
    element: <HeroPage2 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
