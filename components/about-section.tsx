import { Building2, Calendar, User, MapPin } from "lucide-react";

const companyInfo = [
  {
    icon: Building2,
    label: "会社名",
    value: "ProPlant合同会社",
  },
  {
    icon: Calendar,
    label: "設立",
    value: "2020年",
  },
  {
    icon: User,
    label: "代表",
    value: "福田翔太",
  },
  {
    icon: MapPin,
    label: "所在地",
    value: "神奈川県横浜市西区北幸2丁目10-28",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
              Company
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-balance">
              会社概要
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              ProPlant合同会社は、「一人ひとりのタレントを開花させ、育てることで社会を明るく」という理念のもと、
              マーケティング支援、展示会運営サポート、タレントマネジメントの3つの事業を展開しています。
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              私たちは、お客様一人ひとりの可能性を信じ、
              その才能が最大限に発揮されるよう、全力でサポートいたします。
            </p>
          </div>

          {/* Right Content - Company Info Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
            <div className="space-y-6">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-neutral-200 last:border-0 last:pb-0"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 mb-1">{info.label}</p>
                    <p className="font-medium text-neutral-900">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
