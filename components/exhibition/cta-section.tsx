import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function ExhibitionCTASection() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Stop wasting time on logistics.
          <br />
          Start closing more deals.
        </h2>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10">
          Schedule a free consultation to discuss your trade show challenges. <br />
          We&apos;ll recommend the right plan and approach for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100 font-bold text-lg h-14 px-8 shadow-lg" asChild>
            <a href="https://forms.gle/PMY9EY86mCUtT68r6" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
