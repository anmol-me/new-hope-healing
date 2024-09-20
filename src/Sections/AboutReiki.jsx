import Image from "../assets/about_reiki.webp";

const AboutReiki = () => {
  return (
    <section className="container mx-auto py-24 px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <div>
          <img
            src={`${Image}`}
            alt="Reiki Healing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Text */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">What is Reiki?</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Reiki is an ancient form of energy healing that channels positive
            energy to your body, helping you relax and recover from physical and
            emotional stress. This gentle touch therapy helps you feel calm,
            centered, and rejuvenated, supporting your overall health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutReiki;
