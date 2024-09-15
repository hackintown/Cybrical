"use client";
import ProcessSection from "@/components/ui/ProcessSection";
import { memo } from "react";
import { StreamLinedData } from "./StreamLinedData";

// Type definition for ProcessSecData item (if you have a type/interface)
interface ProcessData {
  title: string;
  accentHead?: string;
  processList?: Array<any>; // Define the type for processList items if known
  paragraph?: string;
}

const StreamLined = memo(function StreamLined() {
  return (
    <main>
      {StreamLinedData.map((data: ProcessData, index: number) => (
        <ProcessSection
          key={index}
          title={data.title}
          paragraph="We follow a streamlined approach to website support services to make sure we deliver the best every time."
          accentHead={data.accentHead || ""}
          processList={data.processList || []}
          buttonText="REQUEST A QUOTE"
          imageSrc="/images/wm-streamline.webp"
          imageAlt="wm-streamline"
        />
      ))}
    </main>
  );
});

export default StreamLined;
