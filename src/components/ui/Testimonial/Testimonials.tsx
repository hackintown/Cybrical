import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialNavigation from "./TestimonialNavigation";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/testimonial-bg-layer.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />
      <div className="container relative overflow-visible">
        <TestimonialHeader />

        <TestimonialCard />

        <div className="my-20">
          <TestimonialNavigation />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
