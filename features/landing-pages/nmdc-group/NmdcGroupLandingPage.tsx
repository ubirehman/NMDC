import Image from "next/image";
import { BrandCards } from "../../../app/components/landing/BrandCards";
import { Header } from "../../../app/components/landing/Header";
import { Hero } from "../../../app/components/landing/Hero";
import { nmdcGroupLandingContent as content } from "./content";

export function NmdcGroupLandingPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate min-h-[100svh] w-full bg-brand-navy">
        <Image
          src={content.hero.background.src}
          alt={content.hero.background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,21,35,0.30)_0%,rgba(4,21,35,0.46)_58%,rgba(3,14,27,0.82)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,41,0.36)_0%,rgba(5,25,41,0.12)_34%,rgba(5,25,41,0.22)_100%)]"
          aria-hidden="true"
        />

        <Header
          brandName={content.brand.name}
          logo={content.brand.logo}
          logoAlt={content.brand.logoAlt}
          links={content.nav.links}
        />

        <div className="relative z-10 mx-auto min-h-[100svh] w-full max-w-[1240px] px-5 pt-28 pb-10 md:min-h-[786px] md:px-10 md:pt-0 md:pb-0">
          <div className="flex min-h-[calc(100svh-7rem)] flex-col justify-end gap-10 md:block md:min-h-0 md:h-[786px]">
            <div className="md:absolute md:left-0 md:top-[244px]">
              <Hero hero={content.hero} />
            </div>
            <div className="md:absolute md:right-0 md:bottom-[58px]">
              <BrandCards brands={content.brands} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
