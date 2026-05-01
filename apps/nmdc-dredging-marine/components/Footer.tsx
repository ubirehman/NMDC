import Image from "next/image";
import Link from "next/link";
import { nmdcDredgingMarineContent as content } from "../content/content";

export function Footer() {
  const footer = content.footer;

  return (
    <footer className="relative isolate min-h-[1173px] overflow-hidden bg-dm-deep-navy px-5 py-6 text-white md:min-h-[700px] md:px-10 md:py-[60px]">
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,20,40,0.98)_0%,rgba(4,31,58,0.94)_62%,rgba(0,127,137,0.82)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage:
            "repeating-linear-gradient(178deg, transparent 0 20px, rgba(41,183,227,0.22) 21px, transparent 22px)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid min-h-[1120px] w-full max-w-[1240px] gap-10 rounded-[10px] bg-dm-navy px-5 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:min-h-[548px] md:grid-cols-[365px_360px_minmax(0,1fr)] md:grid-rows-[1fr_auto] md:gap-0 md:px-12 md:py-[52px]">
        <div className="md:pb-10 flex flex-col justify-between">
          <div>
          <Image
            src={content.brand.logo}
            alt={content.brand.logoAlt}
            width={154}
            height={42}
            className="h-10 w-[132px] object-cover object-center md:h-12 md:w-[154px]"
          />
          <ul className="mt-10 grid gap-4 text-[15px] font-semibold leading-5 text-white md:mt-[58px]">
            {footer.businesses.map((business) => (
              <li key={business.label}>
                <Link
                  href={business.href}
                  className="flex items-center gap-3 transition-colors hover:text-dm-cyan"
                >
                  <span
                    className={`size-3 rounded-full ${business.dotColor}`}
                    aria-hidden="true"
                  />
                  {business.label}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          <div className="mt-9 flex flex-nowrap items-center gap-4 md:mt-0 md:flex-wrap md:gap-5">
            <Link
              href={footer.connect.href}
              className="inline-flex shrink-0 text-[14px] font-medium leading-5 text-white transition-colors hover:text-dm-cyan md:text-[18px] md:font-bold md:leading-7"
            >
              {footer.connect.label}
            </Link>
            <div className="flex items-center gap-4 md:gap-4">
              {footer.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid size-7 place-items-center rounded-full bg-[#d8efff] text-[10px] font-bold leading-none text-dm-blue transition-colors hover:bg-dm-cyan hover:text-white md:size-9 md:text-[12px]"
                >
                  {link.marker}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav
          aria-label={footer.navigationLabel}
          className="border-y border-white/12 py-8 md:border-x md:border-y-0 md:px-[88px] md:py-[146px]"
        >
          <ul className="grid gap-4 text-[15px] leading-5 text-white">
            {footer.navigationLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link href={link.href} className="transition-colors hover:text-dm-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact" className="md:px-[88px] md:pt-[146px]">
          <h2 className="text-base font-bold leading-6 text-white">
            {footer.emailTitle}
          </h2>
          <dl className="mt-5 grid gap-5 text-sm leading-5">
            {footer.emails.map((email) => (
              <div key={email.label}>
                <dt className="font-medium text-white">{email.label}</dt>
                <dd className="mt-1 text-dm-cyan">{email.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-center text-[12px] leading-5 text-white md:col-span-3 md:border-t md:border-white/14 md:pt-5">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
