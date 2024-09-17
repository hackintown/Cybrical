"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

const Portfolio = () => {
  const slides = [
    { imageUrl: "/images/about-sec-img.png", alt: "Project 1" },
    { imageUrl: "/images/about-sec-img.png", alt: "Project 2" },
    { imageUrl: "/images/about-sec-img.png", alt: "Project 3" },
  ];
  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/services-tab-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
      <div className="container pt-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-green-100 relative">
            OUR PORTFOLIO
            <span className="absolute inset-0 text-opacity-10 text-green-200">
              OUR PORTFOLIO
            </span>
          </h2>
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold -mt-5 relative">
            OUR PORTFOLIO
          </h5>
          <h3 className="text-2xl font-semibold mt-2">
            The Best Projects That We
            <br />
            <span className="text-accent">Have Delivered</span>
          </h3>
          <p className="text-tertiary-foreground mt-2 lg:max-w-[590px] lg:mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative w-full max-w-5xl mx-auto py-16">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={-20}
              coverflowEffect={{
                rotate: 30, // Control the rotation
                stretch: 0,
                depth: 250, // Controls the perspective depth
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2000, // Slide every 2 seconds
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
              className="swiper-container"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
