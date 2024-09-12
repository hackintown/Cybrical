// src/app/agile-development/page.tsx
import Banner from "@/components/AgileDevelopment/Banner/Banner";
import OurApproach from "@/components/ui/OurApproach/OurApproach"; // Ensure the correct import path
import {
  contentMap,
  ContentType,
} from "@/components/ui/OurApproach/OurApproachData";

type Props = {};

const Page = (props: Props) => {
  const pathname = "/agile-development"; 
  const content = contentMap[pathname] || contentMap["/web-development"];

  return (
    <>
      <Banner />
      <OurApproach content={content} />
    </>
  );
};

export default Page;
