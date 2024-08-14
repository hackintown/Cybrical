"use client";
import Image from "next/image";
import { useState } from "react";

const TabContent: React.FC = () => {
  const [openTab, setOpenTab] = useState<number>(1);

  return (
    <div className="container">
      <div className="flex space-x-2  bg-white rounded-lg shadow-md max-w-4xl">
        <button
          onClick={() => setOpenTab(1)}
          className={`flex-1 py-2 px-2 font-semibold  rounded-t-lg focus:outline-none outline-none transition-all duration-300 ${
            openTab === 1 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Databases
        </button>
        <button
          onClick={() => setOpenTab(2)}
          className={`flex-1 py-2 px-2 font-semibold rounded-t-lg focus:outline-none outline-none transition-all duration-300 ${
            openTab === 2 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Mobile
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-2 rounded-t-lg font-semibold focus:outline-none outline-none transition-all duration-300 ${
            openTab === 3 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-2 rounded-t-lg font-semibold focus:outline-none outline-none transition-all duration-300 ${
            openTab === 4 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Server
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-2 rounded-t-lg font-semibold focus:outline-none outline-none transition-all duration-300 ${
            openTab === 5 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Devops
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-2 rounded-t-lg font-semibold focus:outline-none outline-none transition-all duration-300 ${
            openTab === 6 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-2 rounded-t-lg font-semibold focus:outline-none outline-none transition-all duration-300 ${
            openTab === 7 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          CMS
        </button>
      </div>

      <div
        className="transition-all duration-300  py-12 px-20 rounded-lg rounded-tl-none shadow-md"
        style={{ backgroundImage: "url('/images/tab-box-bg.png')" }}
      >
        {openTab === 1 && (
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                <Image
                  src="/images/amazon-aurora.png"
                  width={500}
                  height={500}
                  className="w-full"
                  alt="aws-image"
                />
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                <Image
                  src="/images/aws.png"
                  width={500}
                  height={500}
                  className="w-1/2"
                  alt="aws-image"
                />
              </div>
              <p className="text-white">AWS RDS</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                <Image
                  src="/images/mongodb.png"
                  width={500}
                  height={500}
                  className="w-[20px]"
                  alt="aws-image"
                />
              </div>
              <p className="text-white">Mongodb</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                <Image
                  src="/images/mysql.png"
                  width={500}
                  height={500}
                  className="w-full"
                  alt="aws-image"
                />
              </div>
              <p className="text-white">MYSQL</p>
            </div>
          </div>
        )}

        {openTab === 2 && (
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
          </div>
        )}

        {openTab === 3 && (
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="text-white rounded-full border border-border w-[80px] h-[80px] flex items-center justify-center">
                A
              </div>
              <p className="text-white">Amazon Aurora</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContent;
