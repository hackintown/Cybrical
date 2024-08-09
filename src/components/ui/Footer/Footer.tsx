import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import CompanyInfo from "./CompanyInfo";
import FooterLinks from "./links";
import OfficeAddress from "./OfficeAddress";
import Button from "../Button";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-cover bg-[#294E49] bg-no-repeat bg-center py-10">
      {/* Main Background Image */}
      {/* <div className="absolute inset-0">
        <Image
          src="/images/footer-inner-bg.png"
          alt="Footer Inner Background"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
      </div> */}

      {/* Layer Image */}
      {/* <div className="absolute inset-0">
        <Image
          src="/images/footer-outer-layer.png"
          alt="Footer Outer Layer"
          layout="fill"
          className="z-20"
        />
      </div> */}

      <div className="relative z-30 container mx-auto px-6 lg:px-12 xl:px-24 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <div className="">
            <h2 className="text-[1.3rem] text-center mb-3 w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-white">
              Let&apos;s create something beautiful
              <br className="" />
              <span className="text-accent ml-2">
                Innovative together! call now!
              </span>
            </h2>
            <p className="text-white text-sm text-center lg:text-left mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>

          <div className="">
            <Button>Start a Project</Button>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <CompanyInfo />
          <FooterLinks />
          <OfficeAddress />
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2024 Cybrical. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
