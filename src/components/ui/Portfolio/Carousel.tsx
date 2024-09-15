"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    cssEase: "ease-in-out",
    perspective: "100px",
  };

  return (
    <div className="w-4/5 mx-auto py-12">
      <Slider {...settings}>
        <div className={`${styles.slide} relative`}>
          <Image
            src="/images/portfolio-slide3.png"
            alt="Project 1"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className={`${styles.slide} relative`}>
          <Image
            src="/images/portfolio-slide1.png"
            alt="Project 2"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className={`${styles.slide} relative`}>
          <Image
            src="/images/portfolio-slide2.png"
            alt="Project 3"
            width={800}
            height={600}
            className="rounded-lg shadow-lg p-0 m-0"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
