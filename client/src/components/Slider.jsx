import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Autoplay,
  EffectFade,
  Thumbs,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

import { assets } from '../assets/assets';

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const images = [
     assets.Car1, 
     assets.Bike3,
    assets.Car2,assets.Bike6,
    assets.Car4,assets.Bike1,assets.Car8,assets.Bike7,assets.Car6 
  ];

  return (
    <div className="w-full sm:max-w-3xl mx-auto sm:my-2">
      {/* Main Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="rounded-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] px-2 sm:px-0 sm:h-[400px] object-cover object-center rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={9}
        watchSlidesProgress
        className="mt-2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Thumb ${index + 1}`}
              className="w-full h-[20px] sm:h-[60px] object-cover object-center rounded-sm cursor-pointer border border-text-muted hover:border-blue-500 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
