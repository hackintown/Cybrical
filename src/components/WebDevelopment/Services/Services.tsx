import ServicesCard from "@/components/ui/ServicesCard";
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

interface ServicesItem {
  id: number;
  itemIcon: JSX.Element;
  label: string;
  info: string;
  readMore: string;
}

const Services = () => {
  const servicesItem: ServicesItem[] = [
    {
      id: 1,
      itemIcon: <WebSvg />,
      label: "Web development",
      info: "Our team of highly trained professionals will help take your business to the web and help it reach online audiences effectively work with us to get all the insights and expertise.",
      readMore: "Read more",
    },
    {
      id: 2,
      itemIcon: <InterfaceSvg />,
      label: "Interface design",
      info: "Our mobile app development is done with creativity and precision, so your business can seamlessly transition from website to app Build your brand engagement.",
      readMore: "Read more",
    },
    {
      id: 3,
      itemIcon: <AppDevSVg />,
      label: "Application development",
      info: "We develop highly adaptive and functional web applications using the latest tools and cutting edge technologies. Get in touch with us to discuss your requirements.",
      readMore: "Read more",
    },
    {
      id: 4,
      itemIcon: <MblAppDevSVg />,
      label: "Mobile App development",
      info: "Our mobile app development is done with creativity and precision, so your business can seamlessly transition from website to app Build your brand engagement.",
      readMore: "Read more",
    },
    {
      id: 5,
      itemIcon: <SupportSVg />,
      label: "Web support and maintenance",
      info: "Are you dealing with security patches, legacy code, or broken links on the website? Let our experts keep your website up-to-date, secure and bug-free.",
      readMore: "Read more",
    },
  ];
  return (
    <div className="container px-4 pb-4 lg:pb-8">
      <ServicesCard servicesItem={servicesItem} ReadMoreSvg={ReadMoreSVg} />
    </div>
  );
};
export default Services;
