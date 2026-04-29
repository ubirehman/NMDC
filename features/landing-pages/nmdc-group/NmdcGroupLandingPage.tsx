import Image from "next/image";
import { BrandCards } from "../../../app/components/landing/BrandCards";
import { Header } from "../../../app/components/landing/Header";
import { Hero } from "../../../app/components/landing/Hero";
import { nmdcGroupLandingContent as content } from "./content";

export function NmdcGroupLandingPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate min-h-[max(786px,100svh)] w-full overflow-hidden bg-brand-navy bg-primary-navy-blue">
        <Image
          src={content.hero.background.src}
          alt={content.hero.background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-center"
        />
        <div
          className="absolute inset-0 bg-black/50 bg-[linear-gradient(90deg,var(--color-overlay-side-start)_0%,var(--color-overlay-side-mid)_34%,var(--color-overlay-side-end)_100%)]"
          aria-hidden="true"
        />

        <Header
          brandName={content.brand.name}
          logo={content.brand.logo}
          logoAlt={content.brand.logoAlt}
          links={content.nav.links}
        />

        <div className="relative z-10 mx-auto min-h-[max(786px,100svh)] w-full max-w-[1240px] px-5 pt-12 pb-10 md:px-10 md:pt-0 md:pb-0">
          <div className="flex min-h-[max(786px,100svh)] flex-col justify-end gap-10 md:block">
            <div className="md:absolute md:left-0 md:top-[244px]">
              <Hero hero={content.hero} />
            </div>
            <div className="md:absolute md:right-0 md:bottom-[80px]">
              <BrandCards brands={content.brands} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
