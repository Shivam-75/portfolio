import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ marginBottom: "2rem" }}>
      {children}
    </motion.div>
  );
};

export default SectionWrapper;