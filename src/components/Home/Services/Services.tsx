import React from "react";
import {
  WebSvg,
  AppDevSVg,
  InterfaceSvg,
  MblAppDevSVg,
  SupportSVg,
  MarketingSVg,
  ReadMoreSVg,
} from "./icons";
import Button from "@/components/ui/Button";

interface ServicesItem {
  id: number;
  itemIcon: JSX.Element;
  label: string;
  info: string;
  readMore: string;
}

const Services: React.FC = () => {
  const servicesItem: ServicesItem[] = [
    {
      id: 1,
      itemIcon: <WebSvg />,
      label: "Web development",
      info: "Our team of highly trained professionals will help take your business to the web and help it reach online audiences effectively work with us to get all the insights and expertise.",
      readMore: "Read more",
      //   readMoreIcon: <ReadMoreIcon />,
    },
    {
      id: 2,
      itemIcon: <InterfaceSvg />,
      label: "Interface design",
      info: "Our mobile app development is done with creativity and precision, so your business can seamlessly transition from website to app Build your brand engagement.",
      readMore: "Read more",
      //   readMoreIcon: <ReadMoreIcon />,
    },
    {
      id: 3,
      itemIcon: <AppDevSVg />,
      label: "Application development",
      info: "We develop highly adaptive and functional web applications using the latest tools and cutting edge technologies. Get in touch with us to discuss your requirements.",
      readMore: "Read more",
      //   readMoreIcon: <ReadMoreIcon />,
    },
    {
      id: 4,
      itemIcon: <MblAppDevSVg />,
      label: "Mobile App development",
      info: "Our mobile app development is done with creativity and precision, so your business can seamlessly transition from website to app Build your brand engagement.",
      readMore: "Read more",
      //   readMoreIcon: <ReadMoreIcon />,
    },
    {
      id: 5,
      itemIcon: <SupportSVg />,
      label: "Web support and maintenance",
      info: "Are you dealing with security patches, legacy code, or broken links on the website? Let our experts keep your website up-to-date, secure and bug-free.",
      readMore: "Read more",
      //   readMoreIcon: <ReadMoreIcon />,
    },
    {
      id: 6,
      itemIcon: <MarketingSVg />,
      label: "Digital marketing",
      info: "Digital marketing is no longer an option but a necessity. We provide the best digital marketing services with our expert knowledge on strategy, design, and development.",
      readMore: "Read more",
      //   readMoreIcon: <ReadMoreIcon />,
    },
  ];
  return (
    <div className="w-full py-10">
      <div className="container">
        <div className="text-center md:flex justify-between items-center mb-10">
          <div className="">
            <h5 className="text-accent text-xs sm:text-base font-semibold my-1">
              OUR SERVICES
            </h5>
            <h2 className="text-[1.4rem] sm:text-2xl text-center md:text-center font-bold leading-snug mb-1">
              Perfect Blend of Intuitive Design
              <span className="text-accent"> and latest Technology</span>
            </h2>
          </div>
          <div>
            <p className="text-secondary-foreground text-base">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <Button className="mt-6 font-base ">Browse All Services</Button>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {servicesItem.map((service) => (
            <li
              key={service.id}
              className="bg-[#F9F9F9] rounded-xl w-full h-[345px] p-8 mx-3"
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
                  <ReadMoreSVg />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
