import Image from "next/image";
import { memo } from "react";

interface CardProps {
  iconSrc: string;
  title: string;
  paragraphs: string;
}

const Card = memo(function Card({ iconSrc, title, paragraphs }: CardProps) {
  return (
    <div className="bg-white shadow-custom-light p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="mb-4 relative">
        <Image
          src={iconSrc}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-tertiary-foreground text-smm font-light">
        {paragraphs}
      </p>
      {/* {btn && (
        <div className="flex items-center gap-x-2 mt-4">
          <button className="text-sm font-semibold">{btn}</button>
          <Image
            src="/images/hire-dev-arrow.webp"
            width={12}
            height={12}
            className="w-3 h-3"
            alt="hire-arrow-icon"
          />
        </div>
      )} */}
    </div>
  );
});

export default Card;
