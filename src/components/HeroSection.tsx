import React, { useState } from "react";
import { motion } from "framer-motion";

type TripMood = "sea" | "east" | "mountains" | "city" | "weekend";

const tripMoods: { id: TripMood; label: string; emoji: string }[] = [
  { id: "sea", label: "Море", emoji: "🌊" },
  { id: "east", label: "Восток", emoji: "🕌" },
  { id: "mountains", label: "Горы", emoji: "🏔" },
  { id: "city", label: "Город", emoji: "🌆" },
  { id: "weekend", label: "Выходные", emoji: "🕒" },
];

export const HeroSection: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<TripMood>("sea");
  const [budget, setBudget] = useState<number>(1500);

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  const handleMoodClick = (mood: TripMood) => {
    setSelectedMood(mood);
  };

  return (
    <section
      data-section-id="hero"
      id="top"
      className="hero-gradient relative overflow-hidden pt-24 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Мягкие фоновые пятна */}
      <div className="pointer-events-none absolute inset-0" aria-hidden={true}>
        <div className="absolute -top-40 -right-32 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:items-start">
        {/* Левая колонка: текст + форма */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-900 shadow-sm shadow-sky-100 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] text-white">
              ✔
            </span>
            <span>halal-friendly путешествия без лишних хлопот</span>
          </motion.div>

          <motion.h1
            className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="block">Путешествуй по-халяльному</span>
            <span className="block text-sky-700">
              как в добром мультфильме о мире
            </span>
          </motion.h1>

          <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
            Мы подберём тур, перелёты и отели так, чтобы тебе было спокойно:
            халяль-питание, комфортные районы, учёт времени намаза и твой стиль
            отдыха.
          </p>

          {/* Карточка-поиск тура */}
          <motion.form
            className="mt-8 rounded-3xl bg-white/90 p-4 shadow-[0_26px_80px_rgba(15,23,42,0.25)] backdrop-blur md:p-6"
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {/* Направление */}
              <div className="space-y-1.5">
                <label
                  htmlFor="destination"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Куда полетим?
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 ring-sky-200 transition focus-within:border-sky-400 focus-within:bg-white focus-within:ring-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs">
                    <span aria-hidden={true}>✈️</span>
                  </span>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    required
                    placeholder="Стамбул, Дубай, Мальдивы…"
                    className="h-7 w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Даты */}
              <div className="space-y-1.5">
                <label
                  htmlFor="dates"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Когда?
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 ring-sky-200 transition focus-within:border-sky-400 focus-within:bg-white focus-within:ring-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs">
                    <span aria-hidden={true}>📅</span>
                  </span>
                  <input
                    id="dates"
                    name="dates"
                    type="text"
                    placeholder="даты или примерный месяц"
                    className="h-7 w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Формат / настроение отдыха */}
              <div className="space-y-1.5 md:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Какой отдых хочется?
                </span>
                <div className="flex flex-wrap gap-2">
                  {tripMoods.map((mood) => {
                    const isActive = selectedMood === mood.id;
                    return (
                      <button
                        key={mood.id}
                        type="button"
                        onClick={() => handleMoodClick(mood.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                          isActive
                            ? "border-sky-500 bg-sky-50 text-sky-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/80 text-slate-600 hover:border-sky-300 hover:bg-sky-50"
                        }`}
                        aria-pressed={isActive}
                      >
                        <span aria-hidden={true}>{mood.emoji}</span>
                        <span>{mood.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Бюджет */}
              <div className="space-y-1.5">
                <label
                  htmlFor="budget"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Примерный бюджет
                </label>
                <div className="rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>до {budget.toLocaleString("ru-RU")} $</span>
                    <span className="text-[10px] uppercase tracking-wide text-slate-400">
                      можно примерно
                    </span>
                  </div>
                  <input
                    id="budget"
                    name="budget"
                    type="range"
                    min={400}
                    max={5000}
                    step={100}
                    value={budget}
                    onChange={handleBudgetChange}
                    className="mt-2 w-full accent-sky-500"
                  />
                </div>
              </div>

              {/* Кто летит */}
              <div className="space-y-1.5">
                <label
                  htmlFor="people"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Кто летит?
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 ring-sky-200 transition focus-within:border-sky-400 focus-within:bg-white focus-within:ring-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs">
                    <span aria-hidden={true}>👨‍👩‍👧</span>
                  </span>
                  <input
                    id="people"
                    name="people"
                    type="text"
                    placeholder="пара, семья, друзья…"
                    className="h-7 w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* CTA + вторичное действие */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgба(244,63,94,0.5)] transition hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Подобрать тур мечты
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center text-sm font-medium text-sky-900 hover:text-sky-700"
              >
                или рассказать нам в мессенджере
                <span className="ml-1 text-lg" aria-hidden={true}>
                  ➜
                </span>
              </button>
            </div>

            {/* Соц-доказательства */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
              <div className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>7+ лет организуем путешествия</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span>1500+ довольных путешественников</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span>отели и программы с учётом halal-деталей</span>
              </div>
            </div>
          </motion.form>
        </motion.div>

        {/* Правая колонка: мультяшная сцена (статичная) */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative h-[320px] w-full sm:h-[380px] md:h-[460px]">
            <div className="hero-card-shadow hero-sky absolute inset-0 overflow-hidden rounded-[40px]">
              {/* Небо */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-amber-100" />

              {/* Планета */}
              <div
                aria-hidden={true}
                className="absolute -bottom-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-300 via-sky-200 to-amber-200"
              />

              {/* Море */}
              <div
                aria-hidden={true}
                className="absolute bottom-10 left-[-40px] h-20 w-[60%] -rotate-[4deg] rounded-[999px] bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg shadow-sky-500/40"
              />

              {/* Пляж */}
              <div
                aria-hidden={true}
                className="absolute bottom-6 right-[-30px] h-16 w-[55%] rotate-[6deg] rounded-[999px] bg-gradient-to-r from-amber-300 to-orange-300 shadow-md shadow-amber-400/30"
              />

              {/* Силуэты городов */}
              <div
                aria-hidden={true}
                className="absolute bottom-24 left-6 flex gap-4 text-sky-900/90"
              >
                <div className="flex h-16 w-16 flex-col items-center justify-end rounded-3xl bg-sky-100/80 p-2 shadow-md shadow-sky-200/50">
                  <div className="h-7 w-7 rounded-full bg-sky-300" />
                  <div className="mt-1 h-1.5 w-8 rounded-full bg-sky-400" />
                  <div className="mt-1 h-1 w-5 rounded-full bg-sky-500" />
                </div>
                <div className="flex h-16 w-16 flex-col items-center justify-end rounded-3xl bg-amber-50/90 p-2 shadow-md shadow-amber-200/70">
                  <div className="h-6 w-6 rounded-full bg-amber-300" />
                  <div className="mt-1 h-2 w-7 rounded-full bg-amber-400" />
                  <div className="mt-1 h-1 w-4 rounded-full bg-amber-500" />
                </div>
              </div>

              {/* Мечеть */}
              <div
                aria-hidden={true}
                className="absolute bottom-24 right-5 flex h-20 w-24 flex-col items-center justify-end rounded-3xl bg-white/80 p-3 shadow-md shadow-slate-300/60"
              >
                <div className="flex w-full items-end justify-between gap-1">
                  <div className="h-10 w-4 rounded-full bg-emerald-300" />
                  <div className="h-14 w-14 rounded-t-full bg-emerald-200" />
                  <div className="h-10 w-4 rounded-full bg-emerald-300" />
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-emerald-400/80" />
              </div>

              {/* Облака */}
              <motion.div
                aria-hidden={true}
                className="absolute left-[-80px] top-10 h-14 w-40 rounded-full bg-white/90 shadow-md shadow-sky-200/80"
                animate={{ x: [0, 12, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
              <motion.div
                aria-hidden={true}
                className="absolute right-[-70px] top-24 h-12 w-32 rounded-full bg-white/90 shadow-md shadow-sky-200/80"
                animate={{ x: [0, -10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
              <motion.div
                aria-hidden={true}
                className="absolute left-10 top-40 h-10 w-24 rounded-full bg-white/80 shadow-sm shadow-sky-200/70"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />

              {/* Самолёт */}
              <div
                aria-hidden={true}
                className="absolute left-1/2 top-1/3 flex -translate-x-1/2 items-center justify-center"
              >
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
              </div>

              {/* Маскот с подсказкой */}
              <div
                aria-hidden={true}
                className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl bg-white/85 px-3 py-2 text-xs font-medium text-slate-700 shadow-md shadow-sky-200/80"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-[12px] text-white">
                  ⦿
                </div>
                <span>«Хали» сопроводит тебя через весь маршрут</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
