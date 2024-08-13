import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const stats = [
  { id: 1, icon: "💼", stat: "10+", label: "Years in Business" },
  { id: 2, icon: "📦", stat: "200+", label: "Projects Delivered" },
  { id: 3, icon: "😊", stat: "200+", label: "Happy Clients" },
  { id: 4, icon: "👥", stat: "200+", label: "Team Of Experts" },
];
const About: React.FC = () => {
  return (
    <div className="py-2">
      <div className="container">
        <div className="flex flex-col md:flex-row md:gap-x-3 justify-between items-center mb-10">
          <div className="w-full lg:w-2/3 max-w-[550px] mb-3 lg:mb-4 text-center md:text-left lg:px-2">
            <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
              ABOUT US
            </h5>
            <h2 className="text-[1.4rem] w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-foreground">
              Customer Loyalty and <br className="hidden md:block" />{" "}
              Satisfaction
              <br className="hidden sm:block md:hidden" />
              With Our
              <span className="text-accent ml-2 mb-2">
                Best-in- <br className="hidden md:block" />
                Class Services.
              </span>
            </h2>

            <p className="text-foreground text-sm text-center md:text-left my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer.
            </p>
            <Button className="hidden md:block my-4">Start a Project</Button>
          </div>
          <div className="w-full max-w-md md:max-w-xs lg:max-w-96 my-1">
            <Image
              className="w-full h-full"
              src="/images/about-sec-img.png"
              alt="about-sec-img"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:hidden mb-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="px-2 py-4 bg-[#13182C] rounded-lg shadow-lg"
            >
              <div className="max-w-[200px] w-full mx-auto flex items-center ">
                <div className="bg-[#66F3AF] rounded-full">
                  <div className="flex items-center justify-center text-xl w-10 h-10">
                    {item.icon}
                  </div>
                </div>

                <div className="mx-3">
                  <h3 className="mb-1 text-2xl font-semibold text-white">
                    {item.stat}
                  </h3>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden xl:block bg-[#13182C] shadow-lg py-6">
        <div className="container flex px-2 py-3">
          {stats.map((item) => (
            <div key={item.id} className="w-full flex items-center ">
              <div className="bg-[#66F3AF] rounded-full">
                <div className="flex items-center justify-center text-xl w-10 h-10">
                  {item.icon}
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
    </div>
  );
};

export default About;
