import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBooking from './pages/owner/ManageBooking'

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

        {/**Owner*/}
        <Route path='/owner' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='add-car' element={<AddCar/>}/>
        <Route path='manage-cars' element={<ManageCars/>}/>
        <Route path='manage-bookings' element={<ManageBooking/>}/>
        </Route>
      </Routes>

     {!isOwerPath && <Footer /> }
    </div>
  )
}

export default App
