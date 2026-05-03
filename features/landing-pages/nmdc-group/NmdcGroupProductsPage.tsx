import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "../../../app/components/landing/icons";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { nmdcGroupLandingContent } from "./content";
import { nmdcGroupProductsContent as content } from "./productsContent";

export function NmdcGroupProductsPage() {
  return (
    <main className="min-h-screen bg-[#001d2c] text-white">
      <div className="md:hidden">
        <Header
          brandName={nmdcGroupLandingContent.brand.name}
          logo={nmdcGroupLandingContent.brand.logo}
          logoAlt={nmdcGroupLandingContent.brand.logoAlt}
          links={nmdcGroupLandingContent.nav.links}
        />
      </div>
      <section className="relative isolate h-[295px] overflow-hidden md:h-[486px]">
        <Image
          src={content.hero.background.src}
          alt={content.hero.background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[53%_50%]"
        />
        <div className="absolute inset-0 bg-black/58" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] flex-col justify-end px-5 pb-[34px] md:px-10 md:pb-[86px]">
          <Link
            href="/"
            className="absolute pt-20 left-10 top-[64px] hidden items-center gap-3 text-[20px] font-bold leading-7 transition-colors hover:text-primary-sky-blue md:flex"
          >
            <ArrowLeft className="size-7" />
            Back
          </Link>

          <div>
            <h1 className="text-[22px] font-bold leading-[32px] md:text-[44px] md:leading-[56px]">
              <span className="block text-white md:inline">
                {content.hero.titleAccent}
              </span>
            </h1>
            <p className="mt-2 max-w-[320px] text-[14px] leading-6 text-white/90 md:mt-[22px] md:max-w-none md:text-[16px] md:leading-6">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#001d2c] px-5 pb-16 pt-9 md:px-10 md:pb-[100px] md:pt-[66px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="hidden md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-5 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:grid-cols-2">
            {content.desktopProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                aria-label={`Open ${product.title}`}
                className="group h-[274px] rounded-[13px] bg-[#092d42] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#0d3852] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
              >
                <div className="relative h-[188px] overflow-hidden rounded-[10px] bg-[#092d42]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="352px"
                    className="object-cover transition duration-300 group-hover:scale-105 [@media_(pointer:coarse)_and_(max-width:1199px)]:object-contain [@media_(pointer:coarse)_and_(max-width:1199px)]:group-hover:scale-100"
                  />
                </div>
                <h2 className="mt-[19px] text-[16px] font-bold leading-6 text-white transition-colors group-hover:text-primary-sky-blue">
                  {product.title}
                </h2>
              </Link>
            ))}
          </div>

          <div className="mx-auto grid w-full max-w-[360px] grid-cols-1 gap-[18px] md:hidden">
            {content.desktopProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                aria-label={`Open ${product.title}`}
                className="group min-w-0 rounded-[12px] bg-[#092d42] p-4 shadow-[0_20px_42px_rgba(0,0,0,0.18)] transition duration-300 active:scale-[0.99]"
              >
                <div className="relative h-[188px] overflow-hidden rounded-[10px] bg-[#092d42]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="328px"
                    className="object-contain"
                  />
                </div>
                <h2 className="mt-[14px] break-words text-center text-[17px] font-bold leading-[26px] text-white transition-opacity group-active:opacity-80">
                  {product.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NmdcFooter
        variant="compact"
        logo={{
          src: "/images/landing/logo-dm.webp",
          alt: "NMDC Dredging & Marine",
          width: 146,
          height: 46,
          className: "h-[54px] w-[146px] object-cover object-center md:h-12 md:w-[146px]",
        }}
        pageLinks={content.footerLinks}
      />
    </main>
  );
}
