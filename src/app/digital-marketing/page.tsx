import Banner from "@/components/DigitalMarketing/Banner/Banner";
import DevServices from "@/components/DigitalMarketing/DevServices/DevServices";
import ApproachCard from "@/components/DigitalMarketing/OurApproach/ApproachCard";
import DigitalTechStack from "@/components/DigitalMarketing/TechStack/DigitalTechStack";
import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import TestimonialCard from "@/components/ui/Testimonial/TestimonialCard";
import TestimonialHeader from "@/components/ui/Testimonial/TestimonialHeader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const pathname = "/digital-marketing";
  const content = contentMap[pathname] || contentMap["/web-development"];
  return (
    <main>
      <Banner />
      <OurApproach content={content} />
      <ApproachCard />
      <DigitalTechStack />
      <div className="container relative overflow-visible">
        <TestimonialHeader />
        <TestimonialCard />
      </div>
      <div className="py-10 lg:py-16 container px-4">
        <DevServices />
      </div>
    </main>
  );
};

export default page;
