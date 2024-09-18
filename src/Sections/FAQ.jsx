import { useState } from "react";

const faqs = [
  {
    question: "What should I expect during a Reiki session?",
    answer:
      "During a Reiki session, you will typically lie down fully clothed while the practitioner gently places their hands on or near your body. You may feel a sensation of warmth or tingling as energy flows through you, promoting relaxation and healing.",
  },
  {
    question: "How long does it take to feel the effects of Reiki?",
    answer:
      "The effects of Reiki can vary from person to person. Some may feel immediate relief and a sense of calm, while others might experience gradual changes over time. It's important to attend regular sessions for the best results.",
  },
  {
    question: "Is Reiki safe for everyone?",
    answer:
      "Yes, Reiki is generally considered safe for everyone. It is a gentle and non-invasive practice that can complement conventional medical treatments. However, it's always a good idea to discuss any health concerns with your practitioner beforehand.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 border-b text-lg font-semibold focus:outline-none"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
