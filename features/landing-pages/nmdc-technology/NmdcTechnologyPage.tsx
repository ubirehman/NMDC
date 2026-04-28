import Image from "next/image";
import Link from "next/link";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { OverviewVideoPlayer } from "../nmdc-overview/OverviewVideoPlayer";
import {
  aiPlatforms,
  nmdcTechnologyBrand,
  nmdcTechnologyNavLinks,
  technologyMedia,
  technologySections,
} from "./content";

export function NmdcTechnologyPage() {
  return (
    <main className="overflow-x-hidden bg-white text-primary-navy-blue">
      <section className="relative isolate overflow-hidden min-h-122 bg-primary-navy-blue px-5 pb-7 pt-[112px] text-white md:px-10 md:pb-0 md:pt-[124px]">
        <Image
          src="/images/landing/technology-hero.jpg"
          alt="NMDC AI Hub command center"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.36)_0%,rgba(3,15,26,0.58)_55%,rgba(3,15,26,0.88)_100%)]"
          aria-hidden="true"
        />
        <Header
          brandName={nmdcTechnologyBrand.name}
          logo={nmdcTechnologyBrand.logo}
          logoAlt={nmdcTechnologyBrand.logoAlt}
          links={nmdcTechnologyNavLinks}
        />

        <div className="relative z-10 mx-auto grid min-h-[230px] w-full max-w-[1240px] items-end gap-8 md:min-h-[300px] md:grid-cols-[minmax(0,520px)_minmax(420px,1fr)] md:gap-12">
          <div>
            <p className="text-[20px] font-bold leading-7 text-primary-sky-blue md:text-[26px]">
              Technology &amp; AI
            </p>
            <h1 className="mt-4 max-w-[560px] pb-8 text-[24px] font-bold leading-[1.18] md:pb-12 md:text-[34px]">
              Powering NMDC Group&apos;s future with intelligent systems and
              digital innovation.
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fa] px-5 py-10 md:px-10 md:py-12">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[minmax(0,650px)_minmax(360px,430px)] md:items-start md:gap-10">
          <div>
            <h2 className="text-[22px] font-bold leading-[1.2] text-[#06447a] md:text-[28px]">
              NMDC AI Hub - Empowering a Smarter, Safer and More Connected
              Future
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-navy-blue/72">
              The NMDC AI HUB is the Group&apos;s central digital platform,
              bringing together all AI-powered tools and smart systems across
              NMDC Group into one intelligent interface. It reflects our
              commitment to innovation, efficiency, and safety across every
              project and business unit.
            </p>

            <div className="mt-6 grid gap-4">
              {technologySections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[6px] bg-white p-5 shadow-[0_14px_34px_-30px_rgba(5,38,59,0.6)]"
                >
                  <h3 className="text-[18px] font-bold leading-6 text-[#06447a]">
                    {section.title}
                  </h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-primary-navy-blue/76">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-sky-blue"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <section className="mt-5 rounded-[6px] bg-[#062c45] p-5 text-white">
              <h2 className="text-[18px] font-bold leading-6">
                NMDC AI platforms
              </h2>
              <div className="mt-4 grid gap-0.5">
                {aiPlatforms.map((platform) => (
                  <div
                    key={platform}
                    className="border-t border-white/14 py-2.5 text-sm font-bold leading-5 text-white/88"
                  >
                    {platform}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-bold leading-5 text-white">
                Know more-{" "}
                <Link
                  href="https://ai.nmdc-group.com/"
                  className="text-primary-sky-blue transition-colors hover:text-white"
                >
                  https://ai.nmdc-group.com/
                </Link>
              </p>
            </section>
          </div>

          <aside className="grid gap-5">
            {technologyMedia.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={620}
                height={360}
                className="h-[220px] w-full rounded-[6px] object-cover shadow-[0_18px_50px_-32px_rgba(5,38,59,0.7)] md:h-auto"
              />
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-10 md:py-12">
        <div className="mx-auto w-full max-w-[1240px]">
          <OverviewVideoPlayer
            poster="/images/landing/technology-video.jpg"
            sources={[{ src: "/videos/nmdc-group-overview.mp4", type: "video/mp4" }]}
          />
        </div>
      </section>

      <NmdcFooter />
    </main>
  );
}
