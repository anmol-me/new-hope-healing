import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Reiki, and how does it work?",
    answer:
      "Reiki is a form of energy healing where the practitioner channels healing energy through gentle touch, hand movements or through distance to balance the body's energy, promoting relaxation and healing.",
  },
  {
    question: "What should I expect during a Reiki session?",
    answer:
      "During a Reiki session, you will typically lie down while the practitioner gently hovers their hands on or near your body. You may feel a sensation of warmth or tingling as energy flows through you, promoting relaxation and healing.",
  },
  {
    question: "How long does it take to feel the effects of Reiki?",
    answer:
      "The effects of Reiki can vary from person to person. Some may feel immediate relief and a sense of calm, while others might experience gradual changes over time. It's important to attend regular sessions for the best results.",
  },
  {
    question: "Is Reiki safe, and can anyone receive it?",
    answer:
      "Yes, Reiki is completely safe for everyone, including children, the elderly, and even pets. It’s non-invasive and works alongside any medical or therapeutic treatments.",
  },
  {
    question: "Can Reiki be done from a distance?",
    answer:
      "Yes, Reiki can be performed remotely. Distance Reiki allows energy to be sent to you no matter where you are, providing the same benefits as an in-person session.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left px-6 py-4 bg-gray-100 border-b text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 text-base">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
