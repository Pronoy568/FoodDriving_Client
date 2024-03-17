import "./Banner.css";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, type: "spring", bounce: 0.5 },
  },
};

const Banner = () => {
  return (
    <div className="banner flex items-center justify-center text-center">
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="md:text-center sm:text-left"
      >
        <motion.h1
          variants={introChildren}
          className="text-white text-4xl sm:text-5xl font-bold"
        >
          Welcome to the <br className="sm:hidden" />
          <span className="text-sky-500">Food Driving</span>
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="text-white text-lg sm:text-xl mt-4"
        >
          Revolutionize your food distribution with our cutting-edge{" "}
          <br className="sm:hidden" /> supply management system, simplifying
          logistics and maximizing efficiency.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Banner;
