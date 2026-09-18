import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.section
      ref={containerRef}
      id="hero"
      className="hero section dark-background overflow-hidden"
      style={{
        backgroundImage: "url(/images/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        y: y1,
        opacity
      }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Parallax Orbits */}
      <motion.div 
        className="hero-depth-scene absolute inset-0" 
        aria-hidden="true"
        style={{ rotate: mousePosition.x * 10 }}
      >
        <motion.span 
          className="hero-depth-orbit orbit-one absolute border border-white/20 rounded-full"
          style={{ 
            width: 600, 
            height: 600, 
            top: '50%', 
            left: '50%', 
            marginLeft: -300, 
            marginTop: -300,
            rotate: mousePosition.y * 20 
          }}
        />
        <motion.span 
          className="hero-depth-orbit orbit-two absolute border border-white/10 rounded-full"
          style={{ 
            width: 400, 
            height: 400, 
            top: '50%', 
            left: '50%', 
            marginLeft: -200, 
            marginTop: -200,
            rotate: mousePosition.x * -30 
          }}
        />
        
        <motion.span 
          className="hero-depth-panel panel-one absolute"
          style={{ 
            top: '20%', 
            left: '10%',
            x: mousePosition.x * 50,
            y: mousePosition.y * 50
          }}
        >
          <span className="depth-signal"><b /><b /><b /></span>
        </motion.span>
        
        <motion.span 
          className="hero-depth-panel panel-two absolute"
          style={{ 
            top: '60%', 
            right: '15%',
            x: mousePosition.x * -40,
            y: mousePosition.y * -40
          }}
        >
          <span className="depth-flow"><b /><b /><b /></span>
        </motion.span>
        
        <motion.span 
          className="hero-depth-panel panel-three absolute"
          style={{ 
            bottom: '15%', 
            left: '25%',
            x: mousePosition.x * 60,
            y: mousePosition.y * -30
          }}
        >
          <span className="depth-chart"><b /><b /><b /><b /></span>
        </motion.span>
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 text-center">
        <motion.h2
          style={{ y: y2 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Technology that moves<br />business forward.
        </motion.h2>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          FlowupS Technologies Pvt. Ltd. builds practical software products and digital solutions for modern businesses.
        </motion.p>

        <motion.div 
          className="mt-8 flex justify-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.a
            href="/contact-us"
            className="btn-get-started px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Our Team
          </motion.a>

          <motion.a
            href="#features"
            className="btn-watch-video px-8 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
