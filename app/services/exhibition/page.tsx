import { ExhibitionSiteHeader } from "@/components/exhibition/site-header"
import { ExhibitionHeroSection } from "@/components/exhibition/hero-section"
import { ExhibitionBenefitsSection } from "@/components/exhibition/benefits-section"
import { ExhibitionServicesSection } from "@/components/exhibition/services-section"
import { ExhibitionPlansSection } from "@/components/exhibition/plans-section"
import { ExhibitionFAQSection } from "@/components/exhibition/faq-section"
import { ExhibitionCTASection } from "@/components/exhibition/cta-section"
import { ExhibitionSiteFooter } from "@/components/exhibition/site-footer"

export const metadata = {
  title: "Exhibition Concierge | ProPlant合同会社",
  description: "Full-service trade show management. From planning to lead capture, we manage every detail of your trade show presence. You focus on closing deals—we take care of everything else.",
};

export default function ExhibitionPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ExhibitionSiteHeader />
      <main className="flex-1">
        <ExhibitionHeroSection />
        <ExhibitionBenefitsSection />
        <ExhibitionServicesSection />
        <ExhibitionPlansSection />
        <ExhibitionFAQSection />
        <ExhibitionCTASection />
      </main>
      <ExhibitionSiteFooter />
    </div>
  )
}
