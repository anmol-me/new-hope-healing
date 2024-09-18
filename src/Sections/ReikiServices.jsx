import Image from "../assets/about_reiki.webp";

const ReikiServices = () => {
  return (
    <section className="py-16 px-16 bg-gray-100">
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
              src={`${Image}`}
              alt="Reiki Healing Session"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">
                Reiki Healing Session
              </h3>
              <p className="text-lg text-gray-700">
                Experience one-on-one Reiki sessions tailored to your specific
                needs.
              </p>
            </div>
          </div>

          {/* Service 2: Distance Reiki */}
          <div className="flex items-center">
            {/* Image */}
            <img
              src={`${Image}`}
              alt="Distance Reiki"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">Distance Reiki</h3>
              <p className="text-lg text-gray-700">
                Energy healing from afar, effective no matter where you are.
              </p>
            </div>
          </div>

          {/* Service 3: Chakra Balancing */}
          <div className="flex items-center">
            {/* Image */}
            <img
              src={`${Image}`}
              alt="Chakra Balancing"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-4">Chakra Balancing</h3>
              <p className="text-lg text-gray-700">
                Align your energy centers to improve overall health and harmony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReikiServices;
