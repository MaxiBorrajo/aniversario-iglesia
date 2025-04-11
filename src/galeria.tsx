import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Galeria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fotos = [
    { src: "/img3.jpg", rotate: "-rotate-2", from: "100%" },
    { src: "/img1.jpg", rotate: "rotate-2", from: "-100%" },
    { src: "/img2.jpg", rotate: "-rotate-2", from: "100%" },
  ];

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center w-full p-4 gap-6 bg-white h-full"
    >
      {fotos.map((foto, index) => (
        <motion.div
          key={index}
          initial={{ x: foto.from, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 1 }}
          className={`rounded-xl overflow-hidden ${foto.rotate}`}
        >
          <LazyLoadImage
            src={foto.src}
            alt="iglesia"
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Galeria;
