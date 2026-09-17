"use client";

import { Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import IconWrap from "@/components/ui/IconWrap";
import type { Service } from "@/lib/constants";
import { useReducedMotion } from "@/lib/useReducedMotion";

type ServiceCardProps = {
  service: Service;
  icon?: React.ReactNode;
  revealDelay?: number;
  /** Optional small numbered badge (e.g. a step number), shown next to the icon. */
  badge?: React.ReactNode;
};

export default function ServiceCard({
  service,
  icon = <Stethoscope />,
  revealDelay = 0,
  badge,
}: ServiceCardProps) {
  const reduced = useReducedMotion();
  const y = reduced ? 0 : 8;

  return (
    <Card revealDelay={revealDelay} className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <IconWrap icon={icon} />
        {badge && (
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-mono text-xs font-semibold text-sky"
          >
            {badge}
          </span>
        )}
      </div>
      <div>
        <motion.h3
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reduced ? 0.01 : 0.35,
            ease: "easeOut",
            delay: reduced ? 0 : revealDelay,
          }}
          className="font-display text-lg font-semibold text-navy"
        >
          {service.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reduced ? 0.01 : 0.35,
            ease: "easeOut",
            delay: reduced ? 0 : revealDelay + 0.08,
          }}
          className="mt-2 font-body text-sm text-ink-soft"
        >
          {service.description}
        </motion.p>
      </div>
    </Card>
  );
}
