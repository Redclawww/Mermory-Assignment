
import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <div className="flex  h-screen fixed top-0 -right-4  p-4">
       <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-100, -150],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: 1,
            }}
            className=""
          > 
            <img src="./Flashcard.svg" alt="" className="translate-x-[300px]" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-100, -150],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: 1,
            }}
            className=""
          > 
            <img src="./Flashcard-1.svg" alt="" className="translate-x-40" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-100, -150],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: 1,
            }}
            className=""
          > 
            <img src="./Flashcard-2.svg" alt=""    />
          </motion.div>
    </div>
  );
};

export default ScrollAnimation;
