import { FaLeaf, FaHeart, FaHandHoldingMedical } from "react-icons/fa";
import ImageEmotional from "../assets/icons/reiki.png";
import ImagePhysical from "../assets/icons/self-love.png";
import ImageChakras from "../assets/icons/chakras.png";

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
          {/* Card 1: Stress Reduction */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <figure>
              <img
                src={`${ImagePhysical}`}
                alt="physical healing"
                width={70}
                height={70}
              />
            </figure>
            <h3 className="text-xl font-semibold mb-4">Physical Healing</h3>
            <p className="text-gray-700">
              Through Reiki, physical ailments such as chronic pain, fatigue,
              and injuries can be relieved. The healing energy supports your
              body's natural recovery, reducing discomfort and promoting overall
              wellness
            </p>
          </div>

          {/* Card 2: Emotional Balance */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <figure>
              <img
                src={`${ImageEmotional}`}
                alt="physical healing"
                width={70}
                height={70}
              />
            </figure>
            <h3 className="text-xl font-semibold mb-4">Emotional Balance</h3>
            <p className="text-gray-700">
              By calming the mind and soothing emotions, Reiki helps reduce
              stress, anxiety, and emotional turbulence. It encourages inner
              harmony, allowing you to feel more grounded and emotionally
              balanced.
            </p>
          </div>

          {/* Card 3: Pain Relief */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <figure>
              <img
                src={`${ImageChakras}`}
                alt="physical healing"
                width={70}
                height={70}
              />
            </figure>
            <h3 className="text-xl font-semibold mb-4">
              Chakra Energizing & Balancing
            </h3>
            <p className="text-gray-700">
              Through chakra balancing, Reiki clears energy blockages, allowing
              for better energy flow. This promotes physical health, emotional
              clarity, and spiritual alignment, bringing you back to balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfReiki;
