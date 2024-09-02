import Image from "next/image";
import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <div className="bg-white w-[90%]  mx-auto rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="relative mb-8 lg:mb-0 lg:w-[50%] lg:pr-8">
        <Image
          src="/images/testimonial1.webp"
          alt="Testimonial Image of Author"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />
        <Image
          src="/images/apos.webp"
          alt="Decorative Element"
          width={140}
          height={140}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 lg:-top-24 lg:left-1/4 lg:-translate-x-0 z-0 max-w-[120px] lg:max-w-[140px]"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:w-[50%]">
        <h4 className="text-2xl text-[#1D3A36] font-semibold mb-4 text-center lg:text-left">
          Contrary To popular belief
        </h4>
        <p className="text-tertiary-foreground font-light text-sm mb-4 leading-loose text-center lg:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p className="font-semibold text-[#1D3A36] text-center lg:text-left">
          Marya Jon
        </p>
        <p className="text-sm text-[#838383] text-center lg:text-left">
          Managing Director
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
