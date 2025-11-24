// src/components/ScrollingPlane.tsx
import React from "react";
import { motion } from "framer-motion";
import { type SectionId, useActiveSection } from "../hooks/useActiveSection";

const sectionVariants: Record<SectionId, any> = {
  hero: {
    x: "-18vw",
    y: "-6vh",
    scale: 0.95,
    rotate: -4,
  },
  tours: {
    x: "6vw",
    y: "-2vh",
    scale: 1,
    rotate: 0,
  },
  stories: {
    x: "-10vw",
    y: "4vh",
    scale: 1.02,
    rotate: 3,
  },
  benefits: {
    x: "12vw",
    y: "0vh",
    scale: 1,
    rotate: -3,
  },
  "how-it-works": {
    x: "0vw",
    y: "6vh",
    scale: 1.05,
    rotate: 2,
  },
  reviews: {
    x: "-14vw",
    y: "2vh",
    scale: 1,
    rotate: -2,
  },
  about: {
    x: "10vw",
    y: "-4vh",
    scale: 0.98,
    rotate: 4,
  },
  contacts: {
    x: "-4vw",
    y: "8vh",
    scale: 1.05,
    rotate: 0,
  },
};

const PlaneShape: React.FC = () => {
  return (
    <div className="relative h-20 w-40">
      {/* корпус */}
      <div className="absolute left-0 top-5 h-9 w-40 rounded-full bg-white shadow-lg shadow-sky-300/70">
        <div className="absolute left-3 top-1.5 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
        </div>
        <div className="absolute right-3 top-2 rounded-full bg-emerald-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          halal tour
        </div>
      </div>
      {/* нос */}
      <div className="absolute -left-4 top-6 h-7 w-7 rounded-l-full bg-white shadow-md shadow-sky-200" />
      {/* хвост */}
      <div className="absolute right-2 top-0 h-10 w-7 -rotate-[18deg] rounded-t-[16px] bg-sky-500 shadow-md shadow-sky-400/60" />
      {/* крыло */}
      <div className="absolute left-10 top-8 h-10 w-16 rotate-[16deg] rounded-[999px] bg-sky-400/90 shadow-md shadow-sky-500/40" />
      {/* пассажиры-эмодзи */}
      <div className="absolute left-6 top-3 flex gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-200 text-[10px]">
          🙂
        </div>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-200 text-[10px]">
          😍
        </div>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-[10px]">
          🤗
        </div>
      </div>
    </div>
  );
};

export const ScrollingPlane: React.FC = () => {
  const activeSection = useActiveSection("hero");

  return (
    <motion.div
      className="pointer-events-none fixed left-1/2 top-[22vh] z-40 -translate-x-1/2"
      initial={{ opacity: 0, y: -40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        variants={sectionVariants}
        animate={sectionVariants[activeSection]}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 16,
        }}
      >
        {/* небольшой "прыжок" вверх-вниз, чтобы был мультяшный полёт */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <PlaneShape />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
