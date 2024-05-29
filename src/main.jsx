import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import DashboardPage from "./components/pages/DashboardPage"
import HomeSchoolingKakSetoPage from "./components/pages/HomeSchoolingKakSetoPage"
import KakSetoSchoolPage from "./components/pages/KakSetoSchoolPage"
import SekolahKhususKakSetoPage from "./components/pages/SekolahKhususKakSetoPage"
import KakSetoLearningCenterPage from "./components/pages/KakSetoLearningCenterPage"
import { HelmetProvider } from "react-helmet-async"
import HomePage from "./components/pages/undangan/HomePage"
import AbsenPage from "./components/pages/undangan/AbsenPage"
import SalamPage from "./components/pages/undangan/SalamPage"
import LinktreePage from "./components/pages/LinktreePage"
import LokasiPage from "./components/pages/undangan/LokasiPage"
import InfoPage from "./components/pages/undangan/InfoPage"

const BASE_URL = "http://192.168.207.190:5173/"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/homeschooling-kak-seto",
    element: <HomeSchoolingKakSetoPage />,
  },
  {
    path: "/kak-seto-school",
    element: <KakSetoSchoolPage />,
  },
  {
    path: "/sekolah-khusus-kak-seto",
    element: <SekolahKhususKakSetoPage />,
  },
  {
    path: "/kak-seto-learning-center",
    element: <KakSetoLearningCenterPage />,
  },
  {
    path: "/linktree",
    element: <LinktreePage />,
  },
  {
    path: "/undangan",
    element: <HomePage />,
  },
  {
    path: "/undangan/lokasi",
    element: <LokasiPage />,
  },
  {
    path: "/undangan/info",
    element: <InfoPage />,
  },
  {
    path: "/undangan/qrcode",
    element: <AbsenPage />,
  },
  {
    path: "/undangan/salam",
    element: <SalamPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)

export default BASE_URL
