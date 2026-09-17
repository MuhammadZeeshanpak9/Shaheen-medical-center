import type { Metadata } from "next";
import {
  Heart,
  ShieldCheck,
  Activity,
  Users2,
  TestTube,
  Scissors,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import IllustratedCard from "@/components/ui/IllustratedCard";
import Button from "@/components/ui/Button";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { clinicInfo, services, pageCopy } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Services | ${clinicInfo.name}`,
  description:
    "Full range of outpatient services at Shaheen Medical Center: gynea checkups, chronic disease management, ECG, blood tests, in-house pharmacy and more.",
};

const serviceIcons = [
  <Heart key="heart" />,
  <ShieldCheck key="shield" />,
  <Activity key="activity-1" />,
  <Users2 key="users" />,
  <Syringe key="syringe" />,
  <Scissors key="scissors" />,
  <Activity key="activity-2" />,
  <TestTube key="testtube" />,
  <Pill key="pill" />,
];

export default function ServicesPage() {
  const { hero, closingCta } = pageCopy.services;

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
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="All Services" heading="Every service we offer" />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <IllustratedCard
                key={service.name}
                title={service.name}
                description={service.description}
                icon={serviceIcons[i] ?? <Stethoscope />}
                index={i + 1}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-navy px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {closingCta.heading}
          </h2>
          <p className="max-w-xl font-body text-sm text-sky/90 sm:text-base">
            {closingCta.subheading}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={clinicInfo.phoneHref} variant="primary">
              Call {clinicInfo.phone}
            </Button>
            <Button
              href={clinicInfo.whatsappHref}
              variant="secondary"
              className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
            >
              Message on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
