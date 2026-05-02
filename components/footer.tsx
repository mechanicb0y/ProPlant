'use client';

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const year = new Date().getFullYear();
  const copyright = t.copyright.replace('{year}', year.toString());

  return (
    <footer className="bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-lg text-white">ProPlant</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.navigationLabel}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {t.servicesLabel}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {t.aboutLabel}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {t.contactLabel}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.contactInfoLabel}</h3>
            <address className="not-italic text-neutral-400 text-sm space-y-2">
              <p>{t.locationValue}</p>
              <p>info@proplant.co.jp</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8">
          <p className="text-center text-neutral-500 text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
