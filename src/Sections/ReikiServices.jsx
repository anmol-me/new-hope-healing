import ImageHealing from "../assets/icons/reiki_healing.png";
import ImageDistance from "../assets/icons/distance.png";
import ImageRelationship from "../assets/icons/relationship.png";
import ImageChakras from "../assets/icons/chakras.png";
import ImageTarot from "../assets/icons/tarot.png";
import ImageFace from "../assets/icons/face.png";
import ImagePsychic from "../assets/icons/psychic.png";
import ImageMeditation from "../assets/icons/meditation.png";

const ReikiServices = () => {
  return (
    <section className="py-24 px-16 bg-gray-100">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-12">
          Our Reiki Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Service 1: Reiki Healing Session */}
          <div className="flex items-center">
            {/* Image */}
            <img
              src={`${ImageHealing}`}
              width={100}
              alt="Reiki Healing Session"
            />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">
                Reiki Healing Session
              </h3>
              <p className="text-lg text-gray-700">
                In a Reiki session, you simply relax while the practitioner
                channels healing energy through hands, helping to release
                tension, and boost your body’s natural healing.
              </p>
            </div>
          </div>

          {/* Service 2: Distance Reiki */}
          <div className="flex items-center">
            {/* Image */}
            <img src={`${ImageDistance}`} width={100} alt="Distance Reiki" />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">Distance Reiki</h3>
              <p className="text-lg text-gray-700">
                Distance Healing allows you to receive Reiki energy from
                anywhere. You relax at home while the practitioner sends healing
                vibes, helping you feel balanced and calm.
              </p>
            </div>
          </div>

          {/* Service 3: Relationship Healing */}
          <div className="flex items-center">
            {/* Image */}
            <img
              src={`${ImageRelationship}`}
              width={100}
              alt="Relationship Healing"
            />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">
                Relationship Healing
              </h3>
              <p className="text-lg text-gray-700">
                The Relationship Healing helps you and your loved ones release
                negativity, encouraging forgiveness and deeper understanding for
                more harmonious bonds.
              </p>
            </div>
          </div>

          {/* Service 4: Chakra Balancing */}
          <div className="flex items-center">
            {/* Image */}
            <img src={`${ImageChakras}`} alt="Chakra Balancing" width={100} />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">Chakra Balancing</h3>
              <p className="text-lg text-gray-700">
                In a Chakra Balancing session, the practitioner helps align your
                energy centers. This helps to release blockages, leaving you
                feeling centered and revitalized.
              </p>
            </div>
          </div>

          {/* Service 5: Tarot Card Reading */}
          <div className="flex items-center">
            {/* Image */}
            <img src={`${ImageTarot}`} alt="Tarot Card Reading" width={100} />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">
                Tarot Card Reading
              </h3>
              <p className="text-lg text-gray-700">
                In a Tarot Reading session, cards are drawn to offer insight
                into your life, providing guidance and answers to questions
                about love, career, and personal growth.
              </p>
            </div>
          </div>

          {/* Service 6: Face Reading */}
          <div className="flex items-center">
            {/* Image */}
            <img src={`${ImageFace}`} alt="Face Reading" width={100} />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">Face Reading</h3>
              <p className="text-lg text-gray-700">
                Face Reading involves the healer connecting with your eyes to
                reveal unseen aspects of your life, providing profound insights
                into your emotions, relationships, and spiritual path.
              </p>
            </div>
          </div>

          {/* Service 7: Psychic Reading */}
          <div className="flex items-center">
            {/* Image */}
            <img src={`${ImagePsychic}`} alt="Psychic Reading" width={100} />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">Psychic Reading</h3>
              <p className="text-lg text-gray-700">
                In a Psychic Reading, the healer taps into intuitive energy to
                give you guidance on your life path, helping you understand
                unseen forces and make empowered decisions.
              </p>
            </div>
          </div>

          {/* Service 8: Meditation Sessions */}
          <div className="flex items-center">
            {/* Image */}
            <img
              src={`${ImageMeditation}`}
              alt="Meditation Sessions"
              width={100}
            />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">
                Meditation Sessions
              </h3>
              <p className="text-lg text-gray-700">
                In a Meditation Session, you’ll be guided through calming
                exercises to quiet your thoughts, helping you connect with your
                inner self and restore a sense of balance and calm. This will
                help you to open up your chakras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReikiServices;
