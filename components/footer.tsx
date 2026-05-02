import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-lg text-white">ProPlant</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              一人ひとりのタレントを開花させ、
              <br />
              育てることで社会を明るく。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">ナビゲーション</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  事業内容
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">お問い合わせ</h3>
            <address className="not-italic text-neutral-400 text-sm space-y-2">
              <p>神奈川県横浜市西区北幸2丁目10-28</p>
              <p>info@proplant.co.jp</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8">
          <p className="text-center text-neutral-500 text-sm">
            © 2020-{new Date().getFullYear()} ProPlant合同会社 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
