import { FaLeaf, FaHeart, FaHandHoldingMedical } from "react-icons/fa";

const BenefitsOfReiki = () => {
  return (
    <section className="bg-gray-50 py-16 px-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-12">
          The Healing Benefits of Reiki
        </h2>

        {/* Three Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Stress Reduction */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaLeaf className="text-6xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Stress Reduction</h3>
            <p className="text-gray-700">
              Relieves stress and promotes deep relaxation.
            </p>
          </div>

          {/* Card 2: Emotional Balance */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaHeart className="text-6xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Emotional Balance</h3>
            <p className="text-gray-700">
              Encourages emotional clarity and spiritual growth.
            </p>
          </div>

          {/* Card 3: Pain Relief */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaHandHoldingMedical className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Pain Relief</h3>
            <p className="text-gray-700">
              Reduces physical pain and accelerates the healing process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfReiki;
