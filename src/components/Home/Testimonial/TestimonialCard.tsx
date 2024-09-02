import Image from "next/image";
import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <div className="bg-white mt-52 lg:mt-6 w-[90%] ml-auto rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="relative -mt-44 lg:mt-0 lg:-ml-40 xl:-ml-44 mb-8 w-[80%] sm:w-[70%] md:w-[60%]  lg:mb-0 lg:w-[50%] lg:pr-10">
        <Image
          src="/images/testimonial1.webp"
          alt="Testimonial Image of Author"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-auto relative z-10"
        />
        <Image
          src="/images/apos.webp"
          alt="Decorative Element"
          width={140}
          height={140}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 lg:-top-20 lg:-left-2 lg:-translate-x-0 z-0 
          max-w-[120px] lg:max-w-[140px]"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:w-[65%] lg:mt-6">
        <h4 className="text-xl sm:text-2xl text-[#1D3A36] font-semibold mb-4 text-center lg:text-left">
          Contrary To popular belief
        </h4>
        <p className="text-tertiary-foreground font-light text-xs sm:text-sm mb-4 leading-loose xl:leading-8 text-center lg:text-left">
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
