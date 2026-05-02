import { Clock, TrendingUp, ShieldCheck } from 'lucide-react'

export function ExhibitionBenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
            Drowning in trade show logistics?
          </h2>
          <p className="text-neutral-600 text-lg">
            Exhibition Concierge eliminates the busywork so you can focus on what matters: <br className="hidden sm:inline" />
            closing deals and growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Show up ready to sell</h3>
            <p className="text-neutral-600 leading-relaxed">
              We handle event selection, booth setup, materials management, and inventory storage. You just walk in and start conversations.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Maximize lead quality</h3>
            <p className="text-neutral-600 leading-relaxed">
              Our marketing and sales assistants help you capture more qualified leads and turn booth traffic into real opportunities.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Streamline admin work</h3>
            <p className="text-neutral-600 leading-relaxed">
              From registration paperwork to invoice consolidation, we handle the tedious details so your team stays focused on revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
