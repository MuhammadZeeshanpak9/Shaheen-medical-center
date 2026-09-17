import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PersonCard from "@/components/ui/PersonCard";
import Button from "@/components/ui/Button";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { clinicInfo, doctors, staff, pageCopy } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Our Doctors | ${clinicInfo.name}`,
  description:
    "Meet the physicians and support staff at Shaheen Medical Center, Ghouri Town, Islamabad.",
};

export default function DoctorsPage() {
  const { hero, closingCta } = pageCopy.doctors;

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
          <SectionHeading eyebrow="Physicians" heading="Our doctors" />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <PersonCard key={doctor.name} person={doctor} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-sky px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Support Staff" heading="The rest of our team" />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((member) => (
              <PersonCard key={member.name} person={member} />
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
