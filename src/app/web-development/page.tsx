import InfoDataCounter from "@/components/ui/InfoDataCounter";
import Banner from "@/components/WebDevelopment/Banner/Banner";
import OurApproach from "@/components/WebDevelopment/OurApproach";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <main>
        <Banner />
        <InfoDataCounter />
        <OurApproach />
      </main>
    </>
  );
};

export default page;
