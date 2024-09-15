import FAQSection from "@/components/ui/FAQSection";
import Banner from "@/components/HireDevelopers/Banner/Banner";
import React from "react";
import DedicatedTeam from "@/components/HireDevelopers/DedicatedTeam/DedicatedTeam";
import ExpectSec from "@/components/HireDevelopers/ExpectSec/ExpectSec";
import DemandSec from "@/components/HireDevelopers/DemandSec/DemandSec";
import HowHire from "@/components/HireDevelopers/HowHire/HowHire";
import TestimonialHeader from "@/components/ui/Testimonial/TestimonialHeader";
import TestimonialCard from "@/components/ui/Testimonial/TestimonialCard";
import GiveBackSec from "@/components/HireDevelopers/GiveBackSec/GiveBackSec";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <Banner />
      <DedicatedTeam />
      <ExpectSec />
      <DemandSec />
      <div className="container relative overflow-visible">
        <TestimonialHeader />
        <TestimonialCard />
      </div>
      <HowHire />
      <FAQSection />
      <GiveBackSec />
    </main>
  );
};

export default page;
