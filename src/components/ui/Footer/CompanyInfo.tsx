import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="#" className="mb-5">
        <Image
          src="/images/footer-logo.png"
          width={500}
          height={500}
          alt="footer-logo"
          className="text-white w-full max-w-[145px]"
        />
      </Link>
      <p className="mb-4 text-[#BFBFBF] text-center text-secondary-foreground">
        Lorem Ipsum is simply text of the printing and typesetting industry.
        Ipsum has been the industry&apos;s standard dummy.
      </p>
      <div className="flex space-x-4">
        <div className="bg-black w-7 h-7 rounded-full flex items-center justify-center">
          <FaFacebookF className="hover:text-green-400 cursor-pointer text-white" />
        </div>
        <div className="bg-black w-7 h-7 rounded-full flex items-center justify-center">
          <FaTwitter className="hover:text-green-400 cursor-pointer text-white" />
        </div>
        <div className="bg-black w-7 h-7 rounded-full flex items-center justify-center">
          <FaLinkedinIn className="hover:text-green-400 cursor-pointer text-white" />
        </div>
        <div className="bg-black w-7 h-7 rounded-full flex items-center justify-center">
          <FaInstagram className="hover:text-green-400 cursor-pointer text-white" />
        </div>
        <div className="bg-black w-7 h-7 rounded-full flex items-center justify-center">
          <FaYoutube className="hover:text-green-400 cursor-pointer text-white" />
        </div>
        <div className="bg-black w-7 h-7 rounded-full flex items-center justify-center">
          <FaPinterestP className="hover:text-green-400 cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
