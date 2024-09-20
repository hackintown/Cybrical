import React, { memo } from "react";
import Link from "next/link";

type Service = {
  id: number;
  itemIcon: JSX.Element;
  label: string;
  info: string;
  readMore: string;
  href?: string;
};

type Props = {
  servicesItem: Service[];
  ReadMoreSvg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ServiceItem = memo(
  ({
    service,
    ReadMoreSvg,
  }: {
    service: Service;
    ReadMoreSvg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }) => (
    <li className="bg-[#F9F9F9] rounded-xl w-full h-[345px] shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
      <Link href={service.href || ""} className="h-full p-8 flex flex-col">
        <div className="mb-4 w-11 h-11">{service.itemIcon}</div>
        <h2 className="text-[#1D3A36] font-semibold text-[18px] mb-3">
          {service.label}
        </h2>
        <p className="text-[#666C66] text-base font-normal mb-5 flex-grow">
          {service.info}
        </p>
        <div className="font-medium flex items-center text-primary">
          {service.readMore}
          <div className="ml-2">
            <ReadMoreSvg className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </li>
  )
);

ServiceItem.displayName = "ServiceItem";

const ServicesCard = ({ servicesItem, ReadMoreSvg }: Props) => {
  if (!servicesItem || servicesItem.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No services available at the moment.
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {servicesItem.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          ReadMoreSvg={ReadMoreSvg}
        />
      ))}
    </ul>
  );
};

export default memo(ServicesCard);




