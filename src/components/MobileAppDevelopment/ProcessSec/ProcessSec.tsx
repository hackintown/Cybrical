"use client";
import ProcessSection from "@/components/ui/ProcessSection";
import { memo } from "react";
import { ProcessSecData } from "./ProcessSecData";

// Type definition for ProcessSecData item (if you have a type/interface)
interface ProcessData {
  title: string;
  accentHead?: string;
  processList?: Array<any>; // Define the type for processList items if known
}

const ProcessSec = memo(function ProcessSec() {
  return (
    <main>
      {ProcessSecData.map((data: ProcessData, index: number) => (
        <ProcessSection
          key={index}
          title={data.title}
          accentHead={data.accentHead || ""}
          processList={data.processList || []}
          buttonText="REQUEST A QUOTE"
          paragraph=""
          imageSrc="/images/mbl-dev-process-image.webp"
          imageAlt="Mobile app development process illustration"
        />
      ))}
    </main>
  );
});

export default ProcessSec;
