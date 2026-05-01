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
              <span className="block md:inline">{content.hero.titleLeading}</span>
              <span className="mx-5 hidden text-white/82 md:inline">|</span>
              <span className="block text-primary-sky-blue md:inline">
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
          <div className="hidden md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-5">
            {content.desktopProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                aria-label={`Open ${product.title}`}
                className="group h-[274px] rounded-[13px] bg-[#092d42] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#0d3852] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
              >
                <div className="relative h-[188px] overflow-hidden rounded-[10px]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="352px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-[19px] text-[18px] font-bold leading-6 text-white transition-colors group-hover:text-primary-sky-blue">
                  {product.title}
                </h2>
              </Link>
            ))}
          </div>

          <div className="mx-auto grid w-full max-w-[320px] min-w-0 gap-[92px] md:hidden">
            {content.mobileSections.map((section) => (
              <section key={section.logoAlt} className="grid min-w-0 gap-7">
                <div className="flex justify-center">
                  <Image
                    src={section.logo}
                    alt={section.logoAlt}
                    width={220}
                    height={90}
                    className={section.logoClassName}
                  />
                </div>

                <div className="grid gap-[18px]">
                  {section.cards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="group min-w-0 overflow-hidden rounded-[12px] bg-[#00304a] px-4 py-[18px] text-center shadow-[0_20px_42px_rgba(0,0,0,0.18)] transition duration-300 active:scale-[0.99]"
                    >
                      <h2
                        className={`mx-auto max-w-[288px] break-words text-[17px] font-bold leading-[26px] transition-opacity group-active:opacity-80 ${card.accentClassName}`}
                      >
                        {card.title}
                      </h2>

                      <div className="mt-[14px] grid gap-3">
                        {card.images.map((image) => (
                          <div
                            key={image.src}
                            className="relative mx-auto w-full max-w-[288px] overflow-hidden bg-white"
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={288}
                              height={190}
                              sizes="288px"
                              className="h-auto w-full"
                            />
                          </div>
                        ))}
                      </div>

                      {card.description ? (
                        <p className="mx-auto mt-[14px] max-w-[276px] text-[14px] font-medium leading-[24px] text-white">
                          {card.description}
                        </p>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </section>
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
