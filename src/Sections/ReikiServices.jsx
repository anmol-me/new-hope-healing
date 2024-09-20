import ImageHealing from "../assets/icons/reiki_healing.png";
import ImageDistance from "../assets/icons/distance.png";
import ImageRelationship from "../assets/icons/relationship.png";
import ImageChakras from "../assets/icons/chakras.png";

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
        </div>
      </div>
    </section>
  );
};

export default ReikiServices;
