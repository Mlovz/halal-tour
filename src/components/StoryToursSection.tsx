// src/components/StoryToursSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface StoryTour {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  priceFrom: string;
  duration: string;
  label: string;
  mood: string;
}

const storyTours: StoryTour[] = [
  {
    id: "story-istanbul",
    title: "Потеряться в улочках Стамбула",
    tagline: "Босфор, базары и вечерние огни",
    bullets: [
      "Для тех, кто любит атмосферу восточных рынков и старого города.",
      "Прогулки по Султанахмету, хамамы, халяль-гастрономия и виды на Босфор.",
      "Спокойные районы для проживания и комфортный ритм города.",
    ],
    priceFrom: "от 490 $",
    duration: "5–7 дней",
    label: "Восточная история",
    mood: "Восток",
  },
  {
    id: "story-tropics",
    title: "Убежать в тропики",
    tagline: "Море, пальмы и полная перезагрузка",
    bullets: [
      "Мальдивы, Занзибар и другие тёплые тропические локации.",
      "Халяль-отели и варианты с приватностью для пар и новобрачных.",
      "Идеально, чтобы выдохнуть и забыть о дедлайнах.",
    ],
    priceFrom: "от 1 300 $",
    duration: "7–12 дней",
    label: "Экзотика",
    mood: "Тропики",
  },
  {
    id: "story-europe",
    title: "Сказочные замки Европы",
    tagline: "Мостовые, панорамы и уютные улочки",
    bullets: [
      "Маршруты с учётом халяль-кафе и комфортных районов.",
      "Подойдёт для семей, пар и любителей неспешных прогулок.",
      "Каждый день — новая открытка в твоём альбоме.",
    ],
    priceFrom: "от 850 €",
    duration: "7–9 дней",
    label: "Европейская сказка",
    mood: "Европа",
  },
  {
    id: "story-mountains",
    title: "Горы, облака и горячий чай",
    tagline: "Трекинг, панорамы и тишина",
    bullets: [
      "Маршруты разной сложности с опытными гидами.",
      "Тёплые вечера, локальные халяль-блюда и звёздное небо.",
      "Подойдёт для тех, кто любит движение и природу.",
    ],
    priceFrom: "от 670 $",
    duration: "5–8 дней",
    label: "Горный воздух",
    mood: "Горы",
  },
  {
    id: "story-weekend",
    title: "Выходные в большом городе",
    tagline: "Сити-брейк по-халяльному",
    bullets: [
      "Короткие перелёты, удобные рейсы и отели в правильных районах.",
      "Идеально, чтобы сменить обстановку на 3–4 дня.",
      "Подойдёт для друзей, соло-путешествий и пар.",
    ],
    priceFrom: "от 390 $",
    duration: "3–4 дня",
    label: "City-break",
    mood: "Город",
  },
  {
    id: "story-family-sea",
    title: "Тёплое море для всей семьи",
    tagline: "Горки, анимация и спокойствие за детей",
    bullets: [
      "Отели с халяль-меню и инфраструктурой для детей.",
      "Аккуратная анимация, детские клубы, водные горки.",
      "Родители отдыхают, дети — счастливы и заняты.",
    ],
    priceFrom: "от 620 $",
    duration: "7–10 дней",
    label: "Семейный формат",
    mood: "Море",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
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

export const StoryToursSection: React.FC = () => {
  return (
    <motion.section
      id="stories"
      data-section-id="stories"
      className="relative bg-amber-50/60 pb-20 pt-12 md:pb-28 md:pt-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Фоновые элементы */}
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-[-40px] h-36 w-36 rounded-full bg-rose-200/50 blur-2xl" />
        <div className="absolute top-1/3 right-[-60px] h-44 w-44 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute bottom-[-40px] left-1/3 h-40 w-40 rounded-full bg-emerald-200/60 blur-2xl" />
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
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm shadow-amber-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-400 text-[9px] text-white">
              🎞
            </span>
            <span>Каждый тур — как своя серия мультфильма</span>
          </div>

          <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            <span className="block">Сюжетные туры: выбери свою</span>
            <span className="block text-sky-700">«серию» путешествия</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Вместо просто набора ночей и перелётов — готовые истории. Выбирай
            то, что ближе: потеряться в улочках Стамбула, убежать в тропики или
            показать детям сказочные замки.
          </p>
        </motion.div>

        {/* Постеры туров */}
        <motion.div
          className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
        >
          {storyTours.map((story) => (
            <motion.article
              key={story.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotate: -0.5,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex flex-col rounded-[28px] border-[3px] border-slate-900/5 bg-gradient-to-b from-sky-50 via-white to-amber-50 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.2)] transition hover:shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            >
              {/* Верх: иллюстративная часть постера */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-200 via-emerald-200 to-amber-200 p-3">
                {/* Псевдо-кинорамка */}
                <div className="absolute inset-x-3 top-3 flex justify-between">
                  <span className="h-1 w-5 rounded-full bg-white/70" />
                  <span className="h-1 w-5 rounded-full bg-white/70" />
                </div>

                <div className="relative h-32 w-full">
                  {/* Небо */}
                  <div className="absolute inset-x-2 top-2 h-14 rounded-[18px] bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-100 shadow-inner shadow-sky-200/80" />

                  {/* Море / гора / город — условные формы */}
                  <div className="absolute bottom-2 left-2 h-12 w-16 rounded-[18px] bg-sky-400 shadow-md shadow-sky-500/60" />
                  <div className="absolute bottom-4 right-4 h-12 w-16 rounded-[22px] bg-emerald-300 shadow-md shadow-emerald-400/70" />
                  <div className="absolute bottom-5 left-1/2 h-10 w-20 -translate-x-1/2 rounded-[999px] bg-white/95 shadow-md shadow-sky-200">
                    <div className="absolute inset-x-2 top-1 flex justify-between gap-1">
                      <span className="h-2 w-2 rounded-full bg-sky-200" />
                      <span className="h-2 w-2 rounded-full bg-sky-200" />
                      <span className="h-2 w-2 rounded-full bg-sky-200" />
                    </div>
                  </div>

                  {/* Солнце/луна */}
                  <div className="absolute left-4 top-4 h-6 w-6 rounded-full bg-amber-300 shadow-sm shadow-amber-400/60" />
                </div>

                {/* Лейбл в углу */}
                <div className="absolute left-3 bottom-3 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-100 shadow-md shadow-slate-900/70">
                  {story.label}
                </div>
              </div>

              {/* Текстовый блок постера */}
              <div className="mt-3 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                      {story.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {story.tagline}
                    </p>
                  </div>
                  <span className="mt-0.5 inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-900">
                    {story.mood}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  {story.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex gap-1.5">
                      <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Низ карточки */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-900">
                      <span aria-hidden={true} className="text-[12px]">
                        💸
                      </span>
                      <span>{story.priceFrom}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2 py-1 text-[11px] font-semibold text-sky-900">
                      <span aria-hidden={true} className="text-[12px]">
                        🕒
                      </span>
                      <span>{story.duration}</span>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1 text-[11px] font-semibold text-white shadow-[0_12px_30px_rgba(244,63,94,0.6)] transition hover:bg-rose-400"
                  >
                    Подробнее
                    <span aria-hidden={true}>➜</span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
