"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is Hook?",
    answer: "Hook is the infrastructure that enables you to shop from major offline markets directly from your phone."
  },
  {
    question: "What can I buy on Hook?",
    answer: "We're starting with fashion items. More products are coming soon."
  },
  {
    question: "Which markets are available?",
    answer: "Hook delivers items within Lagos, Abuja, Port Harcourt, Lokoja, Shagamu, Ota, Abeokuta, Benin, Warri, Ibadan, Asaba, Onitsha, Awka, Enugu, Abakaliki, Oshogbo, Ilesha, Owerri, Ilorin, Akure, Umuahia, Aba, Uyo, Calabar, Ado Ekiti"
  },
  {
    question: "Are the products real?",
    answer: "Yes. We use real photos taken directly from the market, so you can see what you're buying."
  },
  {
    question: "Can I negotiate prices?",
    answer: "Yes. Some products will allow you to negotiate with the seller through Hook."
  },
  {
    question: "How does delivery work?",
    answer: "Once you place your order, Hook handles the process from the market to your doorstep through our logistics partners."
  },
  {
    question: "Can I shop from different markets in one order?",
    answer: "Yes. You can add products from different markets to one cart."
  },
  {
    question: "How can I become a Market Associate?",
    answer: "Apply through our Market Associate application. If selected, Hook will onboard and train you."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-6 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-12 tracking-tight">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-[#F5F5F5] rounded-[20px] p-5 md:px-6 md:py-5 cursor-pointer transition-colors hover:bg-[#EAEAEA]"
            >
              <div className="flex justify-between items-center text-black">
                <h3 className="text-[17px] md:text-[18px] font-medium">
                  {faq.question}
                </h3>

                {/* Plus & Close Icons */}
                <div className="ml-4 flex-shrink-0 text-black">
                  {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>
              </div>

              {/* Expandable Answer Section */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[16px] text-gray-700 leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
