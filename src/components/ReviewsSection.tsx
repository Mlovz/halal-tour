// src/components/ReviewsSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface Review {
  id: string;
  name: string;
  persona: string;
  destination: string;
  quote: string;
  detail: string;
  avatarEmoji: string;
  tag: string;
}

const reviews: Review[] = [
  {
    id: "r-istanbul",
    name: "Айдан и Мурад",
    persona: "пара",
    destination: "Стамбул + Каппадокия",
    quote:
      "Это был наш первый совместный тур — всё продумано до деталей, от halal-кафе до видов на закат.",
    detail:
      "Отдельное спасибо за подсказки по районам и атмосферным местам: казалось, будто друзья советуют.",
    avatarEmoji: "👫",
    tag: "Романтическое путешествие",
  },
  {
    id: "r-dubai",
    name: "Лейла, 32",
    persona: "соло-путешествие",
    destination: "Дубай для перезагрузки",
    quote:
      "Я просто сказала, что хочу море и комфорт — ребята сделали маршрут, в котором не хотелось ничего менять.",
    detail:
      "Было ощущение, что обо мне реально подумали: от района до времени перелётов.",
    avatarEmoji: "🧕",
    tag: "Соло-тур",
  },
  {
    id: "r-family",
    name: "Семья Юсуфовых",
    persona: "семья с детьми",
    destination: "Анталия с детьми",
    quote:
      "Детям — горки и анимация, нам — спокойствие за питание и атмосферу. Вернёмся ещё.",
    detail:
      "Не пришлось объяснять про halal — всё уже было учтено при подборе отеля.",
    avatarEmoji: "👨‍👩‍👧‍👦",
    tag: "Семейный отдых",
  },
  {
    id: "r-europe",
    name: "Тимур",
    persona: "соло-путешествие",
    destination: "Соло-тур по Европе",
    quote:
      "Помогли подобрать города и районы, где мне будет максимально комфортно.",
    detail:
      "Чувствовал поддержку на расстоянии: это сильно успокаивает, когда один в новой стране.",
    avatarEmoji: "🧳",
    tag: "Городские маршруты",
  },
  {
    id: "r-friends",
    name: "Нура + друзья",
    persona: "компания друзей",
    destination: "Уикенд в Стамбуле",
    quote:
      "Мы хотели просто «вырваться на выходные» — получилось мини-приключение с правильным настроением.",
    detail:
      "Спасибо за живые рекомендации по еде и району: сэкономили кучу времени.",
    avatarEmoji: "👭",
    tag: "Туры выходного дня",
  },
  {
    id: "r-tropics",
    name: "Самира и Омар",
    persona: "молодожены",
    destination: "Тропический ретрит",
    quote:
      "Нам хотелось приватности и тишины — всё совпало с мечтой, даже лучше.",
    detail:
      "Каждый день был как отдельный кадр из фильма. Чувствовалось, что это наш тур, а не шаблон.",
    avatarEmoji: "💑",
    tag: "Для двоих",
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
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ReviewsSection: React.FC = () => {
  return (
    <motion.section
      id="reviews"
      data-section-id="reviews"
      className="relative bg-sky-50/90 pb-20 pt-12 md:pb-28 md:pt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Фоновые элементы */}
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-[-40px] h-40 w-40 rounded-full bg-rose-200/60 blur-2xl" />
        <div className="absolute top-1/3 right-[-50px] h-44 w-44 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute bottom-[-40px] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-200/60 blur-2xl" />
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
          <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] text-white">
              💬
            </span>
            <span>Герои наших путешествий — это вы</span>
          </div>

          <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            <span className="block">Голоса путешественников</span>
            <span className="block text-sky-700">которые уже в «титрах»</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Пары, семьи, компании друзей и соло-путешественники — каждый
            привозит свою историю. Мы стараемся, чтобы в этих историях было
            меньше стресса и больше тёплых кадров.
          </p>
        </motion.div>

        {/* Сетка отзывов */}
        <motion.div
          className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
        >
          {reviews.map((review) => (
            <motion.article
              key={review.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              }}
              whileTap={{ scale: 0.97 }}
              className="flex h-full flex-col rounded-[26px] border-[3px] border-slate-900/5 bg-gradient-to-b from-white via-sky-50/70 to-amber-50/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition hover:shadow-[0_26px_80px_rgba(15,23,42,0.3)]"
            >
              {/* Верх: аватар + направление */}
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border-[3px] border-sky-300 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.25)]">
                  <span aria-hidden={true} className="text-lg">
                    {review.avatarEmoji}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-1">
                    <h3 className="text-sm font-extrabold tracking-tight text-slate-900">
                      {review.name}
                    </h3>
                    <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-900">
                      {review.persona}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {review.destination}
                  </p>
                </div>
              </div>

              {/* Облачко реплики */}
              <motion.div
                className="relative mb-3 rounded-2xl bg-white/95 p-3 text-xs text-slate-800 shadow-[0_12px_30px_rgba(15,23,42,0.2)]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="relative z-10">«{review.quote}»</p>
                <div className="absolute -bottom-2 left-6 h-3 w-3 rotate-45 rounded-sm bg-white/95 shadow-[8px_8px_20px_rgba(15,23,42,0.2)]" />
              </motion.div>

              {/* Деталь + тег */}
              <p className="mb-3 text-xs text-slate-600">{review.detail}</p>

              <div className="mt-auto flex items-center justify-between gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 font-semibold text-emerald-900">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{review.tag}</span>
                </span>
                <span className="text-[10px] text-slate-500">
                  отзыв проверен менеджером
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
