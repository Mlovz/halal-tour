// src/components/FinalCtaSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export const FinalCtaSection: React.FC = () => {
  const [wantHalalDetails, setWantHalalDetails] = useState(true);

  return (
    <motion.section
      id="quiz"
      data-section-id="quiz"
      className="relative bg-sky-50/95 pb-20 pt-12 md:pb-28 md:pt-16 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* фон */}
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-[-40px] h-44 w-44 rounded-full bg-amber-200/60 blur-2xl" />
        <div className="absolute top-1/2 right-[-60px] h-48 w-48 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute bottom-[-40px] left-1/3 h-40 w-40 rounded-full bg-emerald-200/60 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Заголовок */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-400 text-[9px] text-white">
              🚀
            </span>
            <span>Следующая серия путешествия может быть твоей</span>
          </div>

          <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            <span className="block">Готовы взлететь?</span>
            <span className="block text-sky-700">
              Расскажи, какой должна быть твоя поездка
            </span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Мы подготовим для тебя 1–3 варианта тура с учётом halal-деталей,
            бюджета и дат — без навязчивых звонков и спама. Просто удобный
            диалог о путешествии.
          </p>
        </motion.div>

        {/* Карточка CTA: взлётная полоса + форма */}
        <motion.div
          className="mt-8 grid gap-6 rounded-[32px] border-[3px] border-slate-900/5 bg-gradient-to-r from-amber-100 via-sky-50 to-emerald-100 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.3)] md:mt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:p-6"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Левая часть: сцена */}
          <div className="relative flex items-center justify-center rounded-[28px] bg-gradient-to-b from-sky-200 via-sky-100 to-amber-100 p-4">
            <div className="relative h-48 w-full max-w-sm">
              {/* Взлётная полоса */}
              <div className="absolute bottom-0 left-1/2 h-28 w-40 -translate-x-1/2 rounded-[999px] bg-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.55)]" />
              <div className="absolute bottom-8 left-1/2 h-[2px] w-24 -translate-x-1/2 bg-amber-200" />
              <div className="absolute bottom-12 left-1/2 h-[2px] w-14 -translate-x-1/2 bg-amber-100" />

              {/* Самолёт на старте */}
              <motion.div
                className="absolute bottom-20 left-1/2 h-16 w-32 -translate-x-1/2"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute left-0 top-3 h-7 w-32 rounded-full bg-white shadow-lg shadow-sky-300/80">
                  <div className="absolute left-2 top-1 flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-sky-200" />
                    <span className="h-2 w-2 rounded-full bg-sky-200" />
                    <span className="h-2 w-2 rounded-full bg-sky-200" />
                  </div>
                  <div className="absolute right-3 top-2 rounded-full bg-emerald-400 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
                    halal tour
                  </div>
                </div>
                <div className="absolute -left-3 top-4 h-6 w-6 rounded-l-full bg-white shadow-md shadow-sky-200" />
                <div className="absolute right-1 top-0 h-8 w-6 -rotate-[18deg] rounded-t-[14px] bg-sky-500 shadow-md shadow-sky-400/60" />
                <div className="absolute left-8 top-6 h-8 w-14 rotate-[16deg] rounded-[999px] bg-sky-400/90 shadow-md shadow-sky-500/40" />
              </motion.div>

              {/* Персонажи, машущие перед вылетом */}
              <motion.div
                className="absolute bottom-10 left-6 flex h-16 w-10 flex-col items-center justify-end rounded-[16px] bg-rose-200 shadow-md shadow-rose-300/70"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <div className="mb-1 h-5 w-5 rounded-full bg-amber-200" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-8 flex h-16 w-10 flex-col items-center justify-end rounded-[16px] bg-emerald-200 shadow-md shadow-emerald-300/70"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                <div className="mb-1 h-5 w-5 rounded-full bg-amber-200" />
              </motion.div>

              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-slate-800 shadow-sm shadow-sky-200">
                ✈ Следующая остановка — твоё путешествие
              </div>
            </div>
          </div>

          {/* Правая часть: форма */}
          <motion.div
            className="rounded-[28px] bg-white/95 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.25)] md:p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // здесь можно будет внедрить реальный submit
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="cta-name"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Имя
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    placeholder="как к вам обращаться?"
                    className="h-9 w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="cta-contact"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Контакт
                  </label>
                  <input
                    id="cta-contact"
                    name="contact"
                    type="text"
                    required
                    placeholder="Telegram, WhatsApp или e-mail"
                    className="h-9 w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="cta-destination"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Страна или формат отдыха
                </label>
                <input
                  id="cta-destination"
                  name="destination"
                  type="text"
                  placeholder="например: Стамбул, море с детьми, тропики…"
                  className="h-9 w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="cta-dates"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Даты или примерный период
                </label>
                <input
                  id="cta-dates"
                  name="dates"
                  type="text"
                  placeholder="например: май или 10–20 августа"
                  className="h-9 w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="cta-notes"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Что важно учесть?
                </label>
                <textarea
                  id="cta-notes"
                  name="notes"
                  rows={3}
                  placeholder="дети, пожелания по питанию, темп, бюджет (примерно)…"
                  className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                />
              </div>

              {/* чекбокс halal-деталей */}
              <div className="flex flex-col gap-2 text-xs text-slate-600">
                <label className="inline-flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    name="wantHalalDetails"
                    checked={wantHalalDetails}
                    onChange={() => setWantHalalDetails((v) => !v)}
                    className="mt-[2px] h-4 w-4 rounded border-sky-300 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>
                    Важно учесть{" "}
                    <span className="font-semibold">
                      halal-питание, районы и время намаза
                    </span>
                  </span>
                </label>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(244,63,94,0.5)] transition hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Получить подборку туров
                </motion.button>
                <p className="text-[11px] text-slate-500">
                  Отправляя заявку, ты соглашаешься на аккуратный контакт от
                  нашего менеджера без спама.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
