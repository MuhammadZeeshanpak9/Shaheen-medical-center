"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import type { Doctor, StaffMember } from "@/lib/constants";
import { useReducedMotion } from "@/lib/useReducedMotion";

type PersonCardProps = {
  person: Doctor | StaffMember;
  revealDelay?: number;
};

export default function PersonCard({ person, revealDelay = 0 }: PersonCardProps) {
  const reduced = useReducedMotion();
  const y = reduced ? 0 : 8;
  const duration = reduced ? 0.01 : 0.35;
  const d = reduced ? () => 0 : (offset: number) => revealDelay + offset;

  return (
    <Card revealDelay={revealDelay} className="flex flex-col items-start gap-4">
      <Avatar initials={person.initials} name={person.name} />
      <div>
        <motion.h3
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration, ease: "easeOut", delay: d(0) }}
          className="font-display text-lg font-semibold text-navy"
        >
          {person.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration, ease: "easeOut", delay: d(0.06) }}
          className="mt-1 font-body text-sm font-semibold text-blue"
        >
          {person.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration, ease: "easeOut", delay: d(0.1) }}
          className="mt-1 font-body text-sm text-ink-soft"
        >
          {person.credentials}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration, ease: "easeOut", delay: d(0.14) }}
          className="mt-3 font-body text-sm italic text-ink-soft"
        >
          {person.bio ?? "Bio coming soon — to be provided by the clinic."}
        </motion.p>
      </div>
    </Card>
  );
}
