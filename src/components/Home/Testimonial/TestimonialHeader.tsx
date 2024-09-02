import React from "react";

const TestimonialHeader = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-6xl font-bold text-green-100 relative">
        TESTIMONIAL
        <span className="absolute inset-0 text-opacity-10 text-green-200">
          TESTIMONIAL
        </span>
      </h2>
      <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold -mt-5 relative">
        TESTIMONIAL
      </h5>
      <h3 className="text-2xl font-semibold mt-4">
        Clients love our <span className="text-green-600">services</span>
      </h3>
      <p className="text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
};

export default TestimonialHeader;
