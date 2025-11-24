import React, { useState } from "react";
import { motion } from "framer-motion";

type CategoryId =
  | "all"
  | "sea"
  | "east"
  | "mountains"
  | "europe"
  | "exotic"
  | "weekend";

const categories: { id: CategoryId; label: string; emoji: string }[] = [
  { id: "all", label: "Все настроения", emoji: "✨" },
  { id: "sea", label: "Море", emoji: "🌊" },
  { id: "east", label: "Восток", emoji: "🕌" },
  { id: "mountains", label: "Горы", emoji: "🏔" },
  { id: "europe", label: "Европа", emoji: "🇪🇺" },
  { id: "exotic", label: "Экзотика", emoji: "🌴" },
  { id: "weekend", label: "Выходные", emoji: "🕒" },
];

interface Destination {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priceFrom: string;
  duration: string;
  badge?: string;
  categories: CategoryId[];
  mood: string;
}

const destinations: Destination[] = [
  {
    id: "istanbul",
    title: "Стамбул: улочки и Босфор",
    subtitle: "Классика восточного города",
    description:
      "5–7 дней со вкусом: старый город, круиз по Босфору, халяль-гастрономия и уютные районы для прогулок.",
    priceFrom: "от 550 $",
    duration: "5–7 дней",
    badge: "Хит сезона",
    categories: ["east", "weekend"],
    mood: "Восток",
  },
  {
    id: "dubai",
    title: "Дубай: тёплый лоск",
    subtitle: "Сити-брейк или полноценный отдых",
    description:
      "Небоскрёбы, пустыня, шопинг и пляжи. Отели с халяль-питанием и удобным расположением.",
    priceFrom: "от 880 $",
    duration: "5–10 дней",
    badge: "Круглый год",
    categories: ["east", "sea", "exotic"],
    mood: "Город + море",
  },
  {
    id: "antalya-family",
    title: "Анталия для семьи",
    subtitle: "Отели, где спокойно за детей",
    description:
      "Анимация, водные горки, тёплое море и халяль-меню. Подходит для семей с детьми любого возраста.",
    priceFrom: "от 620 $",
    duration: "7–10 дней",
    badge: "Для семей",
    categories: ["sea", "weekend"],
    mood: "Море",
  },
  {
    id: "europe-fairytale",
    title: "Сказочные замки Европы",
    subtitle: "Маршруты с учётом halal",
    description:
      "Замки, старинные улочки и панорамы. Подбираем города, отели и кафе, где тебе будет комфортно.",
    priceFrom: "от 850 €",
    duration: "7–9 дней",
    categories: ["europe"],
    mood: "Европа",
  },
  {
    id: "tropics-escape",
    title: "Убежать в тропики",
    subtitle: "Мальдивы, Занзибар и другие райские места",
    description:
      "Приватные пляжи, бирюзовая вода и полная перезагрузка. Подбираем в том числе виллы с приватностью.",
    priceFrom: "от 1 300 $",
    duration: "7–12 дней",
    categories: ["sea", "exotic"],
    mood: "Экзотика",
  },
  {
    id: "mountain-tea",
    title: "Горы, облака и горячий чай",
    subtitle: "Трекинг и тишина",
    description:
      "Маршруты с панорамами, уютными вечерами и гидами, знающими местные halal-места.",
    priceFrom: "от 670 $",
    duration: "5–8 дней",
    categories: ["mountains"],
    mood: "Горы",
  },
];

interface Marker {
  id: string;
  label: string;
  x: string;
  y: string;
  category: CategoryId;
}

const markers: Marker[] = [
  {
    id: "marker-istanbul",
    label: "Стамбул",
    x: "30%",
    y: "42%",
    category: "east",
  },
  { id: "marker-dubai", label: "Дубай", x: "55%", y: "54%", category: "east" },
  {
    id: "marker-antalya",
    label: "Анталия",
    x: "35%",
    y: "52%",
    category: "sea",
  },
  {
    id: "marker-europe",
    label: "Европа",
    x: "20%",
    y: "30%",
    category: "europe",
  },
  {
    id: "marker-tropics",
    label: "Тропики",
    x: "68%",
    y: "78%",
    category: "exotic",
  },
  {
    id: "marker-mountains",
    label: "Горы",
    x: "18%",
    y: "55%",
    category: "mountains",
  },
];

