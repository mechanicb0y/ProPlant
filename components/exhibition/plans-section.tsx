import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ExhibitionPlansSection() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
            Flexible plans that scale with your needs
          </h2>
          <p className="text-neutral-600">
            Whether you exhibit year-round or just once in a while, <br />
            we have a plan that fits your schedule and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-neutral-900 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-neutral-900">Concierge Package</CardTitle>
              <CardDescription>Year-round trade show support with dedicated account management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-neutral-900 shrink-0" />
                  <span className="text-sm">Up to 5 trade shows per year with full planning and execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-neutral-900 shrink-0" />
                  <span className="text-sm">Complete registration and invoice consolidation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-neutral-900 shrink-0" />
                  <span className="text-sm">One large storage unit for materials and displays included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-neutral-900 shrink-0" />
                  <span className="text-sm">Dedicated concierge for personalized support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800 h-12 text-lg" asChild>
                <a href="https://forms.gle/PMY9EY86mCUtT68r6" target="_blank" rel="noopener noreferrer">
                  Request Pricing
                </a>
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6">
            <Card className="bg-neutral-50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-neutral-900">Booth Design & Build (Add-on)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 mb-2">
                  From design-only services to full fabrication and installation. We offer modular displays to custom-built booths tailored to your budget.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-neutral-900">On-Site Assistants (Add-on)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-900"></div>
                    <span className="font-medium">Marketing Assistants</span>
                    <span className="text-neutral-600">- Booth traffic and collateral distribution</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-900"></div>
                    <span className="font-medium">Sales Assistants</span>
                    <span className="text-neutral-600">- Product demos and lead qualification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-neutral-900">Additional Storage (Add-on)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Secure storage for catalogs, samples, giveaways, demo equipment, signage, and more. Keep your exhibition materials organized and ready to go.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
