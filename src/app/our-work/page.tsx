import Banner from "@/components/OurWork/Banner/Banner";
import WorkCard from "@/components/OurWork/WorkCard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <Banner />
      <WorkCard />
    </main>
  );
};

export default page;
