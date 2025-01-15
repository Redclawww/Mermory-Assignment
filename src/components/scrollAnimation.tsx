
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


export const columns = [
    {
      id: 1,
      items: [
        { id: 1, title: "Question 1", content: "What is Fourier analysis?" },
        { id: 2, title: "Drop File", content: "Drag or Drop ANI File" },
        { id: 3, title: "Solicitation", content: "If agreement →" },
        { id: 4, title: "Question 2", content: "List three differences..." },
        { id: 1, title: "Question 1", content: "What is Fourier analysis?" },
        { id: 2, title: "Drop File", content: "Drag or Drop ANI File" },
        { id: 3, title: "Solicitation", content: "If agreement →" },
        { id: 4, title: "Question 2", content: "List three differences..." },
      ],
    },
    {
      id: 2,
      items: [
        { id: 5, title: "DNA vs RNA", content: "What is the main difference?" },
        {
          id: 6,
          title: "Arctic Adaptations",
          content: "Describe two adaptations...",
        },
        {
          id: 7,
          title: "Properties",
          content: "Property division for unmarried...",
        },
        {
          id: 8,
          title: "Glasgow Scale",
          content: "What is the Glasgow Coma Scale?",
        },
        { id: 1, title: "Question 1", content: "What is Fourier analysis?" },
        { id: 2, title: "Drop File", content: "Drag or Drop ANI File" },
        { id: 3, title: "Solicitation", content: "If agreement →" },
        { id: 4, title: "Question 2", content: "List three differences..." },
      ],
    },
    {
      id: 3,
      items: [
        {
          id: 9,
          title: "Health Equity",
          content: "The principle of health equity...",
        },
        {
          id: 10,
          title: "Characteristics",
          content: "What are the key characteristics?",
        },
        {
          id: 11,
          title: "Mountains",
          content: "The largest mountains in the world...",
        },
        {
          id: 12,
          title: "Mechanisms",
          content: "Mechanisms that organisms use...",
        },
        { id: 1, title: "Question 1", content: "What is Fourier analysis?" },
        { id: 2, title: "Drop File", content: "Drag or Drop ANI File" },
        { id: 3, title: "Solicitation", content: "If agreement →" },
        { id: 4, title: "Question 2", content: "List three differences..." },
      ],
    },
  ];