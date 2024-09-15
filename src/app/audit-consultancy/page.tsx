import Banner from "@/components/AuditConsultancy/Banner/Banner";
import DataCounter from "@/components/AuditConsultancy/DataCounter/DataCounter";
import Portfolio from "@/components/ui/Portfolio/Portfolio";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <Banner />
      <Portfolio />
      <DataCounter />
    </main>
  );
};

export default page;
