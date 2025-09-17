import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Atul VIP",
      address: "Mumbai, India",
      image: assets.testimonial_image_1,
      review:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },
    {
      name: "Durgesh MLA",
      address: "Pune, India",
      image: assets.testimonial_image_2,
      rating: 4,
      review:
        "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
    },
    {
      name: "Junaid Khan",
      address: "Nanded, India",
      image: assets.testimonial_image_1,

      review:
        "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results.",
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Costomers Say"
        subTitle="Discover why discerning travelers
         choose RideFlex for their luxury accommodations arround the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-bg p-6 rounded-xl shadow-lg hover:transition-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-text-muted">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star icons" />
                ))}
            </div>
            <p className="text-text-muted max-w-90 mt-4 font-light">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
