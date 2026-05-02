"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from "next/image"

export function ExhibitionHeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-white shadow-sm text-neutral-900 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-neutral-900 mr-2"></span>
                Zero hassle. Maximum impact.
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-neutral-900">
                Just show up.
                <br />
                <span className="text-neutral-900 leading-snug block mt-2">We&apos;ll handle the rest.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                From planning to lead capture, we manage every detail of your trade show presence.
                <br />
                You focus on closing deals—we take care of everything else.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 font-bold text-lg h-14 px-8 shadow-lg" asChild>
                <a href="https://forms.gle/PMY9EY86mCUtT68r6" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Full-service management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Cost savings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Expert lead generation</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white border border-border/50">
              <Image
                src="/exhibition-concierge-booth.png"
                alt="Exhibition Concierge Service"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute -left-4 top-10 bg-white p-4 rounded-xl shadow-xl border border-border/50 max-w-[240px] hidden md:block animate-in fade-in slide-in-from-left-10 duration-1000">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-bold text-neutral-900 whitespace-nowrap">Arrive ready to sell</div>
                </div>
                <div className="text-xs text-neutral-600">Booth setup, materials, and logistics—all handled before you arrive.</div>
              </div>
              <div className="absolute -right-4 bottom-10 bg-white p-4 rounded-xl shadow-xl border border-border/50 max-w-[220px] hidden md:block animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <div className="text-sm font-bold text-neutral-900">End-to-end support</div>
                </div>
                <div className="text-xs text-neutral-600">From show floor operations to teardown and storage—we manage it all.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
