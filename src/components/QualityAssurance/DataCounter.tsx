import CounterCard from "@/components/ui/CounterCard";
import React from "react";

const data = [
  {
    imgSrc: "/images/qa-counter1.webp",
    count: "45",
    title: "Quality Assurance engineers",
  },
  {
    imgSrc: "/images/qa-counter2.webp",
    count: "20+",
    title: "Tested projects",
  },
  {
    imgSrc: "/images/qa-counter3.webp",
    count: "7+",
    title: "Tools & technologies",
  },
];

const DataCounter = () => {
  return (
    <div className="bg-white container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 py-10">
      {data &&
        data.map((item, index) => (
          <CounterCard
            key={index}
            imgSrc={item.imgSrc}
            count={item.count}
            title={item.title}
          />
        ))}
    </div>
  );
};
export default DataCounter;
