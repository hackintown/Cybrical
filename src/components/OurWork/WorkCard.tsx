import Image from "next/image";
import Button from "../ui/Button";

export default function WorkCard() {
  const cards = [
    {
      image: "/images/our-workcard1.webp",
      title: "Who We Are",
      description:
        "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.",
      buttonText: "Send Your Message",
    },
    {
      image: "/images/our-workcard1.webp",
      title: "Who We Are",
      description:
        "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.",
      buttonText: "Send Your Message",
    },
    {
      image: "/images/our-workcard1.webp",
      title: "Who We Are",
      description:
        "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.",
      buttonText: "Send Your Message",
    },
    {
      image: "/images/our-workcard1.webp",
      title: "Who We Are",
      description:
        "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.",
      buttonText: "Send Your Message",
    },
    {
      image: "/images/our-workcard1.webp",
      title: "Who We Are",
      description:
        "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.",
      buttonText: "Send Your Message",
    },
    {
      image: "/images/our-workcard1.webp",
      title: "Who We Are",
      description:
        "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.",
      buttonText: "Send Your Message",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative w-full h-[550px]">
              <Image
                src={card.image}
                fill
                alt={`Card image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-2 text-center">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4 font-light text-center">
                {card.description}
              </p>
              <Button className="">{card.buttonText}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
