import ApproachCard from "@/components/AgileDevelopment/OurApproach/ApproachCard";
import Banner from "@/components/AppDevelopment/Banner/Banner";
import AppTechStack from "@/components/AppDevelopment/TechStack/AppTechStack";
import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const pathname = "/application-development";
  const content = contentMap[pathname] || contentMap["/web-development"];
  return (
    <main>
      <Banner />
      <OurApproach content={content} />
      <ApproachCard />
      <AppTechStack />
      <OurProcess />
    </main>
  );
};

export default page;
