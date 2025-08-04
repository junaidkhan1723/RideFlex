import React, {useState } from 'react'
import { assets, cityList } from '../assets/assets'
import Slider from './Slider'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('');

  return (
    <div className=' flex flex-col items-center justify-center sm:mt-4 gap-4 sm:gap-6 bg-bg-dark text-center'>

      {/** Main Heading */}
      <h1 className='text-4xl md:text-5xl font-semibold'>Find and Rent Your Pefect Car & Bike </h1>

      {/** PickUp Form */}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between
      p-6 rounded-md sm:rounded-full w-full md:max-w-200 bg-bg shadow-[0px_8px_20px_rgba(0,0,0,0.1)]' action="">

      {/**Pickup Location*/}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
          <div className='flex flex-col items-start sm:gap-2'>
            <select required value={pickupLocation} onChange={(e)=> setPickupLocation(e.target.value) }>
              <option value="">Pickup Location</option>
              {cityList.map((city)=>(
                <option className='text-gray-700' key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className='px-1 text-sm text-text-muted'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
          </div>
 
      {/**Pickup Date*/}        
          <div className='flex flex-col items-start sm:gap-2'>
           <label htmlFor="pickup-date">Pick-up Date</label>
           <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} 
           className='text-sm text-text-muted' required />
          </div>

      {/**Return Date */}
           <div className='flex flex-col items-start sm:gap-2'>
           <label htmlFor="return-date">Return Date</label>
           <input type="date" id="return-date" min={new Date().toISOString().split('T')[0]} 
           className='text-sm text-text-muted' required />
          </div>
        </div>
         {/** Search btn*/}
          <button className=' flex items-center justify-center gap-1 cursor-pointer px-9 py-3 max-sm:mt-4 bg-primary hover:bg-info transition-all 
            rounded-full text-white text-shadow-lg'>
            <img src={assets.search_icon} alt="search" className='brightness-300' />
            Search
            </button>
      </form>

      {/** Slider */}      
      <Slider/>
    </div>
  )
}

export default Hero
