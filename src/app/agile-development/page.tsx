// src/app/agile-development/page.tsx
import Banner from "@/components/AgileDevelopment/Banner/Banner";
import OurApproach from "@/components/ui/OurApproach/OurApproach";
import { contentMap } from "@/components/ui/OurApproach/OurApproachData";
import ApproachCard from "@/components/AgileDevelopment/OurApproach/ApproachCard";
import AglileTechStack from "@/components/AgileDevelopment/TechStack/AglileTechStack";
import TestimonialHeader from "@/components/ui/Testimonial/TestimonialHeader";
import TestimonialCard from "@/components/ui/Testimonial/TestimonialCard";
import DataCounter from "@/components/AgileDevelopment/DataCounter/DataCounter";

type Props = {};

const Page = () => {
  const pathname = "/agile-development";
  const content = contentMap[pathname] || contentMap["/web-development"];

  return (
    <>
      <Banner />
      <OurApproach content={content} />
      <ApproachCard />
      <AglileTechStack />
      <div className="relative py-6 lg:py-10 lg:pb-16">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url('/images/testimonial-bg-layer.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="container relative overflow-visible">
          <TestimonialHeader />
          <TestimonialCard />
        </div>
      </div>
      <div className="my-6 mb-8 lg:mb-14">
        <DataCounter />
      </div>
    </>
  );
};

export default Page;
