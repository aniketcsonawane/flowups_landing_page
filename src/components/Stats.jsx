import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statsData = [
  {
    icon: "bi bi-emoji-smile",
    color: "color-blue",
    end: 232,
    label: "Happy Clients",
    suffix: "",
  },
  {
    icon: "bi bi-journal-richtext",
    color: "color-orange",
    end: 521,
    label: "Projects",
    suffix: "",
  },
  {
    icon: "bi bi-headset",
    color: "color-green",
    end: 1463,
    label: "Hours Of Support",
    suffix: "",
  },
  {
    icon: "bi bi-people",
    color: "color-pink",
    end: 15,
    label: "Hard Workers",
    suffix: "+",
  },
];

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="col-lg-3 col-md-6"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="stats-item d-flex align-items-center w-100 h-100 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
        whileHover={{ scale: 1.05, rotateY: 5 }}
        style={{ perspective: 1000 }}
      >
        <motion.i
          className={`bi ${stat.icon} ${stat.color} flex-shrink-0 text-4xl`}
          animate={inView ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.6 }}
        ></motion.i>
        <div className="ml-4">
          <motion.span
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {inView && (
              <CountUp
                start={0}
                end={stat.end}
                duration={2}
                suffix={stat.suffix}
              />
            )}
          </motion.span>
          <p className="text-gray-600 mt-1 font-medium">{stat.label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="stats" className="stats section light-background py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for themselves - delivering excellence since day one
          </p>
        </motion.div>

        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
