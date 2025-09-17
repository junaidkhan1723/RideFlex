import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import Slider from './Slider'

const Hero = () => {
  // Get today's date
  const today = new Date()
  const todayStr = today.toISOString().split('T')[0]

  // Function to get next day's date string
  const getNextDay = (date) => {
    const nextDay = new Date(date)
    nextDay.setDate(nextDay.getDate() + 1)
    return nextDay.toISOString().split('T')[0]
  }

  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDate, setPickupDate] = useState(todayStr)
  const [returnDate, setReturnDate] = useState(getNextDay(today))

  const handlePickupDateChange = (e) => {
    const newPickupDate = e.target.value
    setPickupDate(newPickupDate)
    setReturnDate(getNextDay(newPickupDate))
  }

  return (
    <div className='flex flex-col items-center justify-center sm:mt-4 gap-4 sm:gap-6 bg-bg-dark text-center'>

      {/** Main Heading */}
      <h1 className='text-4xl md:text-5xl font-semibold'>Find and Rent Your Perfect Car & Bike</h1>

      {/** PickUp Form */}
      <form
        className='flex flex-col md:flex-row items-start md:items-center justify-between
        p-6 rounded-md sm:rounded-full w-full md:max-w-200 bg-bg shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'
        action=""
      >
         {/**Pickup Location*/}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 min-md:ml-8'>
          <div className='flex flex-col items-start sm:gap-2 sm:border-none rounded-md border border-border-muted'>
            <select required value={pickupLocation} onChange={(e)=> setPickupLocation(e.target.value) }>
              <option value="">Pickup Location</option>
              {cityList.map((city)=>(
                <option className='text-gray-700' key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className='px-1 text-sm text-text-muted'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
          </div>
          {/** Pickup Date */}
          <div className='flex flex-col items-start sm:gap-2 sm:border-none rounded-md border border-border-muted'>
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input
              type="date"
              id="pickup-date"
              min={todayStr}
              value={pickupDate}
              onChange={handlePickupDateChange}
              className='text-sm text-text-muted'
              required
            />
          </div>

          {/** Return Date */}
          <div className='flex flex-col items-start sm:gap-2 sm:border-none rounded-md border border-border-muted'>
            <label htmlFor="return-date">Return Date</label>
            <input
              type="date"
              id="return-date"
              min={getNextDay(pickupDate)}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className='text-sm text-text-muted'
              required
            />
          </div>
        </div>

        {/** Search Button */}
        <button
          className='flex items-center justify-center gap-1 cursor-pointer px-9 py-3 max-sm:mt-4 bg-primary hover:bg-info transition-all 
            rounded-full text-white text-shadow-lg'
        >
          <img src={assets.search_icon} alt="search" className='brightness-300' />
          Search
        </button>
      </form>

      {/** Slider */}
      <Slider />
    </div>
  )
}

export default Hero
