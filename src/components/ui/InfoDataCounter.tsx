import Image from "next/image";
import React from "react";

type Props = {};

const InfoDataCounter = (props: Props) => {
  const stats = [
    {
      id: 1,
      icon: "/images/icon-business.webp",
      stat: "10+",
      label: "Years in Business",
    },
    {
      id: 2,
      icon: "/images/icon-delivered.webp",
      stat: "200+",
      label: "Projects Delivered",
    },
    {
      id: 3,
      icon: "/images/icon-client.webp",
      stat: "200+",
      label: "Happy Clients",
    },
    {
      id: 4,
      icon: "/images/icon-team.webp",
      stat: "200+",
      label: "Team Of Experts",
    },
  ];
  return (
    <>
      <div className="bg-[#13182C] shadow-lg py-6">
        <div className="container flex px-2 py-3">
          {stats.map((item) => (
            <div key={item.id} className="w-full flex items-center ">
              <div className="bg-[#66F3AF] rounded-full">
                <div className="flex items-center justify-center text-xl w-10 h-10">
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt="icon"
                    className="object-cover w-6 h-auto"
                  />
                </div>
              </div>

              <div className="mx-3">
                <h3 className="mb-1 text-2xl font-semibold text-white">
                  {item.stat}
                </h3>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoDataCounter;
