import { FaStar } from 'react-icons/fa';
import Image from "../assets/about_reiki.webp";

const testimonials = [
  {
    text: "I've experienced profound emotional healing through my sessions. Highly recommend!",
    author: "Sarah R.",
    rating: 5,
    picture: `${Image}`
  },
  {
    text: "A truly transformative experience. The healing energy is incredible!",
    author: "John D.",
    rating: 4,
    picture: `${Image}`
  },
  {
    text: "The sessions have helped me find a new level of peace and balance. Grateful!",
    author: "Emily S.",
    rating: 5,
    picture: `${Image}`
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.picture}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <div className="text-xl font-semibold">{testimonial.author}</div>
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
