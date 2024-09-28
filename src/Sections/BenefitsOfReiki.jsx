import ImageEmotional from "../assets/icons/reiki.png";
import ImagePhysical from "../assets/icons/self-love.png";
import ImageChakras from "../assets/icons/chakras.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const healingCards = [
  {
    title: "Physical Healing",
    imageUrl: `${ImagePhysical}`,
    alternateText: "physical healing",
    heading: "Physical Healing",
    content:
      "Through Reiki, physical ailments such as chronic pain, fatigue, and injuries can be relieved. The healing energy supports your body's natural recovery, reducing discomfort and promoting overall wellness.",
  },
  {
    title: "Emotional Balance",
    imageUrl: `${ImageEmotional}`,
    alternateText: "emotional healing",
    heading: "Emotional Balance",
    content:
      "By calming the mind and soothing emotions, Reiki helps reduce stress, anxiety, and emotional turbulence. It encourages inner harmony, allowing you to feel more grounded and emotionally balanced.",
  },
  {
    title: "Chakra Energizing & Balancing",
    imageUrl: `${ImageChakras}`,
    alternateText: "chakra healing",
    heading: "Chakra Energizing & Balancing",
    content:
      "Through chakra balancing, Reiki clears energy blockages, allowing for better energy flow. This promotes physical health, emotional clarity, and spiritual alignment, bringing you back to balance.",
  },
];

const BenefitsOfReiki = () => {
  return (
    <section className="bg-gray-50 py-24 px-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-12">
          The Healing Benefits of Reiki
        </h2>

        {/* Three Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {healingCards.map((card, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center"
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <figure>
                    <img
                      src={card.imageUrl}
                      alt={card.alternateText}
                      width={70}
                      height={70}
                      className="mb-4"
                    />
                  </figure>
                  <h3 className="text-xl font-semibold">{card.heading}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfReiki;
