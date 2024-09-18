import Image from "../assets/about_reiki.webp";

const BookASession = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-blue-50 py-16 px-16">
      <div className="lg:w-1/2 px-8 lg:px-16 flex flex-col justify-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">
          Start Your Healing Journey
        </h2>

        {/* Content */}
        <p className="text-lg text-gray-700 mb-8">
          Ready to embrace a healing experience? Book a session today and step
          into a new realm of wellness and peace.
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>

      <div className="lg:w-1/2">
        <img
          src={`${Image}`}
          alt="Calm Environment"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default BookASession;
