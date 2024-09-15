import Banner from "@/components/QualityAssurance/Banner/Banner";
import DataCounter from "@/components/QualityAssurance/DataCounter";
import ExpertsHand from "@/components/QualityAssurance/ExpertsHand/ExpertsHand";
import ApproachCard from "@/components/QualityAssurance/OurApproach/ApproachCard";
import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const pathname = "/quality-assurance";
  const content = contentMap[pathname] || contentMap["/web-development"];
  return (
    <main>
      <Banner />
      <OurApproach content={content} />
      <ApproachCard />
      <ExpertsHand />
      <DataCounter />
    </main>
  );
};

export default page;
