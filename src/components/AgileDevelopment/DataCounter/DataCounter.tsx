import CounterCard from "@/components/ui/CounterCard";
import React from "react";

const data = [
  {
    imgSrc: "/images/counter1.webp",
    count: "5",
    title: "Product Designers",
  },
  {
    imgSrc: "/images/counter2.webp",
    count: "20+",
    title: "Developers",
  },
  {
    imgSrc: "/images/counter3.webp",
    count: "7+",
    title: "DevOps Engineers",
  },
];

const DataCounter = () => {
  return (
    <div className="bg-white container grid grid-cols-3 gap-12">
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
