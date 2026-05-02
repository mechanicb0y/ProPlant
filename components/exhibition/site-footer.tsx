import { Building2 } from "lucide-react"
import Link from "next/link"

export function ExhibitionSiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Building2 className="h-6 w-6" />
              <span className="text-xl font-bold">Exhibition Concierge</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Full-service trade show management. <br />
              We eliminate the hassle so you can focus on results.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#plans" className="hover:text-white transition-colors">
                  Concierge Package
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Booth Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Sales Assistants
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Marketing Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  ProPlant合同会社
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/PMY9EY86mCUtT68r6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Exhibition Concierge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
