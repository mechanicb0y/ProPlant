"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, ArrowLeft } from "lucide-react"

export function ExhibitionSiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-1 sm:px-2">
        <Link href="/" className="flex items-center gap-2 mr-4 hover:opacity-80 transition-opacity">
          <ArrowLeft className="h-5 w-5 text-neutral-900" />
          <span className="text-sm font-medium text-neutral-900 whitespace-nowrap">Back to Home</span>
        </Link>
        <Link href="/services/exhibition" className="flex items-center gap-1 mr-8 lg:mr-12">
          <Building2 className="h-6 w-6 text-neutral-900" />
          <span className="text-xl font-bold tracking-tight text-neutral-900 whitespace-nowrap">Exhibition Concierge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 mr-auto">
          <Link href="#benefits" className="hover:text-neutral-900 transition-colors whitespace-nowrap">
            Why Us
          </Link>
          <Link href="#services" className="hover:text-neutral-900 transition-colors whitespace-nowrap">
            Services
          </Link>
          <Link href="#plans" className="hover:text-neutral-900 transition-colors whitespace-nowrap">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-neutral-900 transition-colors whitespace-nowrap">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Button className="bg-neutral-900 text-white hover:bg-neutral-800 font-bold shadow-md transition-colors" asChild>
            <a href="https://forms.gle/PMY9EY86mCUtT68r6" target="_blank" rel="noopener noreferrer">
              Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
