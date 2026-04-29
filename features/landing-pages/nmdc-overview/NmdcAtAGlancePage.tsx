import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "../../../app/components/landing/icons";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import {
  atAGlanceDetail,
  nmdcOverviewBrand,
  nmdcOverviewNavLinks,
} from "./content";

export function NmdcAtAGlancePage() {
  return (
    <main className="overflow-x-hidden bg-[#061832] text-white">
      <section className="relative isolate overflow-hidden bg-primary-navy-blue px-5 text-white md:min-h-[1065px] md:px-10">
        <Image
          src="/images/landing/overview-hero-sea.jpg"
          alt="NMDC offshore platform at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.58)_0%,rgba(3,15,26,0.58)_38%,rgba(3,15,26,0.74)_78%,rgba(3,15,26,0.92)_100%)]"
          aria-hidden="true"
        />

        <Header
          brandName={nmdcOverviewBrand.name}
          logo={nmdcOverviewBrand.logo}
          logoAlt={nmdcOverviewBrand.logoAlt}
          links={nmdcOverviewNavLinks}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] pb-14 pt-[118px] md:pb-[56px] md:pt-[139px]">
          <Link
            href="/nmdc-group/nmdc-overview"
            className="inline-flex items-center gap-3 text-[24px] font-bold leading-8 text-white transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:text-[18px] md:leading-6"
          >
            <ArrowLeft className="size-8 md:size-6" />
            Back
          </Link>

          <article className="mt-[34px] md:mt-[22px]">
            <p className="text-[26px] font-bold uppercase leading-8 text-primary-sky-blue md:text-[28px] md:leading-[36px]">
              {atAGlanceDetail.eyebrow}
            </p>
            <h1 className="mt-[18px] text-[44px] font-bold leading-[1.08] text-white md:mt-[12px] md:text-[64px] md:leading-[74px]">
              {atAGlanceDetail.title}
            </h1>
            <div className="mt-9 max-w-[1240px] text-[18px] leading-[1.65] text-white md:mt-[24px] md:text-[20px] md:leading-[28px]">
              <p>{atAGlanceDetail.lead}</p>
              <div className="mt-3 grid gap-[34px] md:mt-2 md:gap-[37px]">
                {atAGlanceDetail.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <NmdcFooter variant="compact" />
    </main>
  );
}
