"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-b shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* logo */}
        <div>
          <Image
            src="/images/logo.png"
            height={100}
            width={100}
            alt="Logo"
            className="h-8 mr-3"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-5">
          <Link href="/services" className="text-gray-600 hover:text-green-500">
            Services
          </Link>
          <Link
            href="/technologies"
            className="text-gray-600 hover:text-green-500"
          >
            Technologies
          </Link>
          <Link href="/work" className="text-gray-600 hover:text-green-500">
            Work
          </Link>
          <Link href="/company" className="text-gray-600 hover:text-green-500">
            Company
          </Link>
          <Link
            href="/hire-developer"
            className="text-gray-600 hover:text-green-500"
          >
            Hire Developer
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button>Start a Project</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-green-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/services"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            href="/technologies"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Technologies
          </Link>
          <Link
            href="/work"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Work
          </Link>
          <Link
            href="/company"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Company
          </Link>
          <Link
            href="/hire-developer"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Hire Developer
          </Link>
          <div className="px-4 py-2">
            <Button>Start a Project</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
