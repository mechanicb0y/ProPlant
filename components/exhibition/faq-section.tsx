import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ExhibitionFAQSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-white border rounded-lg px-4 last:border-b">
            <AccordionTrigger className="text-left font-medium text-neutral-900 hover:no-underline">
              What regions do you serve?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-600">
              We support major exhibition venues nationwide, including Tokyo Big Sight, Makuhari Messe, and INTEX Osaka. For regional shows, please contact us to discuss availability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-white border rounded-lg px-4 last:border-b">
            <AccordionTrigger className="text-left font-medium text-neutral-900 hover:no-underline">
              Can I hire you just for booth design?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-600">
              Absolutely. We offer design-only, installation-only, or full-service packages. We&apos;ll customize our services to match your specific needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-white border rounded-lg px-4 last:border-b">
            <AccordionTrigger className="text-left font-medium text-neutral-900 hover:no-underline">
              Are there long-term contracts required?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-600">
              The Concierge Package is designed for ongoing support, but we also offer one-time project options. Let&apos;s discuss what works best for your exhibition schedule.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
