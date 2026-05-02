import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Workflow,
  BarChart3,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Rocket,
  LineChart,
  ChevronRight
} from "lucide-react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "マーケティング支援事業 | ProPlant合同会社",
  description: "国内外の企業向けにプロモーション戦略の設計から実行までをワンストップでサポート。グローバル対応、一気通貫のサービス、データドリブンな最適化で、ビジネスの成長を加速します。",
};

const features = [
  {
    icon: Globe,
    title: "グローバル対応",
    description: "国内市場はもちろん、海外市場への展開もサポート。多言語対応のマーケティング施策で、グローバルなビジネス展開を実現します。",
    points: [
      "多言語コンテンツ制作",
      "海外市場リサーチ",
      "クロスボーダーEC支援",
      "現地パートナーとの連携",
    ],
  },
  {
    icon: Workflow,
    title: "戦略から実行までの一気通貫",
    description: "戦略立案からクリエイティブ制作、広告運用、効果測定まで。すべてをワンストップで提供し、シームレスなマーケティング活動を実現します。",
    points: [
      "マーケティング戦略策定",
      "クリエイティブ制作",
      "広告運用・メディアバイイング",
      "SNS運用・インフルエンサー施策",
    ],
  },
  {
    icon: BarChart3,
    title: "データに基づいた最適化",
    description: "最新のアナリティクスツールを活用し、施策の効果を可視化。データドリブンなPDCAサイクルで、継続的な改善と成果の最大化を追求します。",
    points: [
      "KPI設計・ダッシュボード構築",
      "A/Bテスト・多変量テスト",
      "アトリビューション分析",
      "定期レポーティング",
    ],
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "ヒアリング",
    description: "現状の課題や目標、ターゲット顧客、競合状況などを詳細にヒアリング。ビジネスの全体像を把握し、最適なアプローチを検討します。",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "戦略立案",
    description: "ヒアリング内容と市場分析を基に、具体的なマーケティング戦略を策定。目標達成に向けた施策ロードマップを作成します。",
  },
  {
    icon: Rocket,
    step: "03",
    title: "実行",
    description: "策定した戦略に基づき、各施策を実行。クリエイティブ制作から広告運用、コンテンツ配信まで、一貫してサポートします。",
  },
  {
    icon: LineChart,
    step: "04",
    title: "分析・改善",
    description: "施策の効果を多角的に分析し、次のアクションを提案。継続的な改善サイクルで、成果の最大化を図ります。",
  },
];

export default function MarketingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-20 w-72 h-72 bg-neutral-900 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-64 h-64 bg-neutral-900 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-neutral-600 text-sm mb-6">
              <Link href="/" className="hover:text-neutral-900 transition-colors">
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#services" className="hover:text-neutral-900 transition-colors">
                事業内容
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-900">マーケティング支援</span>
            </div>

            <div className="max-w-3xl">
              <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
                Marketing Support
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6 text-balance">
                マーケティング支援事業
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed text-pretty">
                国内外の企業向けに、プロモーション戦略の設計から実行までをワンストップでサポート。
                データドリブンなアプローチで、ビジネスの持続的な成長を実現します。
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
                Our Strengths
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-balance">
                3つの強み
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
                ProPlantが選ばれる理由。クライアントの成功にコミットする3つのポイント
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group border-neutral-200 hover:border-neutral-400 transition-all duration-300 hover:shadow-lg bg-white h-full"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neutral-200 transition-colors">
                      <feature.icon className="w-8 h-8 text-neutral-900" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-sm text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
                Our Process
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-balance">
                サービスの流れ
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
                ヒアリングから分析・改善まで、一貫したプロセスで成果を創出
              </p>
            </div>

            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-neutral-200" />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-8 h-full border border-neutral-200 hover:border-neutral-400 transition-all duration-300 hover:shadow-lg">
                      {/* Step Number */}
                      <div className="relative z-10 w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-neutral-900" />
                      </div>

                      <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow - Mobile/Tablet */}
                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center py-4 lg:hidden">
                        <ArrowRight className="w-6 h-6 text-neutral-900 rotate-90 md:rotate-0" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
              マーケティングの課題、
              <br className="sm:hidden" />
              一緒に解決しませんか?
            </h2>
            <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              まずはお気軽にご相談ください。御社の課題をヒアリングし、最適なソリューションをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-neutral-100 text-neutral-900 px-8 py-6 text-base transition-colors"
              >
                <Link href="/#contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 px-8 py-6 text-base transition-colors"
              >
                <Link href="/">トップページへ戻る</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
