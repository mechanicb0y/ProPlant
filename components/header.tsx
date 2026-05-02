"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    { label: "事業内容", href: "#services" },
    { label: "会社概要", href: "#about" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {!isHomePage && (
              <Link
                href="/"
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="ホームに戻る"
              >
                <ArrowLeft className="w-5 h-5 text-neutral-900" />
              </Link>
            )}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-lg text-neutral-900">ProPlant</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-black hover:bg-neutral-800 text-white">
              <Link href="#contact">お問い合わせ</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-black hover:bg-neutral-800 text-white w-full">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  お問い合わせ
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
