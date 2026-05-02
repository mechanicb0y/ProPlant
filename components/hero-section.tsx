import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern - subtle gray tones */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-neutral-600 font-medium tracking-widest uppercase mb-6 text-sm">
            ProPlant合同会社
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8 text-balance">
            一人ひとりの
            <span className="text-neutral-900">タレント</span>
            を開花させ、
            <br className="hidden sm:block" />
            育てることで社会を明るく
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            マーケティング支援から展示会運営、タレントマネジメントまで。
            私たちは、あなたのビジネスと才能の成長を全力でサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base transition-colors"
            >
              <Link href="#services">
                事業内容を見る
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neutral-300 text-neutral-900 hover:bg-neutral-50 px-8 py-6 text-base transition-colors"
            >
              <Link href="#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neutral-900 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
