import Image from "next/image";

const OfficeAddress: React.FC = () => {
  return (
    <div className="relative pt-20 pb-5 w-full max-w-[650px] mx-auto">
      <h4 className="text-xl font-bold text-white mb-4 text-center sm:text-left">
        Office Address
      </h4>
      <div className="flex flex-col gap-3 sm:flex-row justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-y-2 gap-x-3 justify-center">
          <Image
            src="/images/indian-flag.svg"
            width={500}
            height={500}
            alt="ind-flag"
            className="max-w-[40px]"
          />
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="mb-1 text-white font-bold text-sm">Noida Office</h2>
            <span className="text-[#BFBFBF] text-xs md:text-sm text-center sm:text-left">
              G-31 , 1st floor , sector -3 Gautam Budh Nagar , Noida -201301
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center  gap-y-2  gap-x-3 justify-center">
          <Image
            src="/images/indian-flag.svg"
            width={500}
            height={500}
            alt="ind-flag"
            className="max-w-[40px]"
          />
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="mb-1 text-white font-bold text-sm text-center">
              Bihar Office
            </h2>

            <p className="flex items-center justify-center space-x-2 text-white text-sm">
              <span className="text-[#BFBFBF]  text-xs md:text-sm text-center sm:text-left">
                6th Floor (F2), DS Business Park, Near Saguna More, Bailey Road,
                Patna 801503, Bihar
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeAddress;
