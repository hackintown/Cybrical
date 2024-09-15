"use client";
import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

export default function FAQSection({ faqs = [] }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultFaqs: FAQItem[] = [
    {
      question: "There are many variations of passages?",
      answer:
        "You can return any item within 30 days of purchase for a full refund, as long as the item is in its original condition.",
    },
    {
      question:
        "What are some tips for choosing a perfect corporate chauffeur service?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
    },
    {
      question: "There are many variations?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping fees and delivery times vary depending on the destination.",
    },
    {
      question: "There are many variations of passages?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping fees and delivery times vary depending on the destination.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping fees and delivery times vary depending on the destination.",
    },
  ];

  const combinedFaqs = [...defaultFaqs, ...faqs];

  return (
    <div className=" bg-[#F0F0F0] py-10 lg:py-14">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:gap-14">
          {/* Left FAQ Section */}
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
                FAQ'S
              </span>
              <br />
              <span className="text-black">Frequently </span>
              <span className="text-accent">Asked</span>
              <br />
              <span className="text-accent">Question</span>
            </h2>
            <div className="space-y-4">
              {combinedFaqs.length > 0 ? (
                combinedFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-[#D1D1D1] rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full text-left p-2 flex justify-between items-center focus:outline-none"
                      onClick={() => toggleQuestion(index)}
                    >
                      <span className="font-medium text-sm lg:text-base">
                        {faq.question}
                      </span>
                      {openIndex === index ? (
                        <Image
                          src="/images/faq-up-arrow.webp"
                          width={32}
                          height={32}
                          alt="arrow-icon"
                          className="w-8 h-8"
                        />
                      ) : (
                        <Image
                          src="/images/faq-down-arrow.webp"
                          width={32}
                          height={32}
                          alt="arrow-icon"
                          className="w-8 h-8"
                        />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="p-4 bg-gray-100">
                        <p className="text-tertiary-foreground text-xs lg:text-sm font-light">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No FAQs available at the moment.</p>
              )}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-[300px] w-[350px] sm:h-[350px] sm:w-[400px] lg:h-[400px] lg:w-[500px] xl:h-[530px] shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/faq-img.webp"
              alt="FAQ Illustration"
              className="object-cover"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
