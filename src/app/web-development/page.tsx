import Testimonials from "@/components/ui/Testimonial/Testimonials";
import InfoDataCounter from "@/components/ui/InfoDataCounter";
import TechStack from "@/components/ui/TechStack";
import Banner from "@/components/WebDevelopment/Banner/Banner";
import OurApproach from "@/components/WebDevelopment/OurApproach";
import Services from "@/components/WebDevelopment/Services/Services";
import React from "react";
import TestimonialHeader from "@/components/ui/Testimonial/TestimonialHeader";
import TestimonialCard from "@/components/ui/Testimonial/TestimonialCard";
import CmoTechStack from "@/components/WebDevelopment/CmoTechStack";
import Leader from "@/components/WebDevelopment/Leader/Leader";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <main>
        <Banner />
        <InfoDataCounter />
        <OurApproach />
        <Services />
        <TechStack />
        <div className="relative py-6 lg:py-10 lg:pb-16">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url('/images/testimonial-bg-layer.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          />
          <div className="container relative overflow-visible">
            <TestimonialHeader />
            <TestimonialCard />
          </div>
        </div>
        <CmoTechStack />
        <Leader />
        <OurProcess />
      </main>
    </>
  );
};

export default page;
