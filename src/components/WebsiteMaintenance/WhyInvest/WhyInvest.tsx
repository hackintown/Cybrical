"use client";
import ProcessSection from "@/components/ui/ProcessSection";
import { memo } from "react";
import { WhyInvestData } from "./WhyInvestData";

// Type definition for ProcessSecData item (if you have a type/interface)
interface ProcessData {
  title: string;
  accentHead?: string;
  processList?: Array<any>; // Define the type for processList items if known
}

const WhyInvest = memo(function WhyInvest() {
  return (
    <main>
      {WhyInvestData.map((data: ProcessData, index: number) => (
        <ProcessSection
          key={index}
          title={data.title}
          paragraph="Creating a website is just the beginning; you need regular maintenance and checkups to make sure it is running smoothly.Avyatech is the leader in website support and maintenance services, including maintaining, modifying, and re-evaluating the application for entrepreneurs SMBs, and large organizations. Get in touch to get the most competitive price on website support and maintenance."
          accentHead={data.accentHead || ""}
          processList={data.processList || []}
          buttonText="REQUEST A QUOTE"
          imageSrc="/images/wm-whyinvest.webp"
          imageAlt="wm-whyinvest"
        />
      ))}
    </main>
  );
});

export default WhyInvest;
