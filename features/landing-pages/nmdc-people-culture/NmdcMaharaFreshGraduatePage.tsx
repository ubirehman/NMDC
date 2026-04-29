import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "../../../app/components/landing/icons";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import {
  maharaFreshGraduateDetail,
  nmdcPeopleCultureBrand,
  nmdcPeopleCultureNavLinks,
} from "./content";

export function NmdcMaharaFreshGraduatePage() {
  return (
    <main className="overflow-x-hidden bg-[#f5fcff] text-primary-navy-blue">
      <section className="relative isolate flex h-[318px] items-end overflow-hidden bg-primary-navy-blue px-5 text-white md:h-[487px] md:px-10">
        <Image
          src="/images/landing/people-hero-boardroom.jpg"
          alt="NMDC people and culture event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.30)_0%,rgba(3,15,26,0.54)_64%,rgba(3,15,26,0.82)_100%)]"
          aria-hidden="true"
        />

        <Header
          brandName={nmdcPeopleCultureBrand.name}
          logo={nmdcPeopleCultureBrand.logo}
          logoAlt={nmdcPeopleCultureBrand.logoAlt}
          links={nmdcPeopleCultureNavLinks}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] pb-[84px] md:pb-[89px]">
          <div className="grid gap-5 md:grid-cols-[430px_1fr] md:items-start md:gap-20">
            <h1 className="whitespace-nowrap text-center text-[23px] font-bold uppercase leading-[1.05] md:whitespace-normal md:text-left md:text-[48px] md:leading-[58px]">
              NMDC PEOPLE &amp;{" "}
              <br className="hidden md:block" />
              <span className="text-primary-sky-blue">CULTURE</span>
            </h1>
            <p className="mx-auto max-w-[318px] text-center text-[13px] leading-[1.45] text-white md:mx-0 md:max-w-[730px] md:justify-self-end md:pt-[43px] md:text-[24px] md:leading-[32px]">
              We are defined by a strong and cohesive company culture. We strive
              to cultivate a working environment where everyone can thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5fcff] px-5 pb-16 pt-12 md:px-10 md:pb-[135px] md:pt-[104px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <Link
            href="/nmdc-group/people-and-culture"
            className="inline-flex items-center gap-3 text-[18px] font-bold leading-6 text-[#24364e] transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:text-[18px]"
          >
            <ArrowLeft className="size-6" />
            Back
          </Link>

          <article className="mt-8 rounded-[18px] bg-[#dfe7f0] px-5 py-6 md:mt-[43px] md:h-[1726px] md:overflow-hidden md:rounded-[20px] md:px-8 md:py-[31px]">
            <h2 className="text-[22px] font-bold leading-[1.18] text-primary-navy-blue md:text-[28px] md:leading-[36px]">
              {maharaFreshGraduateDetail.title}
            </h2>
            <div className="mt-7 grid gap-7 text-[16px] leading-[1.55] text-[#43556c] md:mt-7 md:gap-[24px] md:text-[17px] md:leading-[26px]">
              {maharaFreshGraduateDetail.sections.map((section, index) => (
                <section key={`${section.title}-${index}`}>
                  <h3 className="text-[16px] font-bold leading-6 text-[#43556c] md:text-[17px] md:leading-[26px]">
                    {section.title}
                  </h3>
                  <div className="mt-1 grid gap-2">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <div className="relative mt-10 overflow-hidden rounded-[18px] bg-primary-navy-blue md:mt-[64px] md:h-[591px] md:rounded-[24px]">
            <Image
              src={maharaFreshGraduateDetail.image.src}
              alt={maharaFreshGraduateDetail.image.alt}
              width={4096}
              height={2445}
              className="h-[320px] w-full object-cover md:h-full"
              sizes="(min-width: 768px) 1240px, calc(100vw - 40px)"
            />
          </div>
        </div>
      </section>

      <NmdcFooter />
    </main>
  );
}
