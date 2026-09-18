import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    img: "testimonials-1.jpg",
    name: "Saul Goodman",
    role: "CEO & Founder",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora.",
    rating: 5,
  },
  {
    img: "testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    text: "Export tempor illum tamen malis malis eram quae irure esse labore.",
    rating: 5,
  },
  {
    img: "testimonials-3.jpg",
    name: "Jena Karlis",
    role: "Store Owner",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint.",
    rating: 5,
  },
  {
    img: "testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Freelancer",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa.",
    rating: 5,
  },
  {
    img: "testimonials-5.jpg",
    name: "John Larson",
    role: "Entrepreneur",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className="testimonial-item text-center p-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative inline-block mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={`/images/testimonials/${testimonial.img}`}
          className="testimonial-img rounded-full border-4 border-white/30 shadow-2xl mx-auto"
          alt={testimonial.name}
          style={{ maxWidth: '120px', height: 'auto' }}
        />
        <motion.div
          className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <i className="bi bi-chat-quote-fill text-white"></i>
        </motion.div>
      </motion.div>

      <motion.h3 
        className="text-2xl font-bold text-white mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {testimonial.name}
      </motion.h3>
      
      <motion.h4 
        className="text-lg text-white/70 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        {testimonial.role}
      </motion.h4>

      <motion.div 
        className="stars flex justify-center gap-1 mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.i
            key={i}
            className="bi bi-star-fill text-yellow-400"
            initial={{ scale: 0, rotate: -180 }}
            animate={isActive ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
          ></motion.i>
        ))}
      </motion.div>

      <motion.p 
        className="text-white/90 text-lg italic max-w-2xl mx-auto relative"
        initial={{ y: 30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <motion.i 
          className="bi bi-quote quote-icon-left absolute -left-8 top-0 text-4xl text-white/30"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.i>
        <span>{testimonial.text}</span>
        <motion.i 
          className="bi bi-quote quote-icon-right absolute -right-8 bottom-0 text-4xl text-white/30"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.i>
      </motion.p>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="testimonials section dark-background py-20 overflow-hidden relative"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-black/80"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(147,51,234,0.8), rgba(30,58,138,0.8), rgba(0,0,0,0.8))",
              "linear-gradient(135deg, rgba(30,58,138,0.8), rgba(147,51,234,0.8), rgba(0,0,0,0.8))",
              "linear-gradient(135deg, rgba(147,51,234,0.8), rgba(30,58,138,0.8), rgba(0,0,0,0.8))",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/testimonials-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10" data-aos="fade-up">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real stories from real people who transformed their businesses with us
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          loop={true}
          speed={800}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="testimonials-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard testimonial={t} isActive={i === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
