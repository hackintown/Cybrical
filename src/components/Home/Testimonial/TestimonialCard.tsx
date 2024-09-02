import Image from "next/image";
import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <div className="bg-white w-[90%] mx-auto rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center">
      <div className="relative -left-44 max-w-[358px] w-full">
        <div className="relative w-full">
          <Image
            src="/images/testimonial1.webp"
            alt="Testimonial Image of Author"
            width={500}
            height={500}
            className="rounded-lg object-cover z-10 w-full h-auto"
          />
          <Image
            src="/images/apos.webp"
            alt="Decorative Element"
            width={140}
            height={140}
            className="rounded-lg object-cover absolute -top-20 -left-1 z-0"
          />
        </div>
      </div>
      <div className="relative -left-24">
        <h4 className="text-2xl text-[#1D3A36] font-semibold mb-4">
          Contrary To popular belief
        </h4>
        <p className="text-tertiary-foreground font-light text-sm mb-4 leading-loose">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p className="font-semibold text-[#1D3A36]">Marya Jon </p>
        <p className="text-sm text-[#838383]">Managing Director</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
