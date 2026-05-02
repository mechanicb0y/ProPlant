import { Search, FileText, Receipt, Palette, Package, Megaphone, Users } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: "Event Selection",
    description: "We research and recommend the best trade shows for your target audience and build your annual exhibition calendar."
  },
  {
    icon: FileText,
    title: "Registration & Paperwork",
    description: "We complete all exhibitor applications, contracts, and documentation on your behalf."
  },
  {
    icon: Receipt,
    title: "Invoice Consolidation",
    description: "Multiple vendors, one invoice. We simplify your accounting by bundling all exhibition-related expenses."
  },
  {
    icon: Palette,
    title: "Booth Design & Setup",
    description: "From eye-catching booth design to on-site installation and teardown, we create spaces that attract visitors."
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "We store your brochures, samples, and display materials so you never scramble to prepare for the next show."
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description: "We coordinate promotional materials, giveaways, and pre-show marketing to maximize booth traffic."
  },
  {
    icon: Users,
    title: "Sales Assistants",
    description: "Our trained staff help with booth engagement, product demos, and initial lead qualification."
  }
]

export function ExhibitionServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-neutral-900 font-bold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mt-2">
            Everything you need for trade show success,<br />delivered as one seamless service
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-border/50 hover:border-neutral-400 transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">{service.title}</h3>
              <p className="text-sm text-neutral-600">{service.description}</p>
            </div>
          ))}

          <div className="bg-neutral-900 p-6 rounded-xl flex flex-col justify-center items-center text-center text-white">
            <h3 className="font-bold text-lg mb-2">Need something custom?</h3>
            <p className="text-sm text-neutral-300 mb-4">We tailor our services to your specific needs—from website development to full marketing strategy and execution.</p>
            <a href="https://forms.gle/PMY9EY86mCUtT68r6" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4 hover:text-neutral-200 transition-colors">
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
