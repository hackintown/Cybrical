import Banner from "@/components/CloudDevops/Banner/Banner";
import DataCounter from "@/components/CloudDevops/DataCounter/DataCounter";
import ApproachCard from "@/components/CloudDevops/OurApproach/ApproachCard";
import CloudTechStack from "@/components/CloudDevops/TechStack/CloudTechStack";
import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const pathname = "/cloud-devops";
  const content = contentMap[pathname] || contentMap["/web-development"];
  return (
    <main>
      <Banner />
      <OurApproach content={content} />
      <ApproachCard />
      <CloudTechStack />
      <div className="my-12 sm:my-16 lg:my-20">
        <DataCounter />
      </div>
    </main>
  );
};

export default page;
