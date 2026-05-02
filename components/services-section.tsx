'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: TrendingUp,
      title: t.marketing.title,
      description: t.marketing.description,
      href: "/services/marketing",
      details: [
        t.marketing.detail1,
        t.marketing.detail2,
        t.marketing.detail3,
        t.marketing.detail4,
      ],
    },
    {
      icon: Users,
      title: t.exhibition.title,
      description: t.exhibition.description,
      href: "/services/exhibition/",
      details: [
        t.exhibition.detail1,
        t.exhibition.detail2,
        t.exhibition.detail3,
        t.exhibition.detail4,
      ],
    },
    {
      icon: Star,
      title: t.talent.title,
      description: t.talent.description,
      href: "/services/talent",
      details: [
        t.talent.detail1,
        t.talent.detail2,
        t.talent.detail3,
        t.talent.detail4,
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-balance">
            {t.servicesHeading}
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.servicesSubheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-neutral-200 hover:border-neutral-400 transition-all duration-300 hover:shadow-lg bg-white"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-200 transition-colors">
                  <service.icon className="w-7 h-7 text-neutral-900" />
                </div>
                <CardTitle className="text-xl font-semibold text-neutral-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-neutral-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-3 text-sm text-neutral-600"
                    >
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-black transition-colors"
                >
                  {t.learnMore}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}