export const DestinationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredDestinations =
    activeCategory === "all"
      ? destinations
      : destinations.filter((dest) => dest.categories.includes(activeCategory));

  return (
    <section
      id="tours"
      data-section-id="tours"
      className="relative bg-sky-50/80 pb-20 pt-10 md:pb-28 md:pt-16"
    >
      {/* Фоновые пузыри */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-[-40px] h-40 w-40 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute -bottom-24 right-[-50px] h-52 w-52 rounded-full bg-emerald-200/50 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Заголовок + фильтры */}
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-100">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-400 text-[9px] text-white">
                ★
              </span>
              <span>Выбирай настроения — мы подберём страну и маршрут</span>
            </div>

            <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              <span className="block">
                Куда полетим
                <span className="hidden sm:inline"> в этот раз</span>?
              </span>
              <span className="block text-sky-700">
                Карта halal-путешествий от{" "}
                <span className="rounded-full bg-sky-100/70 px-2 py-0.5">
                  halal tour
                </span>
              </span>
            </h2>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Море, горы, восточные города или сказочные замки — отметь, что
              хочется почувствовать, и мы предложим тур с перелётами, отелями и
              halal-деталями.
            </p>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    isActive
                      ? "border-sky-500 bg-sky-50 text-sky-900 shadow-sm shadow-sky-200"
                      : "border-slate-200 bg-white/80 text-slate-600 hover:border-sky-300 hover:bg-sky-50"
                  }`}
                >
                  <span aria-hidden="true">{category.emoji}</span>
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Карта + карточки */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.3fr)] lg:items-start">
          {/* Мультяшная карта */}
          <div className="relative">
            <div className="hero-card-shadow relative overflow-hidden rounded-[36px] border-[3px] border-sky-200 bg-gradient-to-b from-sky-200 via-sky-100 to-amber-100 px-4 pb-5 pt-5">
              {/* Континенты (условные) */}
              <div aria-hidden="true" className="relative h-64 w-full">
                <div className="absolute left-4 top-12 h-32 w-36 rounded-[40px] bg-emerald-200/80 shadow-lg shadow-emerald-300/60" />
                <div className="absolute right-6 top-10 h-28 w-32 rounded-[38px] bg-emerald-300/80 shadow-lg shadow-emerald-400/70" />
                <div className="absolute left-1/2 top-32 h-24 w-40 -translate-x-1/2 rounded-[40px] bg-lime-200/80 shadow-lg shadow-lime-300/60" />
                <div className="absolute left-10 bottom-3 h-14 w-28 rounded-[40px] bg-sky-300/80 shadow-md shadow-sky-400/60" />
                <div className="absolute right-8 bottom-5 h-14 w-28 rounded-[40px] bg-cyan-300/80 shadow-md shadow-cyan-400/60" />

                {/* Маркеры направлений */}
                {markers.map((marker) => {
                  const highlighted =
                    activeCategory === "all" ||
                    activeCategory === marker.category;
                  return (
                    <motion.button
                      key={marker.id}
                      type="button"
                      className={`group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${
                        highlighted ? "opacity-100" : "opacity-40"
                      }`}
                      style={{ left: marker.x, top: marker.y }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 15,
                      }}
                    >
                      <div className="rounded-full border-[3px] border-rose-400 bg-rose-500 px-2 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-[0_10px_24px_rgबा(244,63,94,0.6)] transition-transform group-hover:scale-105 group-hover:bg-rose-400">
                        •
                      </div>
                      <div className="mt-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-800 shadow-sm shadow-sky-200">
                        {marker.label}
                      </div>
                    </motion.button>
                  );
                })}

                {/* Маленький самолётик, как будто летит над картой */}
                <div
                  aria-hidden="true"
                  className="absolute right-6 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-slate-700 shadow-sm shadow-sky-200"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 text-[10px] text-white">
                    ✈
                  </span>
                  <span>Твой маршрут вырисовывается…</span>
                </div>
              </div>

              {/* Легенда карты */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600">
                <div className="inline-flex items-center gap-1.5 rounded-2xl bg-white/90 px-2.5 py-1 shadow-sm shadow-sky-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Halal-friendly отели и районы</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-2xl bg-white/90 px-2.5 py-1 shadow-sm shadow-sky-100">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span>Подбор перелётов и трансферов</span>
                </div>
              </div>
            </div>
          </div>

          {/* Карточки направлений */}
          <div className="space-y-4 md:space-y-5">
            {filteredDestinations.map((dest, index) => (
              <motion.article
                key={dest.id}
                className="group flex flex-col gap-3 rounded-3xl border border-sky-100 bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)] md:flex-row md:items-stretch md:gap-4 md:p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                {/* Иллюстративный мини-превью */}
                <div className="flex w-full items-stretch md:w-40">
                  <div className="relative flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 via-emerald-200 to-amber-200 p-3 shadow-inner shadow-sky-100">
                    <div className="relative h-20 w-full max-w-[120px]">
                      <div className="absolute bottom-0 left-0 right-0 h-9 rounded-[999px] bg-gradient-to-r from-sky-400 to-cyan-400 shadow-md shadow-sky-500/50" />
                      <div className="absolute bottom-4 left-2 h-10 w-10 rounded-3xl bg-sky-100 shadow-md shadow-sky-200/50" />
                      <div className="absolute bottom-6 right-3 h-12 w-12 rounded-[40px] bg-emerald-200 shadow-md shadow-emerald-300/60" />
                      <div className="absolute left-6 bottom-5 h-6 w-12 rounded-[999px] bg-white/90 shadow-md shadow-sky-200">
                        <div className="absolute inset-x-1 top-1 flex justify-between gap-1">
                          <span className="h-2 w-2 rounded-full bg-sky-200" />
                          <span className="h-2 w-2 rounded-full bg-sky-200" />
                          <span className="h-2 w-2 rounded-full bg-sky-200" />
                        </div>
                      </div>
                      <div className="absolute -top-1 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-amber-300 shadow-sm shadow-amber-400/60" />
                    </div>
                    {dest.badge && (
                      <div className="absolute left-3 top-3 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_8px_20px_rgба(244,63,94,0.6)]">
                        {dest.badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Текстовая часть */}
                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                        {dest.title}
                      </h3>
                      <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-800">
                        {dest.mood}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {dest.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {dest.description}
                    </p>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2 py-1 text-[11px] font-semibold text-sky-900">
                        <span className="text-[12px]" aria-hidden="true">
                          💰
                        </span>
                        <span>{dest.priceFrom}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-900">
                        <span className="text-[12px]" aria-hidden="true">
                          🕒
                        </span>
                        <span>{dest.duration}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_26px_rgба(244,63,94,0.6)] transition hover:bg-rose-400"
                    >
                      Подробнее
                      <span aria-hidden="true">➜</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
