import Image from "next/image";
import React from "react";
import Button from "./Button";

type List = {
  title: string;
  description: string;
};

interface ListingCardProps {
  headTitle: string;
  accentHead: string;
  imgSrc: string;
  listing: List[];
  imageAlt: string;
  paragraph: string;
  btn: string;
}

const ListingCard = ({
  headTitle,
  accentHead,
  imgSrc,
  imageAlt,
  paragraph,
  listing,
  btn,
}: ListingCardProps) => {
  return (
    <div className=" p-9 rounded-lg shadow-custom-light transition-transform transform hover:scale-105 hover:shadow-xl duration-300 bg-white">
      <div className="flex flex-col gap-4">
        {imgSrc && (
          <div className="">
            <Image
              src={imgSrc}
              width={32}
              height={32}
              className="w-8 h-8"
              alt={imageAlt}
            />
          </div>
        )}

        <h3 className="text-base font-semibold">{headTitle}</h3>
        {paragraph && <p>{paragraph}</p>}
        <ul className="space-y-2">
          {listing.map((step, index) => (
            <li key={index} className="flex items-start space-x-4">
              <Image
                src="/images/right-arrow-icon.webp"
                width={20}
                height={20}
                alt={imageAlt}
                className="text-[#01AA03] w-5 h-5 transition-transform transform hover:scale-125 duration-300"
              />
              <div>
                <h3 className="text-sm">
                  {step.title && step.title}
                  <span className="text-tertiary-foreground text-sm mx-1 font-normal">
                    {step.description}
                  </span>
                </h3>
              </div>
            </li>
          ))}
        </ul>
        {btn && (
          <Button className="max-w-[150px] w-full text-sm mt-5">{btn}</Button>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
