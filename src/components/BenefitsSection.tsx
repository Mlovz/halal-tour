// src/components/BenefitsSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface Benefit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: "hammock" | "halal" | "personal" | "support" | "transparent";
}

const benefits: Benefit[] = [
  {
    id: "all-organized",
    title: "Мы всё организуем",
    subtitle: "Ты — в гамаке, всё остальное — на нас",
    description:
      "Перелёты, отели, трансферы, страховка и экскурсии — всё в одном месте. Ты просто собираешь чемодан.",
    tag: "Полный цикл",
    icon: "hammock",
  },
  {
    id: "halal-simple",
    title: "Халяль — это просто",
    subtitle: "Ценности, о которых мы помним за тебя",
    description:
      "Подбираем отели, рестораны и маршруты с учётом халяль-питания, районов и времени намаза.",
    tag: "Halal-friendly",
    icon: "halal",
  },
  {
    id: "personal-fit",
    title: "Подбор под тебя",
    subtitle: "Пары, семьи, соло и компании",
    description:
      "Понимаем, как ты любишь отдыхать, и подстраиваем программу, темп и бюджет под тебя.",
    tag: "Персональный подход",
    icon: "personal",
  },
  {
    id: "support-247",
    title: "Поддержка 24/7",
    subtitle: "Не теряемся, даже когда ты теряешься",
    description:
      "Всегда на связи: поможем перестроить маршрут, решить вопрос с отелем или подсказать, где вкусно поесть.",
    tag: "Всегда на связи",
    icon: "support",
  },
  {
    id: "transparent-pricing",
    title: "Прозрачные цены",
    subtitle: "Без сюрпризов внизу чека",
    description:
      "Сразу говорим, что включено в тур, а что — дополнительные опции. Без скрытых доплат и мелкого шрифта.",
    tag: "Честный бюджет",
    icon: "transparent",
  },
];

interface BenefitIconProps {
  type: Benefit["icon"];
}

const BenefitIcon: React.FC<BenefitIconProps> = ({ type }) => {
  const baseClasses =
    "flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.25)]";

  switch (type) {
    case "hammock":
      return (
        <div className={`${baseClasses} border-emerald-400`}>
          <span aria-hidden={true} className="text-lg">
            🏖
          </span>
        </div>
      );
    case "halal":
      return (
        <div className={`${baseClasses} border-emerald-500`}>
          <span aria-hidden={true} className="text-lg">
            🕋
          </span>
        </div>
      );
    case "personal":
      return (
        <div className={`${baseClasses} border-sky-400`}>
          <span aria-hidden={true} className="text-lg">
            🎨
          </span>
        </div>
      );
    case "support":
      return (
        <div className={`${baseClasses} border-rose-400`}>
          <span aria-hidden={true} className="text-lg">
            📞
          </span>
        </div>
      );
    case "transparent":
      return (
        <div className={`${baseClasses} border-amber-400`}>
          <span aria-hidden={true} className="text-lg">
            🔍
          </span>
        </div>
      );
    default:
      return null;
  }
};

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

