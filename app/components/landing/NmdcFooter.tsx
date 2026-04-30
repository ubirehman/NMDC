import Image from "next/image";
import Link from "next/link";
import {
  nmdcBrand,
  nmdcBusinessLinks,
  nmdcEmailLinks,
  nmdcPageLinks,
} from "./nmdcShared";

type NmdcFooterProps = {
  variant?: "default" | "compact";
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  pageLinks?: Array<{
    label: string;
    href: string;
  }>;
};

export function NmdcFooter({ variant = "default", logo, pageLinks }: NmdcFooterProps) {
  const isCompact = variant === "compact";
  const footerLogo = logo ?? {
    src: nmdcBrand.logo,
    alt: nmdcBrand.logoAlt,
    width: 146,
    height: 46,
    className: "h-[54px] w-auto md:h-12",
  };
  const footerLinks = pageLinks ?? nmdcPageLinks;

  return (
    <footer
      className={`relative isolate overflow-hidden bg-[#061832] px-5 py-8 text-white md:px-10 ${
        isCompact ? "md:min-h-[487px] md:py-10" : "md:min-h-[658px] md:py-12"
      }`}
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,20,40,0.96)_0%,rgba(4,31,58,0.92)_50%,rgba(0,127,137,0.78)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-[-35%] top-1/4 -z-10 h-[70%] rotate-[-8deg] bg-[repeating-linear-gradient(180deg,rgba(25,174,232,0.14)_0px,rgba(25,174,232,0.14)_1px,transparent_1px,transparent_9px)] opacity-55"
        aria-hidden="true"
      />

      <div
        className={`mx-auto grid w-full max-w-[1240px] gap-10 rounded-[10px] bg-[#082d45] px-5 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:grid-cols-[1.2fr_0.8fr_1.1fr] md:gap-16 md:px-10 ${
          isCompact ? "md:min-h-[407px] md:py-8" : "md:min-h-[525px] md:py-10"
        }`}
      >
        <div>
          <Image
            src={footerLogo.src}
            alt={footerLogo.alt}
            width={footerLogo.width}
            height={footerLogo.height}
            className={footerLogo.className}
          />
          <ul className="mt-8 grid gap-5 text-[16px] font-semibold leading-5 text-white md:gap-3 md:text-sm md:text-white/78">
            {nmdcBusinessLinks.map((link, index) => (
              <li key={link} className="flex items-center gap-3">
                <span
                  className={`size-3 rounded-full ${businessDotColors[index]}`}
                  aria-hidden="true"
                />
                {link}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-5 md:mt-9">
            <Link
              href="#contact"
              className="inline-flex text-[14px] font-medium leading-5 text-white transition-colors hover:text-primary-sky-blue md:text-[20px] md:font-bold md:leading-7"
            >
              Let&apos;s connect
            </Link>
            <div className="flex gap-3" aria-label="Social links">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex size-8 items-center justify-center rounded-full bg-white text-[12px] font-bold text-primary-blue transition-colors hover:bg-primary-sky-blue hover:text-white"
                >
                  {link.shortLabel}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav
          aria-label="Footer navigation"
          className="border-y border-white/12 py-8 md:border-y-0 md:py-0"
        >
          <ul className="grid gap-5 text-[16px] leading-5 text-white md:gap-3 md:text-sm md:text-white/78">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary-sky-blue"
                >
                  {link.label === "Technology" ? "Technology & Ai" : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact" className="border-b border-white/12 pb-8 md:border-b-0 md:pb-0">
          <h2 className="text-[16px] font-medium leading-6 text-white md:font-bold">
            Email
          </h2>
          <dl className="mt-5 grid gap-5 text-[16px] leading-6 md:mt-4 md:gap-4 md:text-sm md:leading-5">
            {nmdcEmailLinks.map((email) => (
              <div key={email.label}>
                <dt className="font-medium text-white">{email.label}</dt>
                <dd className="mt-1 text-primary-sky-blue">{email.value}</dd>
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

const businessDotColors = [
  "bg-[#18aee8]",
  "bg-[#16bf70]",
  "bg-[#ff7a21]",
  "bg-[#ffc928]",
  "bg-[#e2c48f]",
];

const socialLinks = [
  { label: "Facebook", shortLabel: "f", href: "#" },
  { label: "Instagram", shortLabel: "ig", href: "#" },
  { label: "Twitter", shortLabel: "t", href: "#" },
  { label: "LinkedIn", shortLabel: "in", href: "#" },
];
