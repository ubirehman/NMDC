import Image from "next/image";
import Link from "next/link";
import { nmdcLtsContent as content } from "../content/content";

function BusinessList() {
  return (
    <ul className="space-y-[27px] md:space-y-[26px]">
      {content.footer.businesses.map((business) => (
        <li
          key={business.label}
          className="flex items-center gap-[17px] text-[20px] font-bold leading-6 text-white md:text-[16px] md:leading-5"
        >
          <span
            className="size-[12px] rounded-full md:size-[13px]"
            style={{ backgroundColor: business.color }}
            aria-hidden="true"
          />
          {business.label}
        </li>
      ))}
    </ul>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-[20px] md:gap-[18px]">
      {content.footer.socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="flex size-[48px] items-center justify-center rounded-full bg-[#d8edff] text-[18px] font-bold lowercase leading-none text-[#0072bc] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lts-tan md:size-[34px] md:text-[14px]"
        >
          {social.shortLabel}
        </Link>
      ))}
    </div>
  );
}

function FooterNav() {
  return (
    <>
      <nav
        aria-label="Footer"
        className="hidden flex-col gap-[24px] text-center text-[16px] leading-6 text-white md:flex"
      >
        {content.footer.desktopNav.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-lts-tan">
            {link.label}
          </Link>
        ))}
      </nav>

      <nav
        aria-label="Footer mobile"
        className="flex flex-col gap-[24px] text-[27px] leading-[32px] text-white md:hidden"
      >
        {content.footer.mobileNav.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-lts-tan">
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

function ContactList() {
  return (
    <div className="text-white">
      <h2 className="text-[27px] font-normal leading-[32px] md:text-[16px] md:leading-6">
        {content.footer.emailTitle}
      </h2>
      <div className="mt-[30px] space-y-[25px] md:mt-[27px] md:space-y-[28px]">
        {content.footer.contacts.map((contact) => (
          <div key={contact.email} className="space-y-[8px] md:space-y-[8px]">
            <p className="text-[24px] leading-[30px] md:text-[16px] md:leading-5">
              {contact.label}
            </p>
            <Link
              href={`mailto:${contact.email}`}
              className="block text-[22px] font-bold leading-[28px] text-lts-cyan hover:text-white md:text-[16px] md:leading-5"
            >
              {contact.email}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LtsFooter() {
  return (
    <footer className="relative overflow-hidden bg-lts-deep-navy px-5 py-[55px] text-white md:px-10 md:py-[64px]">
      <Image
        src={content.footer.background.src}
        alt={content.footer.background.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,12,29,0.76)_0%,rgba(1,26,42,0.46)_58%,rgba(0,120,128,0.28)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[320px] rounded-[28px] md:rounded-[18px] bg-lts-navy px-[35px] py-[58px] shadow-[0_28px_70px_rgba(0,0,0,0.26)] md:max-w-[1240px] md:px-[48px] md:py-[46px]">
        <div className="md:border-b md:border-white/85 md:pb-[18px]">
          <Image
            src={content.footer.desktopLogo.src}
            alt={content.footer.desktopLogo.alt}
            width={180}
            height={66}
            className="hidden h-[66px] w-[180px] object-contain md:block"
          />
          <Image
            src={content.footer.mobileLogo.src}
            alt={content.footer.mobileLogo.alt}
            width={220}
            height={72}
            className="h-[72px] w-[220px] object-contain md:hidden"
          />
        </div>

        <div className="mt-[47px] grid gap-[46px] md:mt-[34px] md:grid-cols-[minmax(0,420px)_minmax(0,300px)_minmax(0,360px)] md:gap-[34px]">
          <div className="md:border-r md:border-white/20 md:pr-[56px]">
            <BusinessList />
            <div className="mt-[56px] flex flex-col gap-[22px] md:mt-[72px] md:flex-row md:items-center md:gap-[24px]">
              <p className="text-[25px] leading-[31px] md:text-[16px] md:leading-6">
                {content.footer.connectLabel}
              </p>
              <SocialLinks />
            </div>
          </div>

          <div className="border-y border-white/18 py-[31px] md:border-y-0 md:border-r md:py-[20px] md:pr-[34px]">
            <FooterNav />
          </div>

          <div className="border-b border-white/18 pb-[34px] md:border-b-0 md:pb-0 md:pl-[58px]">
            <ContactList />
          </div>
        </div>

        <p className="mt-[34px] border-t border-white/18 pt-[29px] text-center text-[18px] leading-[26px] text-white md:mt-[39px] md:pt-[20px] md:text-[16px] md:leading-6">
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
