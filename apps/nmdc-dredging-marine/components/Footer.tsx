import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "../../../app/components/landing/SocialIcons";
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
        <div className="flex flex-col justify-between">
          <div>
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              width={154}
              height={42}
              className="h-10 w-[132px] object-cover object-center md:h-12 md:w-[154px]"
            />
            <ul className="mt-10 grid gap-4 text-[20px] font-semibold leading-6 text-white md:mt-[58px] md:text-[16px] md:leading-5">
              {footer.businesses.map((business) => (
                <li key={business.label}>
                  <a
                    href={business.href}
                    className="flex items-center gap-3 transition-colors hover:text-dm-cyan"
                  >
                    <span
                      className={`size-3 rounded-full ${business.dotColor}`}
                      aria-hidden="true"
                    />
                    {business.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-9 flex flex-nowrap items-center gap-4 md:mt-0 md:flex-wrap md:gap-5">
            <Link
              href={footer.connect.href}
              className="inline-flex shrink-0 text-[25px] font-medium leading-[31px] text-white transition-colors hover:text-dm-cyan md:text-[16px] md:font-bold md:leading-6"
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
                  className="grid size-[48px] place-items-center rounded-full bg-[#d8efff] text-[18px] font-bold leading-none text-dm-blue transition-colors hover:bg-dm-cyan hover:text-white md:size-[34px] md:text-[14px]"
                >
                  {link.label === "Instagram" ? (
                    <InstagramIcon className="size-[22px] md:size-[16px]" />
                  ) : (
                    link.marker
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav
          aria-label={footer.navigationLabel}
          className="border-y border-white/12 py-8 md:border-x md:border-y-0 md:px-[88px] md:py-[146px]"
        >
          <ul className="grid gap-[24px] text-[27px] leading-[32px] text-white md:text-[16px] md:leading-6">
            {footer.navigationLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <a href={link.href} className="transition-colors hover:text-dm-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact" className="md:px-[88px] md:pt-[146px]">
          <h2 className="text-[27px] font-bold leading-[32px] text-white md:text-[16px] md:leading-6">
            {footer.emailTitle}
          </h2>
          <dl className="mt-5 grid gap-5">
            {footer.emails.map((email) => (
              <div key={email.label}>
                <dt className="text-[24px] font-medium leading-[30px] text-white md:text-[16px] md:leading-5">{email.label}</dt>
                <dd className="mt-1 text-[22px] font-bold leading-[28px] text-dm-cyan md:text-[16px] md:font-normal md:leading-5">{email.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-center text-[18px] leading-[26px] text-white md:col-span-3 md:border-t md:border-white/14 md:pt-5 md:text-[16px] md:leading-6">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
