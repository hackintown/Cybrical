import InfoDataCounter from "@/components/ui/InfoDataCounter";
import TechStack from "@/components/ui/TechStack";
import Banner from "@/components/WebDevelopment/Banner/Banner";
import OurApproach from "@/components/WebDevelopment/OurApproach";
import Services from "@/components/WebDevelopment/Services/Services";
import React from "react";

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
      </main>
    </>
  );
};

export default page;
