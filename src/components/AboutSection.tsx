// src/components/AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { id: "years", label: "лет организуем путешествия", value: "7+" },
  { id: "countries", label: "стран в наших маршрутах", value: "30+" },
  { id: "travelers", label: "довольных путешественников", value: "1500+" },
  { id: "repeat", label: "клиентов возвращаются снова", value: "93%" },
];

const teamRoles = [
  { id: "turkey", label: "Эксперт по Турции", emoji: "🇹🇷" },
  { id: "uae", label: "Эксперт по ОАЭ", emoji: "🇦🇪" },
  { id: "family", label: "Семейные путешествия", emoji: "👨‍👩‍👧‍👦" },
  { id: "weekend", label: "Туры выходного дня", emoji: "🕒" },
];

const statsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const statCardVariants: any = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      data-section-id="about"
      className="relative bg-amber-50/80 pb-20 pt-12 md:pb-28 md:pt-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Фон */}
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 right-[-40px] h-40 w-40 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute top-1/2 left-[-50px] h-44 w-44 rounded-full bg-emerald-200/60 blur-2xl" />
        <div className="absolute bottom-[-40px] right-1/2 h-40 w-40 rounded-full bg-rose-200/60 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Заголовок + текст */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm shadow-amber-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-400 text-[9px] text-white">
              🎬
            </span>
            <span>Кто рисует твоё путешествие за кадром</span>
          </div>

          <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            <span className="block">Halal Tour — команда,</span>
            <span className="block text-sky-700">
              которая переживает за каждую поездку
            </span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Мы начали с того, что искали комфортные по-халяльному путешествия
            для себя и друзей. Со временем вокруг нас собралась команда тех, кто
            обожает маршруты, детали и заботу. Сегодня мы организуем поездки в
            десятки стран и остаёмся с тобой на связи от первой идеи до
            возвращения домой.
          </p>
        </motion.div>

        {/* Сетка: stats + сцена офиса */}
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-stretch">
          {/* Статистика + роли */}
          <div className="space-y-6">
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              variants={statsVariants}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={statCardVariants}
                  className="flex flex-col rounded-2xl border border-sky-100 bg-white/95 p-3 shadow-sm shadow-sky-100"
                >
                  <span className="text-xl font-extrabold tracking-tight text-sky-800 sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[11px] font-medium text-slate-600 sm:text-xs">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="rounded-2xl border border-emerald-100 bg-white/95 p-3 shadow-sm shadow-emerald-100"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Наши «режиссёры» путешествий
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {teamRoles.map((role) => (
                  <div
                    key={role.id}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-900"
                  >
                    <span aria-hidden={true}>{role.emoji}</span>
                    <span>{role.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Офис/команда — мультяшная сцена */}
          <motion.div
            className="hero-card-shadow relative overflow-hidden rounded-[32px] border-[3px] border-slate-900/5 bg-gradient-to-b from-sky-100 via-amber-50 to-emerald-50 p-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-64 w-full">
              {/* Стол с картой */}
              <div className="absolute bottom-6 left-1/2 h-20 w-64 -translate-x-1/2 rounded-[28px] bg-amber-200 shadow-[0_18px_40px_rgba(180,83,9,0.45)]" />
              <div className="absolute bottom-8 left-1/2 h-16 w-56 -translate-x-1/2 rounded-[24px] bg-gradient-to-r from-emerald-200 via-sky-200 to-amber-200 shadow-md shadow-emerald-300/60" />

              <div className="absolute bottom-12 left-1/2 flex w-48 -translate-x-1/2 flex-col gap-1 text-[9px] text-slate-800">
                <div className="flex items-center justify-between">
                  <span className="h-[2px] w-16 rounded-full bg-sky-500" />
                  <span className="h-[2px] w-8 rounded-full bg-emerald-500" />
                  <span className="h-[2px] w-10 rounded-full bg-rose-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="h-[2px] w-8 rounded-full bg-amber-400" />
                  <span className="h-[2px] w-10 rounded-full bg-sky-400" />
                  <span className="h-[2px] w-14 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Персонажи вокруг стола */}
              <motion.div
                className="absolute bottom-14 left-6 flex h-20 w-12 flex-col items-center justify-end rounded-[18px] bg-sky-200 shadow-md shadow-sky-300/70"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <div className="mb-1 h-6 w-6 rounded-full bg-amber-200" />
              </motion.div>
              <motion.div
                className="absolute bottom-14 right-6 flex h-20 w-12 flex-col items-center justify-end rounded-[18px] bg-emerald-200 shadow-md shadow-emerald-300/70"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <div className="mb-1 h-6 w-6 rounded-full bg-amber-200" />
              </motion.div>
              <motion.div
                className="absolute bottom-16 left-1/2 flex h-24 w-14 -translate-x-1/2 flex-col items-center justify-end rounded-[20px] bg-rose-200 shadow-md shadow-rose-300/70"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="mb-1 h-7 w-7 rounded-full bg-amber-200" />
              </motion.div>

              {/* Стикеры/заметки */}
              <div className="absolute top-4 left-4 h-10 w-16 rounded-xl bg-white/90 shadow-md shadow-sky-200">
                <div className="mt-2 ml-2 h-1.5 w-8 rounded-full bg-sky-200" />
                <div className="mt-1 ml-2 h-1.5 w-6 rounded-full bg-emerald-200" />
              </div>
              <div className="absolute top-4 right-6 h-8 w-14 rotate-[8deg] rounded-xl bg-amber-100 shadow-md shadow-amber-200">
                <div className="mt-2 ml-2 h-1.5 w-6 rounded-full bg-amber-300" />
              </div>

              {/* Экран с маршрутом */}
              <div className="absolute top-16 left-1/2 h-14 w-40 -translate-x-1/2 rounded-[18px] bg-slate-900 shadow-md shadow-slate-900/60">
                <div className="mt-2 flex justify-center gap-2 text-[9px] text-sky-100">
                  <span className="h-1.5 w-12 rounded-full bg-sky-500" />
                  <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-3 flex justify-center gap-1">
                  <span className="h-[2px] w-10 rounded-full bg-sky-400" />
                  <span className="h-[2px] w-6 rounded-full bg-emerald-300" />
                  <span className="h-[2px] w-8 rounded-full bg-rose-400" />
                </div>
              </div>

              {/* Маскот Хали на чемоданах */}
              <motion.div
                className="absolute bottom-10 left-1/2 flex -translate-x-[140%] flex-col items-center gap-1"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-white shadow-md shadow-emerald-500/70">
                  ⦿
                </div>
                <div className="h-4 w-10 rounded-md bg-amber-300 shadow-sm shadow-amber-400/70" />
                <div className="h-4 w-9 rounded-md bg-sky-300 shadow-sm shadow-sky-400/70" />
              </motion.div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 shadow-sm shadow-sky-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Собираем маршруты вручную, а не по шаблону</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 shadow-sm shadow-amber-100">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span>Смотрим на детали, чтобы тебе было спокойно</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
