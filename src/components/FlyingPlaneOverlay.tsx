// src/components/FlyingPlaneOverlay.tsx
// Если у тебя Next.js 13+, добавь сверху: "use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const FlyingPlaneOverlay: React.FC = () => {
  // Глобальный прогресс скролла страницы (0 вверху, 1 внизу)
  const { scrollYProgress } = useScroll();

  // Горизонтальное смещение: слева за пределами экрана → вправо → к центру
  const x = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 0.7, 1],
    ["-25vw", "0vw", "55vw", "80vw", "50vw"]
  );

  // Вертикальное смещение: чуть выше → середина → пониже (примерно к CTA)
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["15vh", "25vh", "40vh", "60vh", "72vh"]
  );

  // Поворот по ходу «траектории»
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["-18deg", "-6deg", "8deg", "3deg", "0deg"]
  );

  // Лёгкая игра масштабом
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.8, 0.95, 1.05, 0.96]
  );

  // Плавное появление в начале и лёгкое затухание в самом конце
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.8, 1],
    [0, 1, 1, 0.9]
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-40"
      aria-hidden={true}
      style={{
        opacity,
      }}
    >
      {/* Сам самолёт — обёртка с transform по x/y/rotate/scale */}
      <motion.div
        style={{
          x,
          y,
          rotate,
          scale,
        }}
        className="absolute"
      >
        {/* Контейнер самолёта, чтобы было проще позиционировать */}
        <div className="relative h-16 w-32">
          {/* Основное тело самолёта */}
          <div className="absolute left-0 top-3 h-7 w-32 rounded-full bg-white shadow-lg shadow-sky-300/80">
            {/* Окна */}
            <div className="absolute left-2 top-1 flex gap-1">
              <span className="h-2 w-2 rounded-full bg-sky-200" />
              <span className="h-2 w-2 rounded-full bg-sky-200" />
              <span className="h-2 w-2 rounded-full bg-sky-200" />
            </div>
            {/* Лейбл */}
            <div className="absolute right-3 top-2 rounded-full bg-emerald-400 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
              halal tour
            </div>
          </div>

          {/* Нос самолёта */}
          <div className="absolute -left-3 top-4 h-6 w-6 rounded-l-full bg-white shadow-md shadow-sky-200" />

          {/* Хвост */}
          <div className="absolute right-1 top-0 h-8 w-6 -rotate-[18deg] rounded-t-[14px] bg-sky-500 shadow-md shadow-sky-400/60" />

          {/* Крыло */}
          <div className="absolute left-8 top-6 h-8 w-14 rotate-[16deg] rounded-[999px] bg-sky-400/90 shadow-md shadow-sky-500/40" />

          {/* Лёгкий "шлейф" за самолётом */}
          <div className="absolute -right-6 top-6 h-1 w-10 rounded-full bg-sky-200/60" />
          <div className="absolute -right-10 top-7 h-[2px] w-8 rounded-full bg-sky-100/60" />
        </div>
      </motion.div>
    </motion.div>
  );
};
