import AboutDetails from "@/components/AboutUs/AboutDetails/AboutDetails";
import Banner from "@/components/AboutUs/Banner/Banner";
import DataCounter from "@/components/AboutUs/DataCounter";
import FAQSection from "@/components/ui/FAQSection";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <Banner />
      <AboutDetails />
      <FAQSection />
      <div className="py-10">
        <DataCounter />
      </div>
    </main>
  );
};

export default page;
