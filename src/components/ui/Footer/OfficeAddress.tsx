import Image from "next/image";

const OfficeAddress: React.FC = () => {
  return (
    <div className="relative pt-20 pb-5 w-full max-w-[650px] mx-auto">
      <h4 className="text-xl font-bold text-white mb-4 text-center sm:text-left">
        Office Address
      </h4>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-y-2 gap-x-3 justify-center mb-6">
          <Image
            src="/images/indian-flag.svg"
            width={500}
            height={500}
            alt="ind-flag"
            className="max-w-[40px]"
          />
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="mb-1 text-white font-bold text-sm">India Office</h2>
            <span className="text-[#BFBFBF] text-sm">
              G-31, First Floor, Sector-3, Noida (201301)
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center  gap-y-2  gap-x-3 justify-center mb-6">
          <Image
            src="/images/indian-flag.svg"
            width={500}
            height={500}
            alt="ind-flag"
            className="max-w-[40px]"
          />
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="mb-1 text-white font-bold text-sm text-center">
              Phone
            </h2>
            <p className="flex items-center justify-center space-x-2 text-white text-sm">
              <span>(+91) - 8386897973</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeAddress;
