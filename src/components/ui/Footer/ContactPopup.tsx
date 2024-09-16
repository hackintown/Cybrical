"use client";
import { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import Button from "../Button";

export default function ContactPopup() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute bottom-full mb-2 space-y-3 transition-all duration-300 ease-in-out ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button className="block w-[54px] h-[54px] rounded-full  p-3 bg-[#01AA03] text-white hover:bg-[#00a844] transition-colors duration-300">
          <MessageCircle className="w-full h-full" />
        </button>
        <button className="block w-[54px] h-[54px] rounded-full  p-3 bg-[#01AA03] text-white hover:bg-[#00a844] transition-colors duration-300">
          <Phone className="w-full h-full" />
        </button>
        <button className="block w-[54px] h-[54px] rounded-full  p-3 bg-[#01AA03] text-white hover:bg-[#00a844] transition-colors duration-300">
          <Send className="w-full h-full" />
        </button>
      </div>
      <Button className="py-3 px-5 transition-colors duration-300 ease-in-out flex items-center space-x-2 rounded-full">
        <span>Contact Us</span>
        <MessageCircle className="w-5 h-5" />
      </Button>
    </div>
  );
}
