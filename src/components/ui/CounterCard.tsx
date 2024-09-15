import Image from "next/image";
import React from "react";

type Props = {
  imgSrc: string;
  count: string;
  title: string;
};

const CounterCard = ({ imgSrc, count, title }: Props) => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 lg:flex-row items-center lg:items-start justify-center bg-[#13182C] px-2 lg:px-6 py-6 lg:py-14 rounded-xl">
        <div className="bg-[#66F3AF] rounded-full w-14 h-14 flex items-center justify-center">
          <Image
            src={imgSrc}
            width={24}
            height={24}
            className="w-6 h-6"
            alt={title}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-white text-2xl font-semibold text-center lg:text-left">
            {count}
          </h2>
          <p className="text-[#D7D7D7] uppercase text-sm text-center lg:text-left">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
