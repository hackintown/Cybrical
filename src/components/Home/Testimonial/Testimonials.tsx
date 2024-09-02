import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialNavigation from "./TestimonialNavigation";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="py-16 px-4 lg:px-24 container overflow-visible">
      {/* <Image
        src="/images/testimonial-bg-layer.webp"
        width={500}
        height={500}
        className="w-full h-full object-cover"
        alt="testimonial-bg-layer absolute top-1/2"
      /> */}

      <TestimonialHeader />

      <TestimonialCard />

      <div className="mt-20">
        <TestimonialNavigation />
      </div>
    </div>
  );
};

export default Testimonials;
