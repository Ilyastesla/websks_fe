import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import DashboardPage from './components/pages/DashboardPage'
import HomeSchoolingKakSetoPage from './components/pages/HomeSchoolingKakSetoPage'
import KakSetoLearningCenter from './components/pages/KakSetoLearningCenter'
import SekolahKhususKakSeto from './components/pages/SekolahKhususKakSeto'
import KakSetoSchoolPage from './components/pages/KakSetoSchoolPage'

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
    path: '/learningcenter-kak-seto',
    element: <KakSetoLearningCenter />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/sekolahkhusus-kak-seto',
    element: <SekolahKhususKakSeto />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/school-kak-seto',
    element: <KakSetoSchoolPage/>,
    // errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
