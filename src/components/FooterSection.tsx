// src/components/FooterSection.tsx
import React, { useRef } from "react";

export const FooterSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <footer
      id="contacts"
      data-section-id="contacts"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-sky-50 via-amber-50 to-sky-100 pt-12 text-slate-900 overflow-hidden"
    >
      {/* фоновые пятна */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="js-footer-bg-bubble absolute -top-10 left-[-40px] h-40 w-40 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="js-footer-bg-bubble absolute top-1/3 right-[-50px] h-44 w-44 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="js-footer-bg-bubble absolute bottom-[-40px] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-6">
        {/* Контент футера: контакты + форма */}
        <div className="grid gap-8 pb-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:gap-10">
          {/* Лево: бренд + контакты + соцсети */}
          <div className="js-footer-info">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-sky-300 bg-sky-400 shadow-[0_10px_24px_rgba(56,189,248,0.7)]">
                <span className="sr-only">Halal Tour</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    d="M3 13l8.5 1L7 21l2 1 6-6 4.5.5a1 1 0 00.8-1.7L16 11l1-7-2-1-3 7L6 7 4 8l4 5-5 .5a1 1 0 000 1.9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-extrabold tracking-tight text-slate-900">
                  halal tour
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  путешествия, в которых тебе спокойно
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-1.5 text-sm">
              <p>
                <span className="font-semibold text-slate-900">Телефон:</span>{" "}
                <a
                  href="tel:+70000000000"
                  className="text-sky-700 hover:text-sky-900"
                >
                  +7 (000) 000-00-00
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">E-mail:</span>{" "}
                <a
                  href="mailto:hello@halaltour.com"
                  className="text-sky-700 hover:text-sky-900"
                >
                  hello@halaltour.com
                </a>
              </p>
            </div>

            <div className="mt-4 space-y-1.5 text-sm">
              <p className="font-semibold text-slate-900">Мессенджеры:</p>
              <div className="mt-1 flex flex-wrap gap-2 text-[13px]">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full bg-sky-500/90 px-3 py-1 text-sky-50 shadow-sm shadow-sky-300 hover:bg-sky-400"
                >
                  <span>Telegram</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-emerald-50 shadow-sm shadow-emerald-300 hover:bg-emerald-400"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="mt-4 space-y-1.5 text-sm">
              <p className="font-semibold text-slate-900">Мы в соцсетях:</p>
              <div className="mt-1 flex flex-wrap gap-2 text-[13px]">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-3 py-1 text-slate-700 hover:bg-slate-900/10"
                >
                  <span>Instagram*</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-3 py-1 text-slate-700 hover:bg-slate-900/10"
                >
                  <span>TikTok</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-3 py-1 text-slate-700 hover:bg-slate-900/10"
                >
                  <span>YouTube</span>
                </a>
              </div>
              <p className="mt-1 text-[10px] text-slate-400">
                *Запрещённая в РФ соцсеть — используем только как витрину с
                вдохновением.
              </p>
            </div>
          </div>

          {/* Право: мини-форма «Нужна помощь?» */}
          <div
            id="consult"
            className="js-footer-form rounded-[24px] border border-sky-100 bg-white/95 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.15)] md:p-5"
          >
            <h3 className="text-base font-extrabold tracking-tight text-slate-900">
              Нужна помощь с выбором?
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Оставь контакт — аккуратно напишем без спама и поможем
              определиться с направлением или форматом отдыха.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-4 space-y-3 text-sm"
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="footer-name"
                  className="text-[11px] font-semibold text-slate-700"
                >
                  Имя
                </label>
                <input
                  id="footer-name"
                  name="name"
                  type="text"
                  placeholder="как к вам обращаться?"
                  className="h-9 w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="footer-contact"
                  className="text-[11px] font-semibold text-slate-700"
                >
                  Контакт
                </label>
                <input
                  id="footer-contact"
                  name="contact"
                  type="text"
                  placeholder="Telegram, WhatsApp или e-mail"
                  className="h-9 w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="footer-question"
                  className="text-[11px] font-semibold text-slate-700"
                >
                  Кратко, что вас интересует
                </label>
                <textarea
                  id="footer-question"
                  name="question"
                  rows={2}
                  placeholder="например: тур на май, море с детьми, бюджет…"
                  className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring-2 placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-xs font-semibold text-white shadow-[0_14px_34px_rgba(244,63,94,0.5)] transition hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Жду вашего сообщения
              </button>
            </form>
          </div>
        </div>

        {/* Нижняя линия */}
        <div className="border-t border-sky-100 pt-4 text-[11px] text-slate-500">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
            <span>
              © halal tour, {new Date().getFullYear()}. Путешествия, в которых
              тебе спокойно.
            </span>
            <span>Сделано с заботой о halal-подходе и деталях.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
