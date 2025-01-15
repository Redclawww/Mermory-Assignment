
import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <div className="flex gap-4 h-screen fixed top-0 -right-10 -rotate-6  p-4">
      {columns.map((columnFiles, columnIndex) => (
        <div key={columnIndex} className="flex-1 ">
          <motion.div
            initial={{ y: columnIndex === 1 ? -200 : 0 }}
            animate={{
              y: [columnIndex === 1 ? -200 : 0, columnIndex === 1 ? 0 : -200],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: columnIndex * 2,
            }}
            className="flex flex-col gap-4"
          >
            {columnFiles.items.map((file) => (
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-sm mb-1">{file.title}</h3>
                <p className="text-xs text-gray-600">{file.content}</p>
              </div>
            ))}

            {columnFiles.items.map((file) => (
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-sm mb-1">{file.title}</h3>
                <p className="text-xs text-gray-600">{file.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
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