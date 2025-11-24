import React, { useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "#tours", label: "Туры" },
  { href: "#stories", label: "Сюжетные" },
  { href: "#benefits", label: "Почему мы" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#about", label: "О нас" },
  { href: "#contacts", label: "Контакты" },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);
  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl px-4 pt-3">
        {/* Пузырь шапки */}
        <motion.div
          className="flex w-full items-center justify-between rounded-full border-[3px] border-sky-300 bg-gradient-to-r from-sky-50/95 via-sky-100/95 to-emerald-50/95 px-3 py-2.5 shadow-[0_16px_40px_rgba(56,189,248,0.55)] backdrop-blur"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          {/* Лого + бренд */}
          <a href="#top" className="flex items-center gap-3 pr-2">
            <motion.div
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-sky-500 bg-sky-400 shadow-[0_10px_24px_rgba(56,189,248,0.7)]"
              whileHover={{ rotate: [-3, 3, 0] }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-[18px] font-extrabold tracking-tight text-slate-900">
                halal tour
              </span>
            </div>
          </a>

          {/* Навигация — десктоп */}
          <nav className="hidden flex-1 items-center justify-center gap-2 text-[13px] font-semibold text-slate-700 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="group relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-slate-700 transition hover:text-sky-900"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-1 -bottom-1 h-[3px] origin-left scale-x-0 rounded-full bg-sky-400 shadow-[0_4px_0_rgba(56,189,248,0.4)] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* CTA — десктоп */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#consult"
              className="rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-100 transition hover:bg-sky-50"
            >
              Нужна консультация
            </a>
            <a
              href="#quiz"
              className="rounded-full border-[3px] border-rose-400 bg-rose-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_14px_34px_rgba(244,63,94,0.6)] transition hover:bg-rose-400"
            >
              Подобрать тур
            </a>
          </div>

          {/* Кнопка меню — мобильная версия */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-full border-[3px] border-sky-300 bg-white/90 p-1.5 text-slate-800 shadow-md shadow-sky-200 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 md:hidden"
            aria-label="Открыть меню"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-[3px] w-full rounded-full bg-slate-900 transition-transform ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[3px] w-full rounded-full bg-slate-900 transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-[3px] w-full rounded-full bg-slate-900 transition-transform ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden overflow-hidden bg-gradient-to-b from-sky-50/95 to-sky-100/95 transition-[max-height,opacity] duration-200 ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } border-t border-sky-200 shadow-[0_12px_30px_rgba(56,189,248,0.25)]`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-semibold text-slate-800">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="rounded-2xl bg-white/80 px-3 py-2 shadow-sm hover:bg-sky-50"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href="#quiz"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center rounded-full border-[3px] border-rose-400 bg-rose-500 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_12px_30px_rgба(244,63,94,0.55)] hover:bg-rose-400"
            >
              Подобрать тур
            </a>
            <a
              href="#consult"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-900"
            >
              Написать нам
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};
