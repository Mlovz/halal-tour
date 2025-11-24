// src/components/HowItWorksSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface Step {
  id: string;
  title: string;
  text: string;
  label: string;
  icon: string;
}

const steps: Step[] = [
  {
    id: "step-choose",
    title: "Ты выбираешь направление",
    text: "Заполняешь форму на сайте или пишешь нам в мессенджер — рассказываешь, как хочешь отдыхать.",
    label: "Шаг 1",
    icon: "🧭",
  },
  {
    id: "step-pick",
    title: "Мы подбираем тур",
    text: "Собираем для тебя варианты по датам, бюджету и halal-деталям, обсуждаем и дорабатываем программу.",
    label: "Шаг 2",
    icon: "🗺️",
  },
  {
    id: "step-docs",
    title: "Оформляем документы",
    text: "Берём на себя бронирования, визы (если нужны), страховку и все подтверждения по поездке.",
    label: "Шаг 3",
    icon: "📄",
  },
  {
    id: "step-flight",
    title: "Ты уже в самолёте",
    text: "Отправляешься в путешествие, а мы остаёмся с тобой в чате и помогаем по любым вопросам.",
    label: "Шаг 4",
    icon: "✈️",
  },
  {
    id: "step-photos",
    title: "Делишься фотками",
    text: "Возвращаешься с улыбкой и впечатлениями — и мы готовим для тебя следующую «серию» путешествий.",
    label: "Шаг 5",
    icon: "📷",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HowItWorksSection: React.FC = () => {
  return (
    <motion.section
      id="how-it-works"
      data-section-id="how-it-works"
      className="relative bg-amber-50/70 pb-20 pt-12 md:pb-28 md:pt-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Фоновые элементы */}
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-[-40px] h-40 w-40 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute top-1/2 right-[-50px] h-44 w-44 rounded-full bg-emerald-200/60 blur-2xl" />
        <div className="absolute bottom-[-40px] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-200/60 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Заголовок */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm shadow-amber-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-400 text-[9px] text-white">
              📚
            </span>
            <span>Путешествие в 5 простых шагов</span>
          </div>

          <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            <span className="block">Как всё работает —</span>
            <span className="block text-sky-700">
              как комикс про твою поездку
            </span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Ты не захламляешь голову деталями: просто рассказываешь, чего
            хочешь, а дальше шаг за шагом мы превращаем это в живую поездку — с
            билетами, отелями и халяль-подходом.
          </p>
        </motion.div>

        {/* Комикс-линия + панели */}
        <div className="relative mt-10 md:mt-12">
          {/* Линия, соединяющая шаги (декоративная) */}
          <motion.div
            aria-hidden={true}
            className="pointer-events-none absolute inset-x-0 top-12 hidden h-[3px] rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left center" }}
          />

          <motion.div
            className="grid gap-4 md:grid-cols-5"
            variants={listVariants}
          >
            {steps.map((step, index) => (
              <motion.article
                key={step.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                }}
                whileTap={{ scale: 0.97 }}
                className="relative flex h-full flex-col rounded-[22px] border-[3px] border-slate-900/5 bg-gradient-to-b from-white via-sky-50/70 to-amber-50/80 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.2)] transition hover:shadow-[0_24px_70px_rgba(15,23,42,0.3)]"
              >
                {/* Номер шага */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-900">
                    {step.label}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Верхняя мини-сцена */}
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border-[3px] border-sky-300 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.25)]">
                    <span aria-hidden={true} className="text-lg">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                    {step.title}
                  </h3>
                </div>

                {/* Комикс-кадр (фон) */}
                <div className="mt-3 mb-3 h-20 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-emerald-100 to-amber-100">
                  <div className="relative h-full w-full">
                    <div className="absolute left-2 top-3 h-3 w-10 rounded-full bg-white/80" />
                    <div className="absolute right-3 bottom-3 h-3 w-8 rounded-full bg-white/80" />
                    <div className="absolute left-3 bottom-4 h-10 w-16 rounded-3xl bg-white/80 shadow-md shadow-sky-200/80" />
                    <div className="absolute left-6 bottom-7 h-5 w-5 rounded-full bg-amber-200" />
                    <div className="absolute right-6 top-3 h-6 w-6 rounded-full bg-amber-300 shadow-sm shadow-amber-400/70" />
                  </div>
                </div>

                {/* Текст шага */}
                <p className="text-xs text-slate-600 sm:text-[13px]">
                  {step.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
