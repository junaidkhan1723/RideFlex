import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets.js";
import Loader from "../components/Loader";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundCar = dummyCarData.find((car) => String(car._id) === String(id));
      setCar(foundCar || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-text-muted cursor-pointer"
        >
          <img
            src={assets.arrow_icon}
            alt="back"
            className="rotate-180 opacity-65"
          />
          Back to all vehicles
        </button>
        <p className="text-red-500 text-lg">🚫 Vehicle not found</p>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-text-muted cursor-pointer"
      >
        <img
          src={assets.arrow_icon}
          alt="back"
          className="rotate-180 opacity-65"
        />
        Back to all vehicles
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/** Vehicle details */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={car.brand}
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-text-muted text-lg">
                {car.category} {car.year}
              </p>
            </div>
            <hr className="border-border my-6" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`,
                },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.car_icon, text: car.transmission },
                { icon: assets.location_icon, text: car.location },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center bg-bg-light p-4 rounded-lg"
                >
                  <img src={icon} alt="" className="h-5 mb-2" />
                  {text}
                </div>
              ))}
            </div>

            {/** description */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p className="text-text-muted">{car.description}</p>
            </div>
          </div>
        </div>

        {/** booking form */}
        <form action=""></form>
      </div>
    </div>
  );
};

export default CarDetails;