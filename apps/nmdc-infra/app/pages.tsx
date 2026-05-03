import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { InstagramIcon } from "../../../app/components/landing/SocialIcons";
import { Header } from "../components/Header";
import { InfraDetailImageCarousel } from "../components/InfraDetailImageCarousel";
import { InfraHomeCardRail } from "../components/InfraHomeCardRail";
import { InfraVideoCarousel } from "../components/InfraVideoCarousel";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "../components/icons";
import { getInfraNavLinks, nmdcInfraContent as content } from "../content/content";

function InfraBackground({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        src={content.home.hero.background.src}
        alt={content.home.hero.background.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-[52%_50%] md:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,24,0.82)_0%,rgba(3,16,24,0.42)_47%,rgba(3,16,24,0.78)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,24,0.18)_0%,rgba(3,16,24,0.18)_45%,rgba(3,16,24,0.70)_100%)]"
        aria-hidden="true"
      />
    </>
  );
}

function VisitButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-[3px] text-[15px] font-bold leading-5 text-infra-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow"
    >
      <span className="flex h-[49px] w-[174px] items-center justify-center rounded-full bg-white shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-colors group-hover:bg-white/92">
        {label}
      </span>
      <span className="flex size-[49px] items-center justify-center rounded-full bg-infra-yellow text-infra-ink shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowUpRight className="size-5" />
      </span>
    </Link>
  );
}

function HomeHeadline() {
  const headline = content.home.hero.headline;

  return (
    <h1 className="text-[28px] font-bold uppercase leading-[36px] tracking-[0] text-white md:text-[48px] md:leading-[56px]">
      <span className="hidden md:block">{headline.leading}</span>
      <span className="block md:hidden">Leading the Way</span>
      <span className="block md:hidden">with</span>
      <span className="block text-infra-yellow">{headline.accent[0]}</span>
      <span className="block text-infra-yellow">
        <span className="block md:inline">{headline.accent[1]}</span>
        <span className="block md:inline">{headline.accent[2]}</span>
      </span>
    </h1>
  );
}

export function NmdcInfraHomePage() {
  const hero = content.home.hero;

  return (
    <main className="min-h-screen bg-infra-navy">
      <section className="relative isolate min-h-[max(786px,100svh)] overflow-hidden bg-infra-navy px-5 text-white md:px-10">
        <InfraBackground priority />
        <Header links={getInfraNavLinks("/")} />

        <div className="relative z-10 mx-auto min-h-[max(786px,100svh)] w-full max-w-[1240px]">
          <div className="pt-[113px] md:absolute md:left-0 md:top-[197px] md:w-[630px] md:pt-0 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:max-w-[calc(100vw-80px)]">
            <HomeHeadline />

            <div className="mt-5 flex max-w-[304px] items-start gap-[13px] md:mt-7 md:max-w-[620px] md:gap-[15px]">
              <span
                className="mt-1 h-[86px] w-[4px] shrink-0 rounded-full bg-infra-yellow md:h-[55px]"
                aria-hidden="true"
              />
              <p className="text-[14px] font-normal leading-[19px] text-white/88 md:text-[16px] md:leading-[26px]">
                {hero.subhead}
              </p>
            </div>

            <div className="mt-[32px] md:mt-[37px]">
              <VisitButton href={hero.cta.href} label={hero.cta.label} />
            </div>
          </div>

          <div className="absolute inset-x-0 top-[502px] z-10 px-5 md:absolute md:bottom-[74px] md:right-0 md:top-auto md:left-auto md:w-[822px] md:px-0 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:w-[calc(100vw-80px)]">
            <InfraHomeCardRail cards={content.home.cards} />
          </div>
        </div>
      </section>
    </main>
  );
}

