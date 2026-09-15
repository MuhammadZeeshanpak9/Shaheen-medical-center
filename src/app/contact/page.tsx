import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ui/ContactForm";
import { clinicInfo, pageCopy } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us — ${clinicInfo.name}`,
  description: `Visit or call ${clinicInfo.name} in Ghouri Town, Islamabad. Walk-ins welcome, every day.`,
};

const mapSrc =
  "https://www.google.com/maps?q=Ghouri+Town+Islamabad&output=embed";

export default function ContactPage() {
  const { hero } = pageCopy.contact;

  return (
    <main>
      <section className="bg-sky px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-mono text-xs tracking-wide text-teal uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
            {hero.headline}
          </h1>
          <p className="mt-6 font-body text-base text-ink-soft sm:text-lg">
            {hero.subheading}
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="flex flex-col gap-5">
            <h2 className="font-display text-xl font-semibold text-navy">
              Clinic Details
            </h2>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <p className="font-body text-sm text-ink-soft">
                {clinicInfo.address}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <a
                href={clinicInfo.phoneHref}
                className="font-body text-sm text-ink-soft transition-colors hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                {clinicInfo.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <a
                href={clinicInfo.whatsappHref}
                className="font-body text-sm text-ink-soft transition-colors hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                {clinicInfo.whatsapp}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <a
                href={`mailto:${clinicInfo.email}`}
                className="font-body text-sm text-ink-soft transition-colors hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                {clinicInfo.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
              <p className="font-body text-sm text-ink-soft">{clinicInfo.hours}</p>
            </div>
          </Card>

          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Shaheen Medical Center location — Ghouri Town, Islamabad"
              src={mapSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-sky px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-xl font-semibold text-navy">
            Send Us a Message
          </h2>
          <p className="mt-2 font-body text-sm text-ink-soft">
            Fill out the form and we&apos;ll get back to you  or call/WhatsApp
            us directly for a faster response.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
