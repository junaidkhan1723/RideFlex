import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const isOwerPath = useLocation().pathname.startsWith('/owner')

  // Apply or remove the `.light` class from <body>
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
  }, [isLightMode])

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        color: 'var(--color-text)',
      }}
    >
      {!isOwerPath && (
        <Navbar
          isLightMode={isLightMode}
          setIsLightMode={setIsLightMode}
          setShowLogin={setShowLogin}
       />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </div>
  )
}

export default App
