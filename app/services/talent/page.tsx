import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Mic2,
  Theater,
  Swords,
  Sparkles,
  Heart,
  Target,
  TrendingUp,
  Users,
  Star,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "タレントマネジメント | ProPlant合同会社",
  description:
    "インフルエンサー、舞台俳優、格闘家など多様なタレントの才能を最大限に引き出す環境づくり。育成から活動支援まで一貫してサポートします。",
};

const talentCategories = [
  {
    icon: Mic2,
    title: "インフルエンサー",
    description: "SNSを中心に影響力を持つクリエイター",
    features: ["YouTube", "Instagram", "TikTok", "X (Twitter)"],
    gradient: "from-neutral-900 to-neutral-700",
    bgGradient: "from-neutral-900/5 to-neutral-700/5",
  },
  {
    icon: Theater,
    title: "舞台俳優・パフォーマー",
    description: "舞台やイベントで活躍する表現者",
    features: ["舞台出演", "イベントMC", "モデル", "ナレーション"],
    gradient: "from-neutral-800 to-neutral-600",
    bgGradient: "from-neutral-800/5 to-neutral-600/5",
  },
  {
    icon: Swords,
    title: "格闘家・アスリート",
    description: "競技で活躍するスポーツタレント",
    features: ["プロ格闘家", "トレーナー", "スポーツ解説", "フィットネス"],
    gradient: "from-neutral-700 to-neutral-500",
    bgGradient: "from-neutral-700/5 to-neutral-500/5",
  },
];

const developmentPolicies = [
  {
    icon: Heart,
    title: "個性を尊重",
    description:
      "一人ひとりの強みや魅力を見極め、その個性が最大限に活きる活動をプロデュースします。",
  },
  {
    icon: Target,
    title: "目標設定と戦略立案",
    description:
      "タレントの目指す姿を共有し、達成に向けた具体的なロードマップを一緒に作成します。",
  },
  {
    icon: TrendingUp,
    title: "成長機会の創出",
    description:
      "スキルアップ研修やワークショップ、新たな挑戦の機会を継続的に提供します。",
  },
  {
    icon: Users,
    title: "コミュニティ形成",
    description:
      "所属タレント同士の交流や、業界ネットワークを活用した協業機会を創出します。",
  },
];

const supportServices = [
  {
    icon: Sparkles,
    title: "ブランディング",
    description: "個性を活かしたパーソナルブランドの構築",
  },
  {
    icon: Zap,
    title: "SNS運用支援",
    description: "各プラットフォームに最適化した発信戦略",
  },
  {
    icon: Award,
    title: "出演交渉",
    description: "メディア・イベント・広告出演の機会創出",
  },
  {
    icon: Star,
    title: "キャリア相談",
    description: "長期的なキャリアプランニングのサポート",
  },
];

export default function TalentManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-neutral-100 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-50 rounded-full blur-3xl" />
          </div>

          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neutral-900 to-transparent" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neutral-900 to-transparent" />
          </div>

          <div className="container relative mx-auto px-4 py-24 md:py-32">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
              <Link href="/" className="hover:text-neutral-900 transition-colors">
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-900">タレントマネジメント</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-neutral-900 mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Talent Management</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                才能を、
                <br />
                <span className="text-neutral-900">最大限に</span>引き出す。
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed max-w-2xl">
                インフルエンサー、舞台俳優、格闘家など
                <br className="hidden md:block" />
                多様なタレントの可能性を広げる環境づくり
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-neutral-800 text-base px-8 transition-colors"
                  asChild
                >
                  <Link href="#contact">
                    出演・タイアップ依頼
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-300 text-neutral-900 hover:bg-neutral-50 text-base px-8 transition-colors"
                  asChild
                >
                  <Link href="#categories">所属タレントを見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Talent Categories Section */}
        <section id="categories" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-neutral-600 font-medium text-sm tracking-wider uppercase">
                Categories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-4">
                所属タレントカテゴリー
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                多様なジャンルで活躍するタレントが所属。
                それぞれの個性と才能を最大限に活かした活動をサポートしています。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {talentCategories.map((category, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className="relative p-8">
                    {/* Icon with gradient */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <category.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-neutral-600 mb-6">{category.description}</p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-900 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Development Policy Section */}
        <section className="py-20 md:py-28 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <span className="text-neutral-600 font-medium text-sm tracking-wider uppercase">
                  Our Policy
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                  育成方針
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  ProPlantでは、タレント一人ひとりを「個性を持った唯一無二の存在」として尊重。
                  短期的な成果だけでなく、長期的なキャリア形成を見据えた育成を行います。
                </p>

                <div className="p-6 bg-neutral-900 rounded-xl">
                  <p className="text-white text-lg font-medium leading-relaxed">
                    「一人ひとりのタレントを開花させ、
                    <br />
                    育てることで社会を明るく」
                  </p>
                  <p className="text-neutral-400 text-sm mt-3">
                    — ProPlant合同会社 理念
                  </p>
                </div>
              </div>

              {/* Right Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {developmentPolicies.map((policy, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-4 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                      <policy.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Services Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-neutral-600 font-medium text-sm tracking-wider uppercase">
                Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-4">
                サポート内容
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                タレントの活動を多角的にサポート。
                表舞台での活躍だけでなく、裏方の業務も私たちにお任せください。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-28 bg-neutral-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-700/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-neutral-700/15 rounded-full blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* For Clients */}
                <div className="text-center md:text-left">
                  <span className="inline-block px-4 py-1 bg-neutral-800 rounded-full text-neutral-200 text-sm font-medium mb-4">
                    For Clients
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    出演・タイアップ依頼
                  </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    イベント出演、広告タイアップ、メディア出演など、
                    所属タレントへのご依頼はこちらから。
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-neutral-900 hover:bg-neutral-100 w-full md:w-auto transition-colors"
                    asChild
                  >
                    <Link href="/#contact">
                      お問い合わせ
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* For Talents */}
                <div className="text-center md:text-left p-8 bg-neutral-800/50 rounded-2xl backdrop-blur-sm border border-neutral-700">
                  <span className="inline-block px-4 py-1 bg-neutral-700 rounded-full text-neutral-200 text-sm font-medium mb-4">
                    For Talents
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    所属タレント募集
                  </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    あなたの才能を開花させませんか？
                    ジャンル問わず、意欲ある方のご応募をお待ちしています。
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-600 text-white hover:bg-neutral-700 w-full md:w-auto transition-colors"
                    asChild
                  >
                    <Link href="/#contact">
                      応募する
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
