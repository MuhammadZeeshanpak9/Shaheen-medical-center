"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { clinicInfo, navLinks } from "@/lib/constants";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-navy">
              {clinicInfo.name}
            </span>
            <span className="font-body text-xs text-ink-soft">
              {clinicInfo.tagline}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 font-body text-sm lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-1 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                    isActive
                      ? "font-semibold text-blue"
                      : "text-ink hover:text-blue",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={clinicInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-body text-sm font-semibold text-navy transition-colors hover:bg-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Clinic
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2 font-body text-sm font-semibold text-white transition-colors hover:bg-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue lg:hidden"
        >
          <motion.span
            animate={{ rotate: isOpen && !reduced ? 90 : 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            className="flex"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduced ? { height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? { height: "auto" } : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="px-6 py-4">
              <ul className="flex flex-col gap-4 font-body text-sm">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-lg px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                          isActive
                            ? "font-semibold text-blue"
                            : "text-ink hover:text-blue",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={clinicInfo.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2 font-body text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Clinic
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-4 py-2 font-body text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