function InfraSectionHeading({
  title,
  mobileTitle,
  light = false,
}: {
  title: string;
  mobileTitle?: string;
  light?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-5 md:gap-8">
        <h2
          className={`shrink-0 text-[30px] font-bold uppercase leading-[1.05] md:text-[48px] ${
            light ? "text-white" : "text-infra-ink"
          }`}
        >
          {mobileTitle ? (
            <>
              <span className="hidden md:inline">{title}</span>
              <span className="md:hidden">{mobileTitle}</span>
            </>
          ) : (
            title
          )}
        </h2>
        <span
          className={`mt-2 h-px flex-1 ${
            light ? "bg-white/18" : "bg-[#aeb9bf]"
          }`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function OverviewLineIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {icon === "network" ? (
        <>
          <circle {...shared} cx="24" cy="24" r="14" />
          <path {...shared} d="M16 18h16M16 30h16M24 10v28M14 24h20" />
          <circle {...shared} cx="16" cy="18" r="2" />
          <circle {...shared} cx="32" cy="18" r="2" />
          <circle {...shared} cx="16" cy="30" r="2" />
          <circle {...shared} cx="32" cy="30" r="2" />
        </>
      ) : icon === "leafCycle" ? (
        <>
          <path {...shared} d="M16 27c8 1 15-4 17-13-9 1-15 6-17 13Z" />
          <path {...shared} d="M17 27c5-2 8-5 11-10" />
          <path {...shared} d="M14 15a16 16 0 0 1 22 2" />
          <path {...shared} d="m35 11 2 7-7-2" />
          <path {...shared} d="M34 33a16 16 0 0 1-22-2" />
          <path {...shared} d="m13 37-2-7 7 2" />
        </>
      ) : icon === "performance" ? (
        <>
          <circle {...shared} cx="17" cy="19" r="6" />
          <path {...shared} d="M17 16v3l3 2" />
          <path {...shared} d="M10 38V28" />
          <path {...shared} d="M18 38V31" />
          <path {...shared} d="M26 38V24" />
          <path {...shared} d="M34 38V18" />
          <path {...shared} d="M31 10h7v7" />
          <path {...shared} d="m24 20 14-10" />
        </>
      ) : icon === "research" ? (
        <>
          <circle {...shared} cx="25" cy="21" r="9" />
          <path {...shared} d="m32 28 7 7" />
          <path {...shared} d="M17 34v5" />
          <path {...shared} d="M13 39h8" />
          <path {...shared} d="M12 24h4" />
          <path {...shared} d="M16 12l-3-3" />
          <path {...shared} d="M33 11l3-3" />
          <path {...shared} d="M21 17h8" />
          <path {...shared} d="M21 22h5" />
        </>
      ) : icon === "water" ? (
        <>
          <path {...shared} d="M12 31c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3" />
          <path {...shared} d="M12 38c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3" />
          <path {...shared} d="M24 8c6 6 10 11 10 17a10 10 0 0 1-20 0c0-6 4-11 10-17Z" />
        </>
      ) : icon === "roads" ? (
        <>
          <path {...shared} d="M20 42 24 6l4 36" />
          <path {...shared} d="M16 20h16" />
          <path {...shared} d="M14 30h20" />
          <path {...shared} d="M10 42h28" />
        </>
      ) : icon === "oilGas" ? (
        <>
          <path {...shared} d="M16 40V18h16v22" />
          <path {...shared} d="M13 18h22" />
          <path {...shared} d="M19 18 24 8l5 10" />
          <path {...shared} d="M20 26h8" />
          <path {...shared} d="M20 33h8" />
        </>
      ) : icon === "piling" ? (
        <>
          <path {...shared} d="M13 40V15" />
          <path {...shared} d="M24 40V9" />
          <path {...shared} d="M35 40V17" />
          <path {...shared} d="M9 40h30" />
          <path {...shared} d="M10 24h28" />
        </>
      ) : icon === "precast" ? (
        <>
          <path {...shared} d="M10 17 24 9l14 8-14 8-14-8Z" />
          <path {...shared} d="M10 17v14l14 8 14-8V17" />
          <path {...shared} d="M24 25v14" />
          <path {...shared} d="M15 30h6" />
          <path {...shared} d="M27 30h6" />
        </>
      ) : icon === "projects" ? (
        <>
          <path {...shared} d="M15 10h18v30H15z" />
          <path {...shared} d="M20 17h8" />
          <path {...shared} d="M20 24h7" />
          <path {...shared} d="M20 31h6" />
          <path {...shared} d="M31 18l2 2 5-6" />
          <path {...shared} d="M31 32l2 2 5-6" />
        </>
      ) : icon === "yard" ? (
        <>
          <path {...shared} d="M12 12h24v24H12z" strokeDasharray="3 3" />
          <path {...shared} d="M19 24h10" />
          <path {...shared} d="m25 20 4 4-4 4" />
          <path {...shared} d="m23 20-4 4 4 4" />
          <path {...shared} d="M24 19v10" />
          <path {...shared} d="m20 23 4-4 4 4" />
        </>
      ) : (
        <>
          <path {...shared} d="M11 40V16l13-8 13 8v24" />
          <path {...shared} d="M17 40V25h14v15" />
          <path {...shared} d="M18 18h2" />
          <path {...shared} d="M28 18h2" />
          <path {...shared} d="M11 40h26" />
        </>
      )}
    </svg>
  );
}

function InfraCapabilityCard({
  card,
}: {
  card: (typeof content.overview.capabilities.cards)[number];
}) {
  return (
    <article className="min-h-[180px] rounded-[8px] bg-[#0a2534] p-[18px] text-white shadow-[0_16px_34px_rgba(0,0,0,0.18)] md:min-h-[250px] md:rounded-[18px] md:p-6">
      <div className="flex items-start justify-between gap-5">
        <div className="relative size-[64px] overflow-hidden rounded-[4px] md:h-[102px] md:w-[102px] md:rounded-[8px]">
          <Image
            src={card.image.src}
            alt={card.image.alt}
            sizes="102px"
            width={102}
            height={102}
            className="object-cover w-[102px] h-[102px]"
          />
        </div>
        <div className="text-right">
          <span className="block text-[32px] font-bold leading-none text-white md:text-[56px]">
            {card.number}
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-[15px] font-bold leading-[1.2] md:mt-6 md:text-[23px]">
        {card.title}
      </h3>
      <p className="mt-3 text-[9px] font-medium leading-[1.45] text-white/78 md:mt-4 md:text-[16px] md:leading-[1.55]">
        {card.body}
      </p>
    </article>
  );
}

function InfraOverviewVideo() {
  const video = content.overview.video;

  return (
    <div className="mt-[54px] md:mt-[72px]">
      <InfraVideoCarousel
        videos={video.videos}
        videoClassName="h-[407px] w-full bg-infra-deep-navy object-cover object-[44%_50%] md:h-[609px]"
      />
    </div>
  );
}

function InfraVerticalCard({
  item,
}: {
  item: (typeof content.overview.verticals.items)[number];
}) {
  return (
    <article className="relative flex min-h-[590px] flex-col overflow-hidden rounded-[12px] bg-infra-navy p-5 pt-[32px] text-white shadow-[0_18px_44px_rgba(7,28,40,0.22)] md:min-h-[470px] md:rounded-[24px] md:p-8 md:pt-[112px]">
      <div className="absolute left-1/2 top-[32px] size-[214px] -translate-x-1/2 overflow-hidden rounded-full border-[5px] border-white bg-white md:top-8 md:size-[146px]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="146px"
          className="object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-[224px] grid size-[72px] -translate-x-1/2 place-items-center rounded-full border-[3px] border-white bg-infra-yellow text-infra-ink shadow-[0_10px_24px_rgba(0,0,0,0.22)] md:top-[138px] md:size-[58px] md:border-0">
        {item.iconImage ? (
          <Image
            src={item.iconImage.src}
            alt={item.iconImage.alt}
            width={40}
            height={40}
            className="size-10 object-contain md:size-8"
          />
        ) : (
          <OverviewLineIcon icon={item.icon} className="size-10 md:size-8" />
        )}
      </div>
      <div className="mt-[282px] flex flex-1 flex-col items-center text-center md:mt-[112px]">
        <h3 className="w-full max-w-[270px] rounded-[8px] bg-infra-yellow px-5 py-4 text-[16px] font-bold uppercase leading-5 text-infra-ink md:rounded-full md:px-6 md:py-3 md:text-[19px]">
          {item.title}
        </h3>
        <p className="mt-6 text-[10px] font-medium leading-[1.45] text-white/82 md:mt-7 md:text-[16px] md:leading-[1.65]">
          {item.body}
        </p>
      </div>
    </article>
  );
}

function InfraSectorCard({
  item,
}: {
  item: (typeof content.overview.sectors.items)[number];
}) {
  return (
    <article className="flex min-h-[215px] flex-col items-center justify-start px-1 py-3 text-center text-white md:min-h-[202px] md:justify-center md:rounded-[18px] md:border md:border-white/12 md:bg-white/[0.03] md:px-4 md:py-6">
      <div className="grid size-[121px] place-items-center rounded-[8px] bg-[#113047] md:size-auto md:bg-transparent">
        {item.iconImage ? (
          <Image
            src={item.iconImage.src}
            alt={item.iconImage.alt}
            width={70}
            height={70}
            className="size-[70px] object-contain md:size-[58px]"
          />
        ) : (
          <OverviewLineIcon icon={item.icon} className="size-[70px] text-infra-yellow md:size-[58px]" />
        )}
      </div>
      <h3 className="mt-7 text-[12px] font-medium leading-[1.45] md:mt-5 md:text-[18px] md:font-bold md:leading-[1.35]">
        {item.label}
      </h3>
    </article>
  );
}

function InfraStatCard({
  item,
}: {
  item: (typeof content.overview.stats.items)[number];
}) {
  return (
    <article className="overflow-hidden rounded-[16px] border border-white bg-infra-yellow text-infra-ink shadow-[0_20px_54px_rgba(0,0,0,0.28)] md:rounded-[18px] md:border-white/30">
      <div className="bg-infra-navy px-7 py-6 text-center text-[19px] font-bold uppercase leading-6 text-white md:px-9 md:py-5 md:text-left md:text-[18px]">
        {item.label}
      </div>
      <div className="flex min-h-[82px] items-center justify-center gap-7 px-7 py-4 md:min-h-[206px] md:gap-10 md:px-9 md:py-7">
        <div className="grid size-[45px] shrink-0 place-items-center md:size-[80px]">
          <Image
            src={item.image}
            alt={item.label}
            width={80}
            height={80}
            className="size-[45px] md:size-[80px]"
          />
        </div>
        <span className="h-[45px] w-px shrink-0 bg-[#d3ad00] md:h-[80px]" aria-hidden="true" />
        <div className="text-center">
          <p className="text-[52px] font-bold leading-none tracking-[0] md:text-[88px]">
            {item.value}
          </p>
          {"unit" in item && item.unit ? (
            <p className="mt-0 text-[8px] font-bold uppercase leading-4 md:mt-3 md:text-[27px] md:leading-7">
              {item.unit}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function isInfraInternalHref(href: string) {
  return href === "/overview" || href === "/products";
}

function InfraFooter() {
  const footer = content.footer;
  const footerNavigationLinks = footer.navigationLinks;
  const mobileFooterLinks = footer.mobileNavigationLinks;

  return (
    <footer className="relative isolate overflow-hidden bg-[#020b1d] px-5 py-10 text-white md:min-h-[658px] md:px-10 md:py-[64px]">
      <div className="absolute inset-0 -z-10 opacity-90" aria-hidden="true">
        <Image
          src={content.overview.stats.background.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,11,29,0.30)_0%,rgba(2,11,29,0.08)_54%,rgba(0,127,137,0.50)_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 rounded-[10px] bg-[#082d45] px-5 py-9 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:min-h-[525px] md:grid-cols-[365px_360px_minmax(0,1fr)] md:grid-rows-[1fr_auto] md:gap-0 md:px-[48px] md:py-[56px]">
        <div className="flex flex-col justify-between">
          <div>
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              width={154}
              height={60}
              className="h-[58px] w-[148px] object-contain"
            />
            <ul className="mt-10 grid gap-5 text-[15px] font-semibold leading-5 text-white md:mt-[58px] md:gap-[28px] md:text-[16px] md:leading-6">
              {footer.businesses.map((business) => (
                <li key={business.label}>
                  <a
                    href={business.href}
                    className="flex items-center gap-3 transition-colors hover:text-infra-yellow"
                  >
                    <span
                      className={`size-[11px] rounded-full ${business.dotColor}`}
                      aria-hidden="true"
                    />
                    {business.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-9 flex flex-nowrap items-center gap-[10px] md:mt-0 md:flex-wrap md:gap-5">
            <a
              href={footer.connect.href}
              className="inline-flex shrink-0 text-[14px] font-bold leading-6 text-white transition-colors hover:text-infra-yellow md:text-[16px]"
            >
              {footer.connect.label}
            </a>
            <div className="flex items-center gap-[10px] md:gap-4">
              {footer.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid size-8 place-items-center rounded-full bg-infra-yellow text-[12px] font-bold leading-none text-infra-ink transition-colors hover:bg-white md:size-9"
                >
                  {link.label === "Instagram" ? (
                    <InstagramIcon className="size-[15px]" />
                  ) : (
                    link.marker
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav
          aria-label={footer.navigationLabel}
          className="border-y border-white/12 py-8 md:border-x md:border-y-0 md:border-white/16 md:px-[92px] md:py-[96px]"
        >
          <ul className="hidden gap-[24px] text-[16px] leading-6 text-white md:grid">
            {footerNavigationLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                {isInfraInternalHref(link.href) ? (
                  <Link href={link.href} className="transition-colors hover:text-infra-yellow">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="transition-colors hover:text-infra-yellow">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <ul className="grid gap-5 text-[15px] leading-5 text-white md:hidden">
            {mobileFooterLinks.map((link) => (
              <li key={link.label}>
                {isInfraInternalHref(link.href) ? (
                  <Link href={link.href} className="transition-colors hover:text-infra-yellow">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="transition-colors hover:text-infra-yellow">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact" className="md:px-[88px] md:py-[96px]">
          <h2 className="text-base font-normal leading-6 text-white">
            {footer.emailTitle}
          </h2>
          <dl className="mt-5 grid gap-5 text-sm leading-5 md:mt-[28px] md:gap-[28px]">
            {footer.emails.map((email) => (
              <div key={email.label}>
                <dt className="font-normal text-white">{email.label}</dt>
                <dd className="mt-2 font-bold text-infra-yellow">{email.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-center text-[12px] leading-5 text-white md:col-span-3 md:mt-[78px] md:border-t md:border-white/16 md:pt-[20px] md:text-[16px] md:leading-6">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

function InfraProductCard({
  product,
}: {
  product: (typeof content.products.items)[number];
}) {
  return (
    <Link
      href={product.href}
      aria-label={product.title.join(" ")}
      data-product-card
      className="group relative block h-[412px] min-w-0 overflow-hidden rounded-[34px] border-[3px] border-white bg-infra-navy shadow-[0_26px_44px_rgba(7,28,40,0.33)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_32px_58px_rgba(7,28,40,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow md:h-[500px] md:rounded-[42px] md:border-[4px]"
    >
      <Image
        src={product.image.src}
        alt={product.image.alt}
        fill
        sizes="(min-width: 768px) 394px, 320px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: product.image.objectPosition }}
      />
      <span
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,21,33,0.04)_0%,rgba(5,21,33,0.14)_42%,rgba(5,21,33,0.92)_100%)]"
        aria-hidden="true"
      />
      <h3 className="absolute bottom-[28px] left-[27px] right-6 text-[35px] font-bold leading-[39px] text-infra-yellow md:bottom-[34px] md:left-[30px] md:text-[40px] md:leading-[48px]">
        {product.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
    </Link>
  );
}

type InfraProductImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type InfraProductFeature = {
  number: string;
  title: string;
  body: string;
  icon: string;
  featureImage?: InfraProductImage;
};

type InfraProductDetailContent = {
  backLabel: string;
  backHref: string;
  title: string;
  introLayout?: "wideImage";
  paragraphs: readonly string[];
  readMoreLabel?: string;
  readMoreHref?: string;
  heroImage: InfraProductImage;
  contentImage?: InfraProductImage;
  mediaLayout?: "videoFeaturesGallery";
  detailImage?: InfraProductImage;
  detailImages?: readonly InfraProductImage[];
  galleryImage?: InfraProductImage;
  galleryImages?: readonly InfraProductImage[];
  video?: {
    image: InfraProductImage;
    playLabel: string;
    videos: readonly {
      title: string;
      src: string;
      type: string;
      poster: string;
      playLabel: string;
    }[];
  };
  features?: readonly InfraProductFeature[];
};

function InfraDetailArrowControls({ light = false }: { light?: boolean }) {
  return (
    <div className="mt-[28px] flex justify-center gap-[21px] md:mt-[72px] md:gap-6">
      <button
        type="button"
        aria-label="Previous product media"
        className={`grid size-[51px] place-items-center rounded-full border transition-colors md:size-[64px] ${
          light
            ? "border-white text-white/75 hover:bg-white hover:text-infra-ink"
            : "border-[#c6d2df] text-[#8ca0b8] hover:border-infra-yellow hover:text-infra-yellow"
        }`}
      >
        <ArrowLeft className="size-6 md:size-7" />
      </button>
      <button
        type="button"
        aria-label="Next product media"
        className={`grid size-[51px] place-items-center rounded-full transition-colors md:size-[64px] ${
          light
            ? "bg-white text-infra-yellow hover:bg-infra-yellow hover:text-infra-ink"
            : "bg-white text-infra-yellow shadow-[0_8px_24px_rgba(7,28,40,0.10)] hover:bg-infra-yellow hover:text-infra-ink"
        }`}
      >
        <ArrowRight className="size-6 md:size-7" />
      </button>
    </div>
  );
}

function InfraProductFeatureCard({
  feature,
}: {
  feature: InfraProductFeature;
}) {
  return (
    <article className="relative min-h-[226px] rounded-[6px] bg-[#12334a] px-[18px] pb-[22px] pt-[22px] text-white md:min-h-[218px] md:rounded-[20px] md:px-6 md:pb-7 md:pt-6">
      <div className="flex items-start justify-between gap-5">
        <div className="grid size-[78px] place-items-center rounded-[5px] bg-[#1d3c4c] text-infra-yellow md:size-[89px]">
          {feature.featureImage ? (
            <Image
              src={feature.featureImage.src}
              alt={feature.featureImage.alt}
              width={89}
              height={89}
              className="size-full object-contain"
            />
          ) : (
            <OverviewLineIcon icon={feature.icon} className="size-[58px] md:size-[66px]" />
          )}
        </div>
        <div className="text-right">
          <span className="block text-[40px] font-bold leading-none text-white md:text-[43px]">
            {feature.number}
          </span>
          <span className="mt-[13px] block h-[5px] w-[57px] bg-infra-yellow md:w-[72px]" aria-hidden="true" />
        </div>
      </div>
      <h3 className="mt-[18px] text-[17px] font-bold leading-[23px] md:mt-6 md:text-[24px] md:leading-8">
        {feature.title}
      </h3>
      <p className="mt-[17px] text-[10px] font-medium leading-[15px] text-white md:text-[15px] md:leading-[23px]">
        {feature.body}
      </p>
    </article>
  );
}

function InfraProductVideo({
  video,
  heightClassName = "h-[203px] md:h-[478px]",
}: {
  video: InfraProductDetailContent["video"];
  heightClassName?: string;
}) {
  if (!video) {
    return null;
  }
  return (
    <div
      data-product-detail-video
      data-detail-video
      className="relative"
    >
      <InfraVideoCarousel
        videos={video.videos}
        frameClassName="rounded-[8px] md:rounded-[18px]"
        videoClassName={`${heightClassName} w-full bg-infra-deep-navy object-cover object-center`}
        controlsClassName="mt-[28px] flex justify-center gap-[21px] md:mt-[72px] md:gap-6"
        buttonClassName="grid size-[51px] place-items-center rounded-full border border-infra-yellow text-infra-yellow transition-colors hover:bg-infra-yellow hover:text-infra-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow md:size-[64px]"
      />
    </div>
  );
}

function InfraProductMediaSection({
  detail,
  mediaMode = "all",
}: {
  detail: InfraProductDetailContent;
  mediaMode?: "all" | "videoOnly";
}) {
  const showGallery = mediaMode === "all";

  if ((!showGallery || (!detail.galleryImage && !detail.galleryImages)) && !detail.video) {
    return null;
  }

  return (
    <section className="bg-infra-deep-navy px-5 py-[46px] md:px-10 md:py-[104px]">
      <div className="mx-auto w-full max-w-[1240px]">
        {showGallery && detail.galleryImages ? (
          <InfraDetailImageCarousel
            images={detail.galleryImages}
            frameClassName="relative h-[246px] overflow-hidden rounded-[18px] md:h-[625px] md:rounded-[24px]"
            imageClassName="object-cover object-[50%_58%]"
            controlsClassName="mt-[28px] flex justify-center gap-[21px] md:mt-[72px] md:gap-6"
            previousButtonClassName="grid size-[51px] place-items-center rounded-full border border-white text-white/75 transition-colors hover:bg-white hover:text-infra-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-[64px]"
            nextButtonClassName="grid size-[51px] place-items-center rounded-full bg-white text-infra-yellow transition-colors hover:bg-infra-yellow hover:text-infra-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-[64px]"
            dataAttribute="gallery"
          />
        ) : showGallery && detail.galleryImage ? (
          <>
            <div
              data-product-detail-gallery
              className="relative h-[246px] overflow-hidden rounded-[18px] md:h-[625px] md:rounded-[24px]"
            >
              <Image
                src={detail.galleryImage.src}
                alt={detail.galleryImage.alt}
                fill
                sizes="(min-width: 768px) 1240px, 320px"
                className="object-cover object-[50%_58%]"
              />
            </div>
            <InfraDetailArrowControls light />
          </>
        ) : null}

        {detail.video ? (
          <div className={showGallery && (detail.galleryImage || detail.galleryImages) ? "mt-[62px] md:mt-[72px]" : ""}>
            <InfraProductVideo
              video={detail.video}
              heightClassName={
                showGallery && (detail.galleryImage || detail.galleryImages)
                  ? "h-[319px] md:h-[478px]"
                  : undefined
              }
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function InfraProductFeaturesSection({
  detail,
  standalone = false,
}: {
  detail: InfraProductDetailContent;
  standalone?: boolean;
}) {
  if (!detail.features || detail.features.length === 0) {
    return null;
  }

  const content = (
    <section
      id="benefits"
      className={`${standalone ? "" : "mt-[38px] md:mt-[93px]"} rounded-[14px] bg-infra-deep-navy p-[12px] shadow-[0_12px_28px_rgba(7,28,40,0.32)] md:rounded-[24px] md:p-[21px]`}
    >
      <div className="grid gap-[12px] md:grid-cols-2 md:gap-[16px]">
        {detail.features.map((feature) => (
          <InfraProductFeatureCard key={feature.number} feature={feature} />
        ))}
      </div>
    </section>
  );

  if (!standalone) {
    return content;
  }

  return (
    <section className="bg-white px-5 py-[46px] text-infra-ink md:px-10 md:py-[104px]">
      <div className="mx-auto w-full max-w-[1240px]">
        {content}
      </div>
    </section>
  );
}

function InfraProductDetailImagesSection({
  detail,
  standalone = false,
}: {
  detail: InfraProductDetailContent;
  standalone?: boolean;
}) {
  let content: ReactNode = null;

  if (detail.detailImages) {
    content = <InfraDetailImageCarousel images={detail.detailImages} />;
  } else if (detail.detailImage) {
    content = (
      <>
        <div data-detail-image className="relative mt-[26px] h-[321px] overflow-hidden rounded-[14px] md:mt-[78px] md:h-[625px] md:rounded-[24px]">
          <Image
            src={detail.detailImage.src}
            alt={detail.detailImage.alt}
            fill
            sizes="(min-width: 768px) 1240px, 320px"
            className="object-cover object-[52%_50%]"
            style={{ objectPosition: detail.detailImage.objectPosition }}
          />
        </div>

        <InfraDetailArrowControls />
      </>
    );
  }

  if (!content) {
    return null;
  }

  if (!standalone) {
    return content;
  }

  return (
    <section className="bg-white px-5 pb-[75px] pt-[12px] text-infra-ink md:px-10 md:pb-[104px] md:pt-[4px]">
      <div className="mx-auto w-full max-w-[1240px]">
        {content}
      </div>
    </section>
  );
}

type InfraBarValue = {
  year: string;
  value: number;
};

function InfraBarChart({
  values,
  chartHeight = 120,
}: {
  values: readonly InfraBarValue[];
  chartHeight?: number;
}) {
  const maxValue = Math.max(...values.map((v) => v.value), 1);

  return (
    <div>
      <div
        className="flex items-end gap-[6px] border-b border-white/16"
        style={{ height: `${chartHeight}px` }}
      >
        {values.map((v) => {
          const barH =
            v.value > 0
              ? Math.max(24, (v.value / maxValue) * (chartHeight - 4))
              : 0;

          return (
            <div
              key={v.year}
              className="flex flex-1 items-end justify-center"
              style={{ height: "100%" }}
            >
              {v.value > 0 ? (
                <div
                  className="flex w-full items-start justify-center rounded-t-[5px] bg-infra-yellow pt-1"
                  style={{ height: `${barH}px` }}
                >
                  <span className="text-[11px] font-bold leading-none text-infra-ink md:text-[12px]">
                    {v.value}
                  </span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex gap-[6px]">
        {values.map((v) => (
          <span
            key={`${v.year}-lbl`}
            className="flex-1 text-center text-[11px] leading-none text-white/50 md:text-[12px]"
          >
            {v.year}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfraFactoryHighlightCard({
  item,
}: {
  item: (typeof content.overview.factoryHighlights.items)[number];
}) {
  return (
    <article className="overflow-hidden rounded-[12px] bg-infra-navy p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] md:rounded-[18px] md:p-6">
      <h3 className="text-[17px] font-bold leading-6 text-infra-yellow md:text-[20px]">
        {item.title}
      </h3>
      <p className="mt-2 text-[12px] leading-[1.5] text-white/70 md:text-[14px] md:leading-6">
        {item.copy}
      </p>
      <div className="mt-4 grid grid-cols-[minmax(0,1fr)_100px] items-start gap-3 md:grid-cols-[minmax(0,1fr)_128px] md:gap-4">
        <div className="min-w-0">
          <p className="text-right text-[11px] font-bold text-white/50 md:text-[12px]">
            {item.unit}
          </p>
          <div className="mt-2">
            <InfraBarChart values={item.values} chartHeight={106} />
          </div>
        </div>
        <div className="relative mt-6 h-[106px] overflow-hidden rounded-[8px] md:h-[128px]">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}

function InfraFactoryHighlightsSection() {
  const { factoryHighlights } = content.overview;

  return (
    <section className="bg-[#f5f8f7] px-5 pb-[58px] pt-[28px] md:px-10 md:pb-[68px] md:pt-[40px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <InfraSectionHeading title={factoryHighlights.title} />
        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
          {factoryHighlights.items.map((item) => (
            <InfraFactoryHighlightCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfraOperationalChart({
  chart,
}: {
  chart: (typeof content.overview.operationalHighlights.charts)[number];
}) {
  return (
    <article className="rounded-[12px] bg-infra-navy px-5 py-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] md:rounded-[18px] md:px-7 md:py-7">
      <div className="flex items-baseline gap-2">
        <h3 className="text-[16px] font-bold leading-5 text-white md:text-[20px]">
          {chart.title}
        </h3>
        <span className="text-[12px] text-white/50">({chart.unit})</span>
      </div>
      <div className="mt-5">
        <InfraBarChart values={chart.values} chartHeight={150} />
      </div>
    </article>
  );
}

function InfraOperationalHighlightsSection() {
  const { operationalHighlights } = content.overview;

  return (
    <section className="bg-[#f5f8f7] px-5 pb-[58px] md:px-10 md:pb-[68px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <InfraSectionHeading title={operationalHighlights.title} />
        <div className="mt-4 md:mt-6">
          <p className="text-[15px] font-bold leading-6 text-infra-ink md:text-[18px]">
            {operationalHighlights.subtitle}
          </p>
          <p className="mt-2 max-w-[760px] text-[13px] leading-5 text-infra-ink/70 md:text-[15px] md:leading-6">
            {operationalHighlights.description}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-6">
          {operationalHighlights.charts.map((chart) => (
            <InfraOperationalChart key={chart.title} chart={chart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function NmdcInfraOverviewPage() {
  const overview = content.overview;
  const hero = overview.hero;

  return (
    <main className="min-h-screen bg-[#f5f8f7]">
      <section className="relative isolate overflow-hidden bg-infra-deep-navy px-5 pb-8 pt-[104px] text-white md:h-[652px] md:px-10 md:pb-0 md:pt-0">
        <InfraBackground priority />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,24,0.88)_0%,rgba(3,16,24,0.58)_44%,rgba(3,16,24,0.86)_100%)]"
          aria-hidden="true"
        />
        <Header links={getInfraNavLinks(overview.activeHref)} />

        <div className="relative z-10 mx-auto grid h-full w-full max-w-[calc(100vw-40px)] gap-8 md:max-w-[1240px] md:grid-cols-[minmax(0,520px)_minmax(0,659px)] md:items-center md:gap-[61px]">
          <div className="min-w-0 md:pt-[76px]">
            <p className="text-[24px] font-bold uppercase leading-8 text-infra-yellow md:text-[33px] md:leading-10">
              {hero.eyebrow}
            </p>
            <h1 className="mt-2 text-[46px] font-bold leading-[1.02] text-white md:text-[64px]">
              {hero.title}
            </h1>
            <div className="hidden md:mt-7 md:block md:max-w-[520px] md:space-y-5 md:text-[21px] md:font-medium md:leading-[1.55] md:text-white/90">
              {hero.paragraphs.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === hero.paragraphs.length - 1 ? (
                    <>
                      {" "}
                      <Link
                        href={hero.readMoreHref}
                        className="font-bold text-infra-yellow underline decoration-infra-yellow underline-offset-4 transition-colors hover:text-white"
                      >
                        {hero.readMoreLabel}
                      </Link>
                    </>
                  ) : null}
                </p>
              ))}
            </div>
            <div className="mt-7 w-full max-w-[calc(100vw-40px)] space-y-5 text-[13px] font-medium leading-[1.45] text-white/90 md:hidden">
              {hero.mobileParagraphs.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === hero.mobileParagraphs.length - 1 ? (
                    <>
                      <Link
                        href={hero.readMoreHref}
                        className="font-bold text-infra-yellow underline decoration-infra-yellow underline-offset-4 transition-colors hover:text-white"
                      >
                        {hero.readMoreLabel}
                      </Link>
                    </>
                  ) : null}
                </p>
              ))}
            </div>
          </div>

          <div className="relative h-[188px] w-full min-w-0 max-w-[calc(100vw-40px)] overflow-hidden rounded-[12px] shadow-[0_28px_70px_rgba(0,0,0,0.34)] md:mt-[80px] md:h-[393px] md:max-w-none md:rounded-[14px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="(min-width: 768px) 659px, 100vw"
              className="object-cover object-[50%_36%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,24,0.03)_0%,rgba(3,16,24,0.18)_100%)]" />
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-[#f5f8f7] px-5 pb-[58px] pt-[40px] md:px-10 md:py-[68px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <InfraSectionHeading title={overview.capabilities.title} />

          <div className="mt-8 rounded-[12px] bg-infra-navy p-3 shadow-[0_28px_80px_rgba(7,28,40,0.26)] md:mt-14 md:rounded-[24px] md:p-[42px]">
            <div className="grid gap-3 md:grid-cols-3 md:gap-6">
              {overview.capabilities.cards.map((card) => (
                <InfraCapabilityCard key={card.number} card={card} />
              ))}
            </div>
          </div>

          <InfraOverviewVideo />
        </div>
      </section>

      <InfraFactoryHighlightsSection />
      <InfraOperationalHighlightsSection />

      <section className="bg-[#f5f8f7] px-5 pb-[76px] pt-[28px] md:px-10 md:pb-[96px] md:pt-[52px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <InfraSectionHeading
            title={overview.verticals.title}
            mobileTitle={overview.verticals.mobileTitle}
          />
          <div className="mt-8 grid gap-[18px] md:mt-[86px] md:grid-cols-3 md:gap-6">
            {overview.verticals.items.map((item) => (
              <InfraVerticalCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-infra-deep-navy px-5 py-[76px] text-white md:px-10 md:py-[94px]">
        <Image
          src={overview.stats.background.src}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,16,24,0.86)_0%,rgba(7,28,40,0.94)_100%)]" />

        <div className="mx-auto w-full max-w-[1240px]">
          <InfraSectionHeading title={overview.sectors.title} light />
          <div className="relative mt-12 grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-8 md:gap-5">
            <span className="absolute bottom-0 left-1/2 top-0 w-px bg-white/20 md:hidden" aria-hidden="true" />
            {overview.sectors.items.map((item) => (
              <InfraSectorCard key={item.label} item={item} />
            ))}
          </div>

          <div className="mt-[74px] grid gap-6 md:grid-cols-2">
            {overview.stats.items.map((item) => (
              <InfraStatCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <InfraFooter />
    </main>
  );
}

export function NmdcInfraAtAGlancePage() {
  const detail = content.overview.detail;

  return (
    <main className="min-h-screen overflow-x-hidden bg-infra-deep-navy text-white">
      <section className="relative isolate overflow-hidden bg-infra-deep-navy px-5 pb-[20px] pt-[157px] md:min-h-[825px] md:px-10 md:pb-[56px] md:pt-[182px]">
        <InfraBackground priority />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,40,0.66)_0%,rgba(7,28,40,0.64)_42%,rgba(7,28,40,0.91)_100%)]"
          aria-hidden="true"
        />
        <Header links={getInfraNavLinks(content.overview.activeHref)} mobileSize="large" />

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <Link
            href={detail.backHref}
            className="hidden md:inline-flex items-center gap-3 text-[21px] font-bold leading-7 text-white transition-colors hover:text-infra-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow md:text-[18px] md:leading-6"
          >
            <ArrowLeft className="size-7 text-infra-yellow md:size-6" />
            {detail.backLabel}
          </Link>

          <article className="mt-0 grid gap-[42px] md:mt-[92px] md:grid-cols-[minmax(0,570px)_minmax(0,659px)] md:items-start md:gap-[11px]">
            <div className="min-w-0">
              <p className="text-[20px] font-bold leading-[26px] text-infra-yellow md:text-[28px] md:uppercase md:leading-9">
                {detail.eyebrow}
              </p>
              <h1 className="mt-[19px] text-[40px] font-bold leading-[48px] text-white md:mt-[14px] md:text-[64px] md:leading-[74px]">
                {detail.title}
              </h1>
              <div className="mt-[20px] grid max-w-[570px] gap-[34px] text-[15px] font-normal leading-[22px] text-white/90 md:mt-[34px] md:gap-8 md:text-[20px] md:font-medium md:leading-[28px]">
                {detail.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative h-[226px] min-w-0 overflow-hidden rounded-[14px] shadow-[0_28px_70px_rgba(0,0,0,0.34)] md:h-[393px]">
              <Image
                src={detail.image.src}
                alt={detail.image.alt}
                fill
                sizes="(min-width: 768px) 659px, 100vw"
                className="object-cover object-[50%_36%]"
              />
            </div>
          </article>
        </div>
      </section>

      <InfraFooter />
    </main>
  );
}

export function NmdcInfraProductsPage() {
  const products = content.products;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <InfraProductHero productPath={products.activeHref} />

      <section className="bg-white px-5 pb-[34px] pt-[36px] text-infra-ink md:px-10 md:pb-[110px] md:pt-[76px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="flex items-start justify-between gap-8">
            <div>
              <h2
                data-products-section-title
                className="text-[24px] font-bold uppercase leading-[32px] md:text-[31px] md:leading-[38px]"
              >
                {products.title}
              </h2>
              <span
                className="mt-[5px] block h-[5px] w-[49px] bg-infra-yellow md:mt-[10px] md:w-[94px]"
                aria-hidden="true"
              />
            </div>
            <span
              className="mt-[19px] hidden h-px w-[420px] bg-[#a8b4bd] md:block"
              aria-hidden="true"
            />
          </div>

          <div className="grid gap-[26px] mx-auto mt-[34px] max-w-[822px] md:mt-[48px] md:grid-cols-2 md:gap-[34px]">
            {products.items.map((product) => (
              <InfraProductCard key={product.title.join(" ")} product={product} />
            ))}
          </div>
        </div>
      </section>

      <InfraFooter />
    </main>
  );
}

function getInfraProductSlugFromPath(productPath: string) {
  return productPath.split("/").filter(Boolean).pop() ?? "";
}

function getInfraProductHeroBackground(productPath: string) {
  const hero = content.products.hero;
  const productSlug = getInfraProductSlugFromPath(productPath);
  const heroBackgroundsBySlug = {
    "3d-printing-artificial-reefs": hero.printing,
  };
  const selectedBackground =
    heroBackgroundsBySlug[productSlug as keyof typeof heroBackgroundsBySlug];

  return selectedBackground ?? hero.background;
}

function InfraProductHero({ productPath }: { productPath: string }) {
  const products = content.products;
  const hero = products.hero;
  const background = getInfraProductHeroBackground(productPath);

  return (
    <section
      data-products-hero
      data-product-detail-hero
      className="relative isolate h-[317px] overflow-hidden bg-infra-deep-navy px-5 text-white md:h-[485px] md:px-10"
    >
      <Image
        src={background.src}
        alt={background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_56%]"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
      />
      <Header links={getInfraNavLinks(products.activeHref)} mobileSize="large" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end pb-[28px] md:pb-[58px]">
        <h1 className="text-[40px] font-bold uppercase leading-[48px] text-white md:text-[48px] md:leading-[58px]">
          <span className="block md:inline">{hero.titleLeading}</span>
          <span className="hidden md:inline"> </span>
          <span className="block text-infra-yellow md:inline">
            {hero.titleAccent}
          </span>
        </h1>
      </div>
    </section>
  );
}

function NmdcInfraProductDetailPage({
  detail,
  productPath,
}: {
  detail: InfraProductDetailContent;
  productPath: string;
}) {
  const detailProductPath = productPath;
  const isWideImageIntro = detail.introLayout === "wideImage";
  const isVideoFeaturesGalleryLayout = detail.mediaLayout === "videoFeaturesGallery";
  const introImage = detail.contentImage ?? detail.heroImage;
  const detailContainerClassName = isWideImageIntro
    ? "mx-auto w-full max-w-[1370px]"
    : "mx-auto w-full max-w-[1240px]";
  const introArticleClassName = isWideImageIntro
    ? "mt-[46px] grid gap-[34px] md:mt-[69px] md:grid-cols-[minmax(0,700px)_minmax(0,528px)] md:items-start md:gap-[70px]"
    : "mt-[46px] grid gap-[34px] md:mt-[69px] md:grid-cols-[minmax(0,760px)_minmax(0,399px)] md:items-start md:gap-[80px]";
  const titleClassName = isWideImageIntro
    ? "text-[24px] font-bold uppercase leading-[28px] text-black md:whitespace-nowrap md:text-[50px] md:leading-[60px]"
    : "text-[24px] font-bold uppercase leading-[28px] text-black md:text-[43px] md:leading-[52px]";
  const paragraphClassName = isWideImageIntro
    ? "mt-[27px] grid gap-[28px] text-[20px] font-normal leading-[28px] text-[#22314b] md:mt-[42px] md:max-w-[650px] md:gap-[29px] md:text-[20px] md:leading-[28px]"
    : "mt-[27px] grid gap-[28px] text-[20px] font-normal leading-[28px] text-[#22314b] md:mt-[42px] md:max-w-[600px] md:gap-[29px] md:text-[20px] md:leading-[28px]";
  const heroImageClassName = isWideImageIntro
    ? "relative h-[342px] overflow-hidden rounded-[16px] md:h-[356px] md:rounded-[22px]"
    : "relative h-[342px] overflow-hidden rounded-[16px] md:h-[284px] md:rounded-[14px]";
  const ruleClassName = isWideImageIntro
    ? "mt-[23px] h-px bg-[#7b8793] md:mt-[42px]"
    : "mt-[23px] h-px bg-[#7b8793] md:mt-[75px]";

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <InfraProductHero productPath={detailProductPath} />

      <section className="bg-white px-5 pb-[75px] pt-[35px] text-infra-ink md:px-10 md:pb-[96px] md:pt-[64px]">
        <div className={detailContainerClassName}>
          <Link
            href={detail.backHref}
            data-detail-back
            className="inline-flex items-center gap-3 text-[17px] font-bold leading-6 text-[#2a394d] transition-colors hover:text-infra-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow md:text-[18px]"
          >
            <ArrowLeft className="size-6 text-infra-yellow" />
            {detail.backLabel}
          </Link>

          <article
            data-product-detail-intro={detail.introLayout ?? "default"}
            className={introArticleClassName}
          >
            <div className="min-w-0">
              <h2 className={titleClassName}>
                {detail.title}
              </h2>
              <div className={paragraphClassName}>
                {detail.paragraphs.map((paragraph, index) => (
                  <p key={paragraph}>
                    {paragraph}
                    {detail.readMoreHref &&
                    detail.readMoreLabel &&
                    index === detail.paragraphs.length - 1 ? (
                      <>
                        {" "}
                        <Link
                          href={detail.readMoreHref}
                          className="font-bold text-infra-yellow underline decoration-infra-yellow underline-offset-4 transition-colors hover:text-infra-ink"
                        >
                          {detail.readMoreLabel}
                        </Link>
                      </>
                    ) : null}
                  </p>
                ))}
              </div>
            </div>

            <div className={heroImageClassName}>
              <Image
                src={introImage.src}
                alt={introImage.alt}
                fill
                sizes={
                  isWideImageIntro
                    ? "(min-width: 768px) 528px, 320px"
                    : "(min-width: 768px) 399px, 320px"
                }
                className="object-cover"
                style={{ objectPosition: introImage.objectPosition }}
              />
            </div>
          </article>

          <div data-product-detail-rule className={ruleClassName} aria-hidden="true" />

          {!isVideoFeaturesGalleryLayout ? (
            <>
              <InfraProductDetailImagesSection detail={detail} />
              <InfraProductFeaturesSection detail={detail} />
            </>
          ) : null}
        </div>
      </section>

      {isVideoFeaturesGalleryLayout ? (
        <>
          <InfraProductMediaSection detail={detail} mediaMode="videoOnly" />
          <InfraProductFeaturesSection detail={detail} standalone />
          <InfraProductDetailImagesSection detail={detail} standalone />
        </>
      ) : (
        <InfraProductMediaSection detail={detail} />
      )}
      <InfraFooter />
    </main>
  );
}

export function NmdcInfraArtificialReefsPage() {
  return (
    <NmdcInfraProductDetailPage
      detail={content.products.detail}
      productPath="/products/3d-printing-artificial-reefs"
    />
  );
}

export function NmdcInfraEbawePage() {
  return (
    <NmdcInfraProductDetailPage
      detail={content.products.ebaweDetail}
      productPath="/products/ebawe-anlagentechnik"
    />
  );
}