export const BenefitsSection: React.FC = () => {
  return (
    <motion.section
      id="benefits"
      data-section-id="benefits"
      className="relative bg-sky-50/90 pb-20 pt-12 md:pb-28 md:pt-16 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Фоновые мультяшные пузыри */}
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 right-[-40px] h-40 w-40 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute top-1/2 left-[-50px] h-48 w-48 rounded-full bg-emerald-200/60 blur-2xl" />
        <div className="absolute bottom-[-40px] right-1/3 h-44 w-44 rounded-full bg-amber-200/60 blur-2xl" />
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
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[9px] text-white">
              💚
            </span>
            <span>Мы берём хлопоты на себя, ты — эмоции себе</span>
          </div>

          <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            <span className="block">Почему с&nbsp;Halal Tour</span>
            <span className="block text-sky-700">спокойно и легко</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Мы не просто продаём туры — мы собираем путешествия, в которых тебе
            комфортно: и по эмоциям, и по ценностям, и по бюджету. А ещё —
            остаёмся с тобой на связи от первого «хочу» до прилёта домой.
          </p>
        </motion.div>

        {/* Сцены-преимущества */}
        <motion.div
          className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotate: -0.4,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              }}
              whileTap={{ scale: 0.97 }}
              className="relative flex h-full flex-col rounded-[26px] border-[3px] border-slate-900/5 bg-gradient-to-b from-white via-sky-50/70 to-emerald-50/70 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition hover:shadow-[0_26px_80px_rgba(15,23,42,0.3)]"
            >
              {/* Мультяшная мини-сцена сверху */}
              <div className="mb-3 flex items-start gap-3">
                <BenefitIcon type={benefit.icon} />
                <div className="relative flex-1">
                  <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-sky-100" />
                  <div className="absolute -left-3 top-4 h-4 w-4 rounded-full bg-amber-100" />
                  <h3 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                    {benefit.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>

              {/* «Кадр» с героем — через простые формы */}
              <div className="relative mb-3 h-24 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-emerald-100 to-amber-100">
                <div className="absolute inset-0 opacity-80" />

                {benefit.id === "all-organized" && (
                  <>
                    {/* гамак */}
                    <div className="absolute left-4 top-3 h-1 w-10 rounded-full bg-slate-800/30" />
                    <div className="absolute right-4 top-3 h-1 w-10 rounded-full bg-slate-800/30" />
                    <div className="absolute left-4 top-4 h-16 w-20 rounded-[50%] bg-emerald-200 shadow-md shadow-emerald-300/70" />
                    <div className="absolute left-10 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-lg">
                      🙂
                    </div>
                    {/* документы вокруг */}
                    <div className="absolute right-6 top-5 h-6 w-10 rounded-lg bg-white shadow-md shadow-sky-200/80" />
                    <div className="absolute right-10 bottom-4 h-6 w-10 rounded-lg bg-white shadow-md shadow-sky-200/80" />
                    <div className="absolute right-4 bottom-1 h-6 w-6 rounded-full bg-sky-400 shadow-md shadow-sky-500/70" />
                  </>
                )}

                {benefit.id === "halal-simple" && (
                  <>
                    {/* мечеть + тарелка */}
                    <div className="absolute bottom-0 left-3 flex h-16 w-20 flex-col items-center justify-end rounded-2xl bg-white/90 p-2 shadow-md shadow-emerald-200">
                      <div className="flex w-full items-end justify-between gap-1">
                        <div className="h-8 w-3 rounded-full bg-emerald-300" />
                        <div className="h-10 w-10 rounded-t-full bg-emerald-200" />
                        <div className="h-8 w-3 rounded-full bg-emerald-300" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-6 h-10 w-14 rounded-[999px] bg-amber-200 shadow-md shadow-amber-300/70" />
                    <div className="absolute bottom-6 right-8 h-6 w-10 rounded-[999px] bg-white/95 shadow-md shadow-amber-200">
                      <div className="absolute inset-x-2 top-2 flex justify-between">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      </div>
                    </div>
                  </>
                )}

                {benefit.id === "personal-fit" && (
                  <>
                    {/* три «версии» одного героя */}
                    <div className="absolute bottom-3 left-4 flex h-14 w-9 flex-col items-center justify-end rounded-2xl bg-sky-200 shadow-md shadow-sky-300/70">
                      <div className="mb-1 h-5 w-5 rounded-full bg-amber-200" />
                    </div>
                    <div className="absolute bottom-3 left-14 flex h-14 w-9 flex-col items-center justify-end rounded-2xl bg-emerald-200 shadow-md shadow-emerald-300/70">
                      <div className="mb-1 h-5 w-5 rounded-full bg-amber-200" />
                    </div>
                    <div className="absolute bottom-3 right-8 flex h-14 w-9 flex-col items-center justify-end rounded-2xl bg-rose-200 shadow-md shadow-rose-300/70">
                      <div className="mb-1 h-5 w-5 rounded-full bg-amber-200" />
                    </div>
                    {/* палитра */}
                    <div className="absolute top-4 right-5 flex gap-1 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold text-slate-700 shadow-sm shadow-sky-200">
                      🎨 <span>разные стили отдыха</span>
                    </div>
                  </>
                )}

                {benefit.id === "support-247" && (
                  <>
                    {/* маскот с гарнитурой */}
                    <div className="absolute left-5 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 shadow-md shadow-emerald-500/70">
                      <div className="h-7 w-7 rounded-full bg-white" />
                      <div className="absolute left-0 h-6 w-4 rounded-l-full bg-emerald-500/80" />
                      <div className="absolute right-[-6px] h-4 w-4 rounded-full bg-emerald-500/80" />
                    </div>
                    {/* часовые пояса */}
                    <div className="absolute right-5 top-4 flex gap-1.5">
                      <div className="h-6 w-6 rounded-full bg-white/90 shadow-sm shadow-sky-200">
                        <div className="mt-[6px] h-[2px] w-2 translate-x-[8px] bg-sky-500" />
                      </div>
                      <div className="h-6 w-6 rounded-full bg-white/90 shadow-sm shadow-sky-200">
                        <div className="mt-[6px] h-[2px] w-3 translate-x-[5px] bg-emerald-500" />
                      </div>
                      <div className="h-6 w-6 rounded-full bg-white/90 shadow-sm shadow-sky-200">
                        <div className="mt-[6px] h-[2px] w-1 translate-x-[11px] bg-rose-500" />
                      </div>
                    </div>
                  </>
                )}

                {benefit.id === "transparent-pricing" && (
                  <>
                    {/* чек и лупа */}
                    <div className="absolute left-4 top-4 h-14 w-20 rounded-2xl bg-white shadow-md shadow-slate-200" />
                    <div className="absolute left-5 top-6 h-1.5 w-10 rounded-full bg-slate-200" />
                    <div className="absolute left-5 top-9 h-1.5 w-8 rounded-full bg-slate-200" />
                    <div className="absolute left-5 top-12 h-1.5 w-6 rounded-full bg-emerald-300" />
                    <div className="absolute right-6 bottom-3 h-10 w-10 rounded-full border-[3px] border-sky-400 bg-white shadow-md shadow-sky-300/80" />
                    <div className="absolute right-4 bottom-0 h-3 w-5 rotate-[30deg] rounded-full bg-sky-400" />
                  </>
                )}
              </div>

              {/* Текстовое описание */}
              <p className="text-xs text-slate-600 sm:text-sm">
                {benefit.description}
              </p>

              {/* Тег + мини-CTA */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2 py-1 text-[11px] font-semibold text-sky-900">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{benefit.tag}</span>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm shadow-sky-100 hover:bg-sky-50"
                >
                  Подробнее о подходе
                  <span aria-hidden={true}>➜</span>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
