"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const TestimonialCard: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Marya Jon",
      title: "Managing Director",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg",
    },
    {
      name: "Manoj Kumar",
      title: "Managing Director",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://img.freepik.com/free-photo/portrait-female-tourist-visiting-great-wall-china_23-2151261878.jpg",
    },
    {
      name: "Pankaj Kumar",
      title: "Managing Director",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://fashionstake.com/wp-content/uploads/2016/12/Indian-Beautiful-Girls.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Autoplay feature using useEffect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (currentSlide < testimonials.length - 1) {
        nextSlide();
      } else {
        setCurrentSlide(0); // Loop back to the first slide
      }
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [currentSlide]);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="bg-white mt-52 lg:mt-6 w-full lg:w-[88%] ml-auto rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="relative -mt-44 lg:mt-0 lg:-ml-40 xl:-ml-44 mb-8 w-[80%] sm:w-[70%] md:w-[60%] lg:mb-0 lg:w-[50%] lg:pr-10">
        <div className="max-w-[358p] w-full h-[250px] sm:h-[338px]">
          <Image
            src={currentTestimonial.image}
            alt={`Testimonial Image of ${currentTestimonial.name}`}
            fill={true}
            className="rounded-lg object-cover w-full h-full relative z-10"
          />
        </div>

        <Image
          src="/images/apos.webp"
          alt="Decorative Element"
          width={140}
          height={140}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 lg:-top-20 lg:-left-2 lg:-translate-x-0 z-0 
          max-w-[120px] lg:max-w-[140px]"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start lg:w-[65%] lg:mt-6 lg:ml-8 relative">
        <h4 className="text-xl sm:text-2xl text-[#1D3A36] font-semibold mb-4 text-center lg:text-left">
          {currentTestimonial.title}
        </h4>
        <p className="text-tertiary-foreground font-light text-xs sm:text-sm mb-4 leading-loose xl:leading-8 text-center lg:text-left">
          {currentTestimonial.quote}
        </p>
        <p className="font-semibold text-[#1D3A36] text-center lg:text-left">
          {currentTestimonial.name}
        </p>
        <p className="text-sm text-[#838383] text-center lg:text-left">
          {currentTestimonial.title}
        </p>
        {/* Arrow Controls */}
        <div className="absolute bottom-0 right-0 flex space-x-2 p-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowCircleLeft className="size-6 text-[#01AA03]" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === testimonials.length - 1}
            className={`${
              currentSlide === testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <FaCircleArrowRight className="size-6 text-[#01AA03]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
