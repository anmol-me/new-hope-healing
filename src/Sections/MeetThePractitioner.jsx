import Image from "../assets/about_reiki.webp";

const MeetThePractitioner = () => {
  return (
    <section className="py-16 px-16 bg-gray-100">
      <div className="container mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-8">
          Meet Meghna Sharma, Your Reiki Healer
        </h2>

        {/* Practitioner Info */}
        <div className="flex flex-col items-center">
          {/* Portrait */}
          <img
            src={`${Image}`}
            alt="[Your Name]"
            className="w-32 h-32 rounded-full mb-6 shadow-lg"
          />
          {/* Bio */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            [Your Name] has been a certified Reiki practitioner for over [X]
            years, helping countless clients achieve inner peace and well-being
            through personalized healing sessions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetThePractitioner;
