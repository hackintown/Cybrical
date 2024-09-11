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
    <footer className="relative bg-cover bg-[#294E49] bg-no-repeat bg-center pt-10">
      <div className="absolute -top-2 w-full h-16">
        <Image
          src="/images/footer-greenish-layer.webp"
          width={500}
          height={500} // Ensure the image covers the background
          className="z-10 w-full h-full rotate-1 object-cover"
          alt="footer-greenish-layer"
          quality={100} // Set quality to prevent blurring
          priority // Prioritize loading the background image
        />
      </div>
      {/* Main Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.png"
          alt="Footer Inner Background"
          fill
          className="z-10 w-full h-full object-cover"
          priority // Prioritize loading the background image
        />
      </div>
      <div className="relative z-30 container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="relative flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="w-full max-w-[550px]">
            <h2 className="text-[1.3rem] text-center mb-3 w-full lg:text-left md:text-3xl lg:text-3xl font-semibold leading-snug text-white">
              Let&apos;s create something beautiful
              <br className="" />
              <span className="text-accent ml-2">
                Innovative together! call now!
              </span>
            </h2>
            <p className="text-white text-sm md:text-base text-center lg:text-left mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since.
            </p>
          </div>

          <div className="">
            <Button>Start a Project</Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 border-t border-[#154E47]">
          <CompanyInfo />
          <div className="relative pl-10 pt-6 lg:border-l lg:border-[#154E47]">
            <FooterLinks />
            <OfficeAddress />
            <div className="absolute left-0 right-0 bottom-40 w-full h-px bg-white after:content-[''] after:absolute after:w-full after:h-px after:bg-[#154E47]"></div>
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="border-t  border-[#154E47] md:py-5 mx-auto flex flex-col md:flex-row justify-between items-center text-base text-[#CFCFCF]">
          <p className="mb-4 md:mb-0">© 2024 Cybrical. All rights reserved.</p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="hover:underline text-sm relative before:content-[''] before:absolute before:left-[-6px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-px before:h-3 before:bg-white first:before:hidden"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="hover:underline text-sm relative before:content-[''] before:absolute before:left-[-6px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-px before:h-3 before:bg-white"
            >
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
