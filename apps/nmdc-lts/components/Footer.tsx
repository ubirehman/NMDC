import Image from "next/image";
import { InstagramIcon } from "../../../app/components/landing/SocialIcons";
import { nmdcLtsContent as content } from "../content/content";

function BusinessList() {
  return (
    <ul className="grid gap-5 text-[16px] font-bold leading-5 text-white md:gap-3 md:text-[16px] md:leading-5">
      {content.footer.businesses.map((business) => (
        <li key={business.label}>
          <a
            href={business.href}
            className="flex items-center gap-[17px] transition-colors hover:text-lts-tan"
          >
            <span
              className="size-3 rounded-full"
              style={{ backgroundColor: business.color }}
              aria-hidden="true"
            />
            {business.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-3" aria-label="Social links">
      {content.footer.socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="flex size-[48px] items-center justify-center rounded-full bg-[#d8edff] text-[16px] font-bold lowercase leading-none text-[#0072bc] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lts-tan md:size-[34px] md:text-[14px]"
        >
          {social.label === "Instagram" ? (
            <InstagramIcon className="size-[15px]" />
          ) : (
            social.shortLabel
          )}
        </a>
      ))}
    </div>
  );
}

function FooterNav() {
  return (
    <>
      <ul className="hidden grid-cols-1 gap-[24px] text-[16px] leading-6 text-white md:grid md:gap-3 md:text-[16px] md:leading-6">
        {content.footer.desktopNav.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <a href={link.href} className="transition-colors hover:text-lts-tan">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="grid gap-[24px] text-[16px] leading-6 text-white md:hidden">
        {content.footer.mobileNav.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <a href={link.href} className="transition-colors hover:text-lts-tan">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

function ContactList() {
  return (
    <div className="text-white">
      <h2 className="text-[16px] font-medium leading-6 md:text-[16px] md:font-bold md:leading-6">
        {content.footer.emailTitle}
      </h2>
      <dl className="mt-5 grid gap-5 md:mt-4 md:gap-4">
        {content.footer.contacts.map((contact) => (
          <div key={contact.email}>
            <dt className="text-[16px] font-medium leading-5 md:text-[16px] md:leading-5">
              {contact.label}
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${contact.email}`}
                className="text-[16px] font-bold leading-5 text-lts-cyan transition-colors hover:text-white md:text-[16px] md:font-normal md:leading-5"
              >
                {contact.email}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

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
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,12,29,0.76)_0%,rgba(1,26,42,0.46)_58%,rgba(0,120,128,0.28)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] rounded-[10px] bg-lts-navy px-5 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:px-12">
        <Image
          src={content.footer.desktopLogo.src}
          alt={content.footer.desktopLogo.alt}
          width={146}
          height={46}
          className="block md:h-10 md:w-32 object-contain object-left pb-8 md:pb-0"
        />

        <div className="grid md:gap-0 gap-8 w-full md:grid-cols-[365px_360px_minmax(0,1fr)] md:grid-rows-[1fr_auto] md:min-h-[407px] md:py-8">
          <div className="flex flex-col justify-between pb-4 md:pb-0">
            <div>
              <BusinessList />
            </div>
            <div className="mt-10 flex items-center gap-5 md:mt-0">
              <p className="inline-flex text-[16px] font-medium leading-6 text-white md:text-[16px] md:font-bold md:leading-6">
                {content.footer.connectLabel}
              </p>
              <SocialLinks />
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="border-y py-8 md:py-0 px-0 md:px-5  font-bold border-white/12 md:border-x md:border-y-0 md:border-white/16 md:mx-auto] max-h-[541px]"
          >
            <FooterNav />
          </nav>

          <div id="contact" className="border-b px-0 md:px-5 border-white/18 pb-8 md:border-b-0">
            <ContactList />
          </div>

          <p className="md:border-t border-white/18 text-center text-[16px] leading-6 text-white md:col-span-3 md:mt-8 md:pt-5 md:text-[16px] md:leading-6">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
