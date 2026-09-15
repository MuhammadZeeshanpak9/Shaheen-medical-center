import type { Metadata } from "next";
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
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import PersonCard from "@/components/ui/PersonCard";
import StatItem from "@/components/ui/StatItem";
import Card from "@/components/ui/Card";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import PulseLine from "@/components/motion/PulseLine";
import HeroSceneLoader from "@/components/three/HeroSceneLoader";
import { clinicInfo, services, doctors, testimonials, pageCopy } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${clinicInfo.name} — ${clinicInfo.tagline}`,
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

export default function HomePage() {
  const { hero, servicesPreview, doctorsPreview, testimonials: testimonialsCopy, contactCta } =
    pageCopy.home;
  const previewServices = services.slice(0, 6);

  return (
    <main>
      <section className="relative overflow-hidden bg-navy px-6 py-20 sm:py-24">
        <HeroSceneLoader />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="font-mono text-xs tracking-wide text-blue-light uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {hero.headline.split(hero.headlineEmphasis)[0]}
            <span className="text-blue-light">{hero.headlineEmphasis}</span>
            {hero.headline.split(hero.headlineEmphasis)[1]}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base text-sky/90 sm:text-lg">
            {hero.subheading}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get Directions
            </Button>
            <Button href="/doctors" variant="secondary">
              Meet Our Doctors
            </Button>
          </div>
          <PulseLine mode="once" className="mt-10 max-w-xs" color="var(--color-blue-light)" />
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
              <ServiceCard
                key={service.name}
                service={service}
                icon={serviceIcons[i] ?? <Stethoscope />}
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

      <div className="mx-auto max-w-6xl px-6">
        <PulseLine className="max-w-xs opacity-60" />
      </div>

      <section className="bg-navy px-6 py-16">
        <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
          <StatItem icon={<BadgeCheck />} label="MBBS Gold Medalist" />
          <StatItem icon={<ShieldCheck />} label="FCPS Holy Family Hospital" />
          <StatItem icon={<Pill />} label="In-House Pharmacy & Lab" />
          <StatItem icon={<Clock />} label="Walk-in No Booking Needed" />
        </StaggerGroup>
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
