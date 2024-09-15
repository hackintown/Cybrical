import Image from "next/image";
import Button from "./Button";

type List = {
  title: string;
  description: string;
};
interface ProcessSectionProps {
  title: string;
  accentHead: string;
  buttonText: string;
  imageSrc: string;
  processList: List[];
  imageAlt: string;
  paragraph: string;
}

export default function ProcessSection({
  title,
  buttonText,
  processList,
  imageSrc,
  imageAlt,
  accentHead,
  paragraph,
}: ProcessSectionProps) {
  return (
    <section className="relative px-4 py-16  md:px-6 lg:px-8">
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <Image
          src="/images/banner-bg-layer.svg"
          alt="banner-layer"
          height={500}
          width={500}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <div className="container relative mx-auto grid gap-8 lg:grid-cols-[60%,35%] md:gap-12 lg:gap-16 z-10">
        <div className="space-y-6">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            style={{ lineHeight: "1.25" }}
          >
            {title}
            <span className="text-[#01AA03]"> {accentHead}</span>
          </h2>
          {paragraph && (
            <p className="text-sm font-light text-black">{paragraph}</p>
          )}

          <ul className="space-y-2">
            {processList.map((step, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Image
                  src="/images/right-arrow-icon.webp"
                  width={20}
                  height={20}
                  alt={imageAlt}
                  className="text-[#01AA03] w-5 h-5 transition-transform transform hover:scale-125 duration-300"
                />
                <div>
                  <h3 className="font-semibold">
                    {step.title && step.title}
                    <span className="text-tertiary-foreground text-sm mx-1 font-light">
                      {step.description}
                    </span>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
          <Button className="bg-[#01AA03] transition-transform transform hover:scale-110 duration-300">
            {buttonText}
          </Button>
        </div>
        <div className="relative h-[400px] lg:h-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="w-full h-auto object-cover md:object-contain md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
