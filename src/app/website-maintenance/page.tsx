import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import Banner from "@/components/WebsiteMaintenance/Banner/Banner";
import CareSec from "@/components/WebsiteMaintenance/CareSec/CareSec";
import ExpertHand from "@/components/WebsiteMaintenance/ExpertHand/ExpertHand";
import FractionCost from "@/components/WebsiteMaintenance/FractionCost/FractionCost";
import NeedsCard from "@/components/WebsiteMaintenance/NeedSec/NeedsCard";
import NextProject from "@/components/WebsiteMaintenance/NextProject/NextProject";
import ApproachCard from "@/components/WebsiteMaintenance/OurApproach/ApproachCard";
import ProblemFaced from "@/components/WebsiteMaintenance/ProblemFacedSec/ProblemFaced";
import StreamLined from "@/components/WebsiteMaintenance/StreamLinedSec/StreamLined";
import ThirdParty from "@/components/WebsiteMaintenance/ThirdParty/ThirdParty";
import WhyInvest from "@/components/WebsiteMaintenance/WhyInvest/WhyInvest";
import React from "react";

const page = () => {
  const pathname = "/website-maintenance";
  const content = contentMap[pathname] || contentMap["/web-development"];

  return (
    <main>
      <Banner />
      <OurApproach content={content} />
      <ApproachCard />
      <NeedsCard />
      <ProblemFaced />
      <CareSec />
      <StreamLined />
      <NextProject />
      <FractionCost />
      <ExpertHand />
      <WhyInvest />
      <ThirdParty />
    </main>
  );
};

export default page;
