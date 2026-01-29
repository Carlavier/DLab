import { useRef, ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  delay = 0,
  className = ""
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}