import Image from "next/image";
import Link from "next/link";
import { nmdcLtsContent as content } from "../content/content";

export function LtsFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-lts-deep-navy px-5 py-8 text-white md:min-h-[658px] md:px-10 md:py-12">
      <Image
        src={content.footer.background.src}
        alt={content.footer.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,12,29,0.92)_0%,rgba(1,26,42,0.82)_55%,rgba(0,120,128,0.38)_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[1240px] gap-10 rounded-[18px] bg-lts-navy px-5 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:min-h-[525px] md:grid-cols-[1.2fr_0.8fr_1.1fr] md:gap-16 md:px-10 md:py-10">
        <div>
          <Image
            src={content.footer.desktopLogo.src}
            alt={content.footer.desktopLogo.alt}
            width={146}
            height={46}
            className="h-[54px] w-auto md:h-12"
          />

          <ul className="mt-8 grid gap-5 text-[16px] font-semibold leading-5 text-white md:gap-3 md:text-sm md:text-white/78">
            {content.footer.businesses.map((business) => (
              <li key={business.label}>
                <Link
                  href={business.href}
                  className="flex items-center gap-3 transition-colors hover:text-lts-tan"
                >
                  <span
                    className="size-3 shrink-0 rounded-full"
                    style={{ backgroundColor: business.color }}
                    aria-hidden="true"
                  />
                  {business.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-5 md:mt-9">
            <Link
              href="#contact"
              className="inline-flex text-[14px] font-medium leading-5 text-white transition-colors hover:text-lts-tan md:text-[20px] md:font-bold md:leading-7"
            >
              {content.footer.connectLabel}
            </Link>
            <div className="flex gap-3" aria-label="Social links">
              {content.footer.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex size-8 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#0072bc] transition-colors hover:bg-lts-tan hover:text-white"
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
            {content.footer.desktopNav.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-lts-tan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          id="contact"
          className="border-b border-white/12 pb-8 md:border-b-0 md:pb-0"
        >
          <h2 className="text-[16px] font-medium leading-6 text-white md:font-bold">
            {content.footer.emailTitle}
          </h2>
          <dl className="mt-5 grid gap-5 text-[16px] leading-6 md:mt-4 md:gap-4 md:text-sm md:leading-5">
            {content.footer.contacts.map((contact) => (
              <div key={contact.email}>
                <dt className="font-medium text-white">{contact.label}</dt>
                <dd className="mt-1">
                  <Link
                    href={`mailto:${contact.email}`}
                    className="text-lts-cyan transition-colors hover:text-white"
                  >
                    {contact.email}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-center text-[12px] leading-5 text-white md:col-span-3 md:border-t md:border-white/14 md:pt-5">
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
