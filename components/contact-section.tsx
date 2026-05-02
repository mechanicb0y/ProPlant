"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neutral-600 font-medium tracking-widest uppercase mb-4 text-sm">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-balance">
            お問い合わせ
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
            担当者より折り返しご連絡いたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">メール</p>
                <p className="text-neutral-600">info@proplant.co.jp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">電話番号</p>
                <p className="text-neutral-600">045-XXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">所在地</p>
                <p className="text-neutral-600">
                  神奈川県横浜市西区北幸2丁目10-28
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="bg-neutral-50 rounded-2xl p-8 text-center border border-neutral-200">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-neutral-900" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  お問い合わせありがとうございます
                </h3>
                <p className="text-neutral-600">
                  内容を確認の上、担当者より折り返しご連絡いたします。
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-6 border-neutral-300 text-neutral-900 hover:bg-neutral-100"
                >
                  新しいお問い合わせ
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-900"
                    >
                      お名前 <span className="text-neutral-900">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="山田 太郎"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-900"
                    >
                      メールアドレス <span className="text-neutral-900">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-neutral-900"
                  >
                    会社名
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="株式会社〇〇"
                    className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-neutral-900"
                  >
                    お問い合わせ内容 <span className="text-neutral-900">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="お問い合わせ内容をご記入ください"
                    className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base transition-colors"
                >
                  {isSubmitting ? (
                    "送信中..."
                  ) : (
                    <>
                      送信する
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
