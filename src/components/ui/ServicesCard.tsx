import React from "react";

type Service = {
  id: number;
  itemIcon: JSX.Element;
  label: string;
  info: string;
  readMore: string;
};

type Props = {
  servicesItem: Service[];
  ReadMoreSvg: React.ComponentType;
};

const ServicesCard = ({ servicesItem, ReadMoreSvg }: Props) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {servicesItem.map((service) => (
        <li
          key={service.id}
          className="bg-[#F9F9F9] rounded-xl w-full h-[345px] p-8"
        >
          <div className="mb-4 w-11 h-11">{service.itemIcon}</div>
          <h2 className="text-[#1D3A36] font-semibold text-[18px] mb-3">
            {service.label}
          </h2>
          <p className="text-[#666C66] text-base font-normal mb-5">
            {service.info}
          </p>
          <button className="font-medium flex items-center">
            {service.readMore}
            <div className="mx-2">
              <ReadMoreSvg />
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesCard;