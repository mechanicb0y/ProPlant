import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Star, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "マーケティング支援",
    description: "戦略設計から実行までビジネス成長を支援",
    href: "/services/marketing",
    details: [
      "市場調査・競合分析",
      "マーケティング戦略立案",
      "デジタルマーケティング施策",
      "効果測定・改善提案",
    ],
  },
  {
    icon: Users,
    title: "展示会コンシェルジュ",
    description: "選定から運営まで一括サポート",
    href: "/services/exhibition/",
    details: [
      "出展展示会の選定・提案",
      "ブースデザイン・設営",
      "当日運営サポート",
      "来場者フォローアップ",
    ],
  },
  {
    icon: Star,
    title: "タレントマネジメント",
    description: "インフルエンサー、俳優、格闘家の才能を最大化",
    href: "/services/talent",
    details: [
      "タレント発掘・育成",
      "メディア出演交渉",
      "SNS運用サポート",
      "ブランディング戦略",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-balance">
            事業内容
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            3つの事業領域で、お客様のビジネスと才能の成長をトータルサポートします
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
                  詳しく見る
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