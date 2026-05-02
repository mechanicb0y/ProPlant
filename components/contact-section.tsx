"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

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
            {t.contactHeading}
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.contactDescription}
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
                <p className="font-medium text-neutral-900 mb-1">{t.emailLabel}</p>
                <p className="text-neutral-600">info@proplant.co.jp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">{t.phoneLabel}</p>
                <p className="text-neutral-600">045-XXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">{t.locationLabel}</p>
                <p className="text-neutral-600">
                  {t.locationValue}
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
                  {t.thanksMessage}
                </h3>
                <p className="text-neutral-600">
                  {t.confirmMessage}
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-6 border-neutral-300 text-neutral-900 hover:bg-neutral-100"
                >
                  {t.newContactButton}
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
                      {t.nameLabel} <span className="text-neutral-900">{t.required}</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t.namePlaceholder}
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-900"
                    >
                      {t.emailAddressLabel} <span className="text-neutral-900">{t.required}</span>
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
                    {t.companyNameLabel}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.companyPlaceholder}
                    className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-neutral-900"
                  >
                    {t.messageLabel} <span className="text-neutral-900">{t.required}</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base transition-colors"
                >
                  {isSubmitting ? (
                    t.sending
                  ) : (
                    <>
                      {t.sendButton}
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
