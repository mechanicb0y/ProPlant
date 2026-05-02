'use client';

import { Building2, Calendar, User, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const companyInfo = [
    {
      icon: Building2,
      label: t.companyLabel,
      value: t.companyValue,
    },
    {
      icon: Calendar,
      label: t.foundedLabel,
      value: t.foundedValue,
    },
    {
      icon: User,
      label: t.presidentLabel,
      value: t.presidentValue,
    },
    {
      icon: MapPin,
      label: t.locationLabel,
      value: t.locationValue,
    },
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
              Company
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-balance">
              {t.aboutHeading}
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              {t.aboutDescription1}
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              {t.aboutDescription2}
            </p>
          </div>

          {/* Right Content - Company Info Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
            <div className="space-y-6">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-neutral-200 last:border-0 last:pb-0"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 mb-1">{info.label}</p>
                    <p className="font-medium text-neutral-900">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
