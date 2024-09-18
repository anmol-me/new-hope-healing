import HeroImage from "../assets/reiki_header.png";

const Hero = () => {
  return (
    <>
      {/* Parallax Image Section */}
      <section
        className="relative h-[80vh] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Reiki Healing
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
