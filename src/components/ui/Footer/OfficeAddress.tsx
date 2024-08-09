import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const OfficeAddress: React.FC = () => {
  return (
    <div>
      <h4 className="text-xl font-bold text-white mb-4 text-center">
        Office Address
      </h4>
      <p className="mb-4 text-[#BFBFBF] text-center">
        India Office
        <br />
        G-31, First Floor, Sector-3, Noida (201301)
      </p>
      <p className="flex items-center justify-center space-x-2 text-[#BFBFBF]">
        <FaPhoneAlt />
        <span>(+91) - 8386897973</span>
      </p>
    </div>
  );
};

export default OfficeAddress;
