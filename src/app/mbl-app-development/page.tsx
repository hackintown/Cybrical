import Banner from "@/components/MobileAppDevelopment/Banner/Banner";
import DigitalSec from "@/components/MobileAppDevelopment/DigitalSec/DigitalSec";
import ApproachCard from "@/components/MobileAppDevelopment/OurApproach/ApproachCard";
import ProcessSec from "@/components/MobileAppDevelopment/ProcessSec/ProcessSec";
import MblTechStack from "@/components/MobileAppDevelopment/TechStack/MblTechStack";
import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import TestimonialCard from "@/components/ui/Testimonial/TestimonialCard";
import TestimonialHeader from "@/components/ui/Testimonial/TestimonialHeader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const pathname = "/mbl-app-development";
  const content = contentMap[pathname] || contentMap["/web-development"];
  return (
    <main>
      <Banner />
      <OurApproach content={content} />
      <ApproachCard />
      <MblTechStack />
      <div className="container relative overflow-visible">
        <TestimonialHeader />
        <TestimonialCard />
        <ProcessSec />
        <DigitalSec />
      </div>
    </main>
  );
};

export default page;
