"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeInOut" 
      }}
      style={{
        width: "100%",
        minHeight: "100vh",
        // 모바일 최적화
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "none",
      }}
    >
      {children}
    </motion.div>
  );
}