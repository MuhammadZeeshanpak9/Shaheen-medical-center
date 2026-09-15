import Link from "next/link";
import { clinicInfo, navLinks } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-sky">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-base font-semibold text-white">
              {clinicInfo.name}
            </span>
          </div>
          <p className="font-body text-sm text-sky/80">{clinicInfo.tagline}</p>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-wide text-sky/60 uppercase">
            Sitemap
          </h3>
          <ul className="mt-4 flex flex-col gap-2 font-body text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sky/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-wide text-sky/60 uppercase">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-2 font-body text-sm text-sky/90">
            <li>
              <a
                href={clinicInfo.phoneHref}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
              >
                {clinicInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={clinicInfo.whatsappHref}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
              >
                WhatsApp: {clinicInfo.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <p className="mx-auto max-w-6xl font-body text-xs text-sky/70">
          &copy; {new Date().getFullYear()} {clinicInfo.name}. Design by
          Aurorix Tech.
        </p>
      </div>
    </footer>
  );
}
