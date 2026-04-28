import Image from "next/image";
import Link from "next/link";
import { dmNavItems } from "../content/content";

const businessLinks = [
  "NMDC Dredging & Marine",
  "NMDC Energy",
  "NMDC Engineering",
  "NMDC Infra",
  "NMDC LTS"
];

const emailLinks = [
  { label: "General inquiries", value: "NMDC@nmdc-group.com" },
  { label: "Commercial inquiries", value: "info@nmdc-group.com" },
  { label: "Careers", value: "recruitment@nmdc-group.com" },
  { label: "Vendors registration", value: "vendors@nmdc-group.com" }
];

const dotColors = ["bg-dm-cyan", "bg-[#16bf70]", "bg-[#ff7a21]", "bg-[#ffc928]", "bg-[#e2c48f]"];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-dm-deep-navy px-5 py-8 text-white md:px-10 md:py-12">
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,20,40,0.96)_0%,rgba(4,31,58,0.92)_50%,rgba(0,127,137,0.78)_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 rounded-[10px] bg-dm-navy px-5 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:grid-cols-[1.2fr_0.8fr_1.1fr] md:gap-16 md:px-10 md:py-10">
        <div>
          <Image
            src="/images/logo-dm.webp"
            alt="NMDC Dredging & Marine"
            width={154}
            height={42}
            className="h-10 w-auto object-contain"
          />
          <ul className="mt-8 grid gap-4 text-[15px] font-semibold leading-5 text-white">
            {businessLinks.map((link, index) => (
              <li key={link} className="flex items-center gap-3">
                <span className={`size-3 rounded-full ${dotColors[index]}`} aria-hidden="true" />
                {link}
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="mt-9 inline-flex text-[18px] font-bold leading-7 text-white transition-colors hover:text-dm-cyan"
          >
            Let's connect
          </Link>
        </div>

        <nav aria-label="Footer navigation" className="border-y border-white/12 py-8 md:border-y-0 md:py-0">
          <ul className="grid gap-4 text-[15px] leading-5 text-white">
            {dmNavItems.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-dm-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact">
          <h2 className="text-base font-bold leading-6 text-white">Email</h2>
          <dl className="mt-5 grid gap-5 text-sm leading-5">
            {emailLinks.map((email) => (
              <div key={email.label}>
                <dt className="font-medium text-white">{email.label}</dt>
                <dd className="mt-1 text-dm-cyan">{email.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-center text-[12px] leading-5 text-white md:col-span-3 md:border-t md:border-white/14 md:pt-5">
          © Copyright, All rights reserved by NMDC Group.
        </p>
      </div>
    </footer>
  );
}
