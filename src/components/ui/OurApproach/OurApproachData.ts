export type ContentType = {
  title: string;
  subtitle: string;
  heading: string;
  accentHeading: string;
  paragraphs: string;
  additionalInfo: string;
  imageSrc: string;
};

export const contentMap: { [key: string]: ContentType } = {
  "/web-development": {
    title: "OUR APPROACH",
    subtitle: "OUR APPROACH",
    heading: "Transform your home",
    accentHeading: "for the digital age",
    paragraphs:
      "California-based licensed real estate broker organization. The company serves as a wonderful resource for consumers to swiftly and conveniently find the right Real Estate agent for buying and selling residential or commercial properties.",
    additionalInfo:
      "One place — everyone you need: Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, and Full-stack developers.",
    imageSrc: "/images/our-approach.webp",
  },

  
  "/agile-development": {
    title: "OUR APPROACH",
    subtitle: "OUR APPROACH",
    heading: "Work with an Agile development team that",
    accentHeading: "will understand your challenges",
    paragraphs:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    additionalInfo:
      "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
    imageSrc: "/images/our-approach.webp",
  },
};
