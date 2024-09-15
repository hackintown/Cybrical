import Banner from "@/components/Careers/Banner/Banner";
import CareerOption from "@/components/Careers/CareerOption/CareerOption";
import ApproachCard from "@/components/Careers/OurApproach/ApproachCard";
import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const pathname = "/careers";
  const content = contentMap[pathname] || contentMap["/web-development"];
  return (
    <main>
      <Banner />
      <CareerOption />
      <OurApproach content={content} />
      <ApproachCard />
    </main>
  );
};

export default page;
