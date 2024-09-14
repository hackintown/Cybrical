import Image from "next/image";
import { memo } from "react";

interface CardProps {
  iconSrc: string;
  title: string;
  paragraphs: string;
}

const Card = memo(function Card({ iconSrc, title, paragraphs }: CardProps) {
  return (
    <div className="bg-[#F9F9F9] hover:bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="mb-4 relative">
        <Image
          src={iconSrc}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-tertiary-foreground text-sm">{paragraphs}</p>
    </div>
  );
});

export default Card;
