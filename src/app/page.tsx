import type { Metadata } from "next";
import Image from "next/image";
import {
  Stethoscope,
  Activity,
  Users2,
  Pill,
  TestTube,
  Scissors,
  ShieldCheck,
  Heart,
  BadgeCheck,
  Home as HomeIcon,
  Clock,
  Footprints,
  Check,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import IllustratedCard from "@/components/ui/IllustratedCard";
import PersonCard from "@/components/ui/PersonCard";
import StatItem from "@/components/ui/StatItem";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import PulseLine from "@/components/motion/PulseLine";

import { clinicInfo, services, doctors, testimonials, pageCopy } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${clinicInfo.name} | ${clinicInfo.tagline}`,
  description:
    "Shaheen Medical Center is a polyclinic in Ghouri Town, Islamabad offering general medicine, gynea care, chronic disease management and full diagnostic services.",
};

const serviceIcons = [
  <Heart key="heart" />,
  <ShieldCheck key="shield" />,
  <Activity key="activity" />,
  <Users2 key="users" />,
  <TestTube key="testtube" />,
  <Scissors key="scissors" />,
];

const visitStepIcons = [
  <Footprints key="footprints" />,
  <Stethoscope key="stethoscope" />,
  <Activity key="activity" />,
  <Pill key="pill" />,
];

export default function HomePage() {
  const {
    hero,
    aboutTeaser,
    servicesPreview,
    visitSteps,
    doctorsPreview,
    whyChooseUs,
    faq,
    testimonials: testimonialsCopy,
    contactCta,
  } = pageCopy.home;
  const previewServices = services.slice(0, 6);

  return (
    <main>
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">

        {/* ── Background image – full bleed with blur overlay ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_main_bg.png"
            alt="Shaheen Medical Center"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />
          {/* Blur-glass frosted effect over right portion */}
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,transparent_50%,black_100%)]" />
        </div>

        {/* ── Animated ambient orbs ── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-light/10 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-teal/8 blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-light/30 bg-blue-light/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-glow animate-ping" />
              <p className="font-mono text-xs tracking-widest text-blue-light uppercase">
                {hero.eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.headline.split(hero.headlineEmphasis)[0]}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-light to-teal-glow bg-clip-text text-transparent">
                  {hero.headlineEmphasis}
                </span>
              </span>
              {hero.headline.split(hero.headlineEmphasis)[1]}
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl font-body text-base text-sky/85 sm:text-lg leading-relaxed">
              {hero.subheading}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Get Directions
              </Button>
              <Button href="/doctors" variant="secondary">
                Meet Our Doctors
              </Button>
            </div>

            {/* Trust badges */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {hero.trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 font-body text-xs font-medium text-sky/80 sm:text-sm"
                >
                  <Check className="h-4 w-4 shrink-0 text-teal-glow" aria-hidden="true" />
                  {badge}
                </li>
              ))}
            </ul>

            {/* ── LIVE RED ECG LINE ── */}
            <div className="mt-10 space-y-1">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
                <span className="font-mono text-[10px] tracking-widest text-red-400/80 uppercase">Live Monitor</span>
              </div>
              <PulseLine
                mode="loop"
                className="h-10 w-full max-w-md"
                color="#ef4444"
              />
            </div>
          </div>

          {/* ── Bottom stats bar (glassmorphism) ── */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20">
            {[
              { value: "15+", label: "Years of Care" },
              { value: "20k+", label: "Patients Served" },
              { value: "6", label: "Specialties" },
              { value: "24/7", label: "Emergency Aid" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-md"
              >
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 font-body text-xs text-sky/70 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
          <span className="font-mono text-[10px] tracking-widest text-white uppercase">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" />
          </div>
        </div>
      </section>


      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={aboutTeaser.eyebrow}
                heading={aboutTeaser.heading}
              />
              <p className="mt-6 font-body text-base text-ink-soft sm:text-lg leading-relaxed">
                {aboutTeaser.paragraph}
              </p>
              <div className="mt-8 flex">
                <Button href="/about" variant="secondary">
                  {aboutTeaser.ctaLabel}
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-blue-light/15 group">
              <Image 
                src="/about_doc.png"
                alt="Doctor talking with patient"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={servicesPreview.eyebrow}
            heading={servicesPreview.heading}
            subheading={servicesPreview.subheading}
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((service, i) => (
              <IllustratedCard
                key={service.name}
                title={service.name}
                description={service.description}
                icon={serviceIcons[i] ?? <Stethoscope />}
                index={i + 1}
              />
            ))}
          </StaggerGroup>
          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-sky px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How It Works"
            heading="Your visit, step-by-step"
            align="center"
            className="mx-auto"
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visitSteps.map((step, i) => (
              <IllustratedCard
                key={step.title}
                title={step.title}
                description={step.description}
                icon={visitStepIcons[i] ?? <Stethoscope />}
                index={i + 1}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <PulseLine className="max-w-xs opacity-60" />
      </div>

      <section className="relative overflow-hidden bg-navy-deep px-6 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/services_equip.png"
            alt="Advanced Medical Equipment"
            fill
            className="object-cover opacity-15 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_20%_20%,rgba(28,169,160,0.18),transparent_60%),radial-gradient(50%_50%_at_85%_75%,rgba(79,168,218,0.15),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={whyChooseUs.eyebrow}
            heading={whyChooseUs.heading}
            subheading={whyChooseUs.subheading}
            align="center"
            tone="dark"
            className="mx-auto"
          />
          <StaggerGroup className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            <StatItem
              variant="card"
              icon={<BadgeCheck />}
              label={whyChooseUs.stats[0].title}
              description={whyChooseUs.stats[0].description}
            />
            <StatItem
              variant="card"
              icon={<ShieldCheck />}
              label={whyChooseUs.stats[1].title}
              description={whyChooseUs.stats[1].description}
            />
            <StatItem
              variant="card"
              icon={<Pill />}
              label={whyChooseUs.stats[2].title}
              description={whyChooseUs.stats[2].description}
            />
            <StatItem
              variant="card"
              icon={<Clock />}
              label={whyChooseUs.stats[3].title}
              description={whyChooseUs.stats[3].description}
            />
          </StaggerGroup>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={doctorsPreview.eyebrow}
            heading={doctorsPreview.heading}
            subheading={doctorsPreview.subheading}
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <PersonCard key={doctor.name} person={doctor} />
            ))}
          </StaggerGroup>
          <div className="mt-10 flex justify-center">
            <Button href="/doctors" variant="secondary">
              Meet The Full Team
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            heading="Common questions"
            align="center"
            className="mx-auto"
          />
          <Accordion items={faq} className="mt-10" />
        </div>
      </section>

      <section className="bg-sky px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={testimonialsCopy.eyebrow}
            heading={testimonialsCopy.heading}
            align="center"
            className="mx-auto"
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="flex flex-col gap-3">
                <p className="font-mono text-[10px] tracking-wide text-teal uppercase">
                  Placeholder testimonial
                </p>
                <p className="font-display text-base text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-body text-sm font-semibold text-ink-soft">
                  {testimonial.author}
                </p>
              </Card>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-navy px-8 py-14 text-center text-sky">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {contactCta.heading}
          </h2>
          <p className="max-w-xl font-body text-sm text-sky/90 sm:text-base">
            {contactCta.subheading}
          </p>
          <div className="flex flex-col gap-3 font-body text-sm sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <HomeIcon className="h-4 w-4" aria-hidden="true" />
              {clinicInfo.address}
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={clinicInfo.phoneHref} variant="primary">
              Call {clinicInfo.phone}
            </Button>
            <Button href="/contact" variant="secondary" className="!bg-transparent !text-white !border-white/40 hover:!bg-white/10">
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
