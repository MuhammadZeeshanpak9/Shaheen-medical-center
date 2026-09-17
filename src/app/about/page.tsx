import type { Metadata } from "next";
import { HeartHandshake, GraduationCap, Building2, HandHeart, Activity, TestTube, Pill, Scissors } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import IllustratedCard from "@/components/ui/IllustratedCard";
import Button from "@/components/ui/Button";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { clinicInfo, pageCopy } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us | ${clinicInfo.name}`,
  description:
    "Learn about Shaheen Medical Center, a polyclinic in Ghouri Town, Islamabad led by Holy Family Hospital-trained physicians.",
};

const valueIcons = [
  <HeartHandshake key="heart-handshake" />,
  <GraduationCap key="graduation-cap" />,
  <Building2 key="building" />,
  <HandHeart key="hand-heart" />,
];
const facilityIcons = [
  <Activity key="activity" />,
  <TestTube key="testtube" />,
  <Pill key="pill" />,
  <Scissors key="scissors" />,
];

export default function AboutPage() {
  const { hero, story, values, facilities, closingCta } = pageCopy.about;

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
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow={story.eyebrow} heading={story.heading} />
          <div className="mt-8 flex flex-col gap-4">
            {story.paragraphs.map((paragraph, i) => (
              <p key={i} className="font-body text-base text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={values.eyebrow}
            heading={values.heading}
            align="center"
            className="mx-auto"
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((value, i) => (
              <IllustratedCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={valueIcons[i]}
                index={i + 1}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={facilities.eyebrow}
            heading={facilities.heading}
            align="center"
            className="mx-auto"
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.items.map((facility, i) => (
              <IllustratedCard
                key={facility.title}
                title={facility.title}
                description={facility.description}
                icon={facilityIcons[i]}
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
              href="/contact"
              variant="secondary"
              className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
