import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CarCard = ({car}) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

  return (
    <div onClick={()=>{navigate('/car-details/${car._id}'); scrollTo(0,0)}} className='group bg-bg rounded-xl overflow-hidden shadow-lg hover:translate-y-1
    transition-all duration-500 cursor-pointer '>
      
      <div className='relative h-48 overflow-hidden'>
        <img src={car.image} alt="Car Image" className='w-full h-full object-cover 
        transition-transform duration-500 group-hover:scale-105'/>

        {car.isAvaliable && <p className='absolute top-4 left-4 bg-primary/90 text-text text-xs px-2.5 
        py-1 rounded-full'>Available Now</p>}

        <div className='absolute bottom-4 right-4 bg-bg backdrop-blur-sm
        text-text px-3 py-2 rounded-lg'>
            <span className='font-semibold'>{currency}{car.pricePerDay}</span>
            <span className='text-sm text-text/80 '> / day</span>
        </div>
      </div>



      <div className='p-4 sm:p-5'>
            <div className='flex justify-between items-start mb-2'>
                <div>
                        <h3 className='text-lg font-medium'>
                            {car.brand} {car.model}
                            <p className='text-text-muted text-sm'>{car.category} . {car.year}</p>
                        </h3>
                </div>
            </div>
            <div className='mt-4 grid grid-cols-2 text-text-muted'> 
                <div className='flex items-center text-sm text-text-muted'>
                    <img src={assets.users_icon} alt="" className='h-4 mr-2'/>
                    <span>{car.seating_capacity} Seats</span>
                </div>

                 <div className='flex items-center text-sm text-text-muted'>
                    <img src={assets.fuel_icon} alt="" className='h-4 mr-2'/>
                    <span>{car.fuel_type}</span>
                </div>

                
                 <div className='flex items-center text-sm text-text-muted'>
                    <img src={assets.car_icon} alt="" className='h-4 mr-2'/>
                    <span>{car.transmission}</span>
                </div>


                 <div className='flex items-center text-sm text-text-muted'>
                    <img src={assets.location_icon} alt="" className='h-4 mr-2'/>
                    <span>{car.location}</span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CarCard
