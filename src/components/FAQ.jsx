import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the return policy for sports gear?",
      answer:
        "We offer a 30-day return policy for unused and undamaged sports gear. Please refer to our return policy page for more details.",
    },
    {
      question: "Do you provide customization options?",
      answer:
        "Yes, we provide customization options for certain products. Please check the product details page for available options.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days, depending on your location. Expedited shipping options are also available.",
    },
    {
      question: "Are your products eco-friendly?",
      answer:
        "Yes, we are committed to sustainability. Many of our products are made from eco-friendly materials.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. Use this number to track your order on our website.",
    },
  ];

  return (
    <section className=" py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-[#6DA06F] pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center text-left text-xl font-semibold text-text-primary dark:text-darkPrimaryText"
            >
              {faq.question}
              <span>{openQuestion === index ? "-" : "+"}</span>
            </button>
            {openQuestion === index && (
              <p className="mt-4 text-lg ">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
