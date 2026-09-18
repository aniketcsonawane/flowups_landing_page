import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* 🔥 Feature Data */
const featuresData = [
  {
    id: 1,
    icon: "bi-binoculars",
    title: "Innovative Solutions",
    img: "working-1.jpg",
    content: "Cutting-edge technology solutions tailored to your business needs.",
    description: "We leverage the latest technologies to build scalable, efficient solutions that drive growth.",
  },
  {
    id: 2,
    icon: "bi-box-seam",
    title: "Custom Development",
    img: "working-2.jpg",
    content: "Bespoke software crafted for your unique requirements.",
    description: "From concept to deployment, we create custom applications that solve real problems.",
  },
  {
    id: 3,
    icon: "bi-brightness-high",
    title: "Digital Transformation",
    img: "working-3.jpg",
    content: "Modernize your business with digital-first strategies.",
    description: "Transform your operations with cloud-native solutions and automated workflows.",
  },
  {
    id: 4,
    icon: "bi-command",
    title: "24/7 Support",
    img: "working-4.jpg",
    content: "Round-the-clock assistance whenever you need it.",
    description: "Our dedicated support team ensures your systems run smoothly at all times.",
  },
];

/* 🔥 3D Tilt Card Component */
const TiltCard = ({ children, className }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

/* 🔥 Inner Component with Animations */
const FeatureTabContent = ({ feature, isActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={feature.id}
          className="tab-pane active"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="row align-items-center">
            <TiltCard className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg mb-4">{feature.description}</p>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </TiltCard>

            <motion.div 
              className="col-lg-6 order-1 order-lg-2 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TiltCard>
                <motion.img
                  src={`/images/${feature.img}`}
                  className="img-fluid rounded-2xl shadow-2xl mx-auto"
                  alt={feature.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* 🔥 Main Component */
function Features() {
  const [activeTab, setActiveTab] = useState(1);
  
  const activeFeature = featuresData.find(f => f.id === activeTab);
  
  return (
    <section id="features" className="features section py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make us the perfect partner for your digital journey
          </p>
        </motion.div>

        {/* Animated Tabs */}
        <motion.div 
          className="nav nav-tabs row d-flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {featuresData.map((f, index) => (
            <motion.div 
              key={f.id} 
              className="nav-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                className={`nav-link px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === f.id 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(f.id)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.i 
                  className={`bi ${f.icon} text-3xl mb-2 block`}
                  animate={activeTab === f.id ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                ></motion.i>
                <h4 className="font-semibold">{f.title}</h4>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Content */}
        <motion.div 
          className="tab-content"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FeatureTabContent feature={activeFeature} isActive={true} />
        </motion.div>

      </div>
    </section>
  );
}

export default Features;
