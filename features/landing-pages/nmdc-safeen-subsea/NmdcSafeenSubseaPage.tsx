import Image from "next/image";
import Link from "next/link";
import { Header } from "../../../app/components/landing/Header";
import { ArrowLeft, ArrowRight } from "../../../app/components/landing/icons";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import {
  nmdcSafeenSubseaBrand,
  nmdcSafeenSubseaNavLinks,
  safeenCapabilities,
  safeenEnablers,
  safeenProducts,
} from "./content";

export function NmdcSafeenSubseaPage() {
  return (
    <main className="overflow-x-hidden bg-white text-primary-navy-blue">
      <section className="relative isolate min-h-122 overflow-hidden bg-primary-navy-blue px-5 pb-8 pt-[112px] text-white md:px-10 md:pb-0 md:pt-[124px]">
        <Image
          src="/images/landing/safeen-hero.jpg"
          alt="SAFEEN offshore marine operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.24)_0%,rgba(3,15,26,0.52)_64%,rgba(3,15,26,0.78)_100%)]"
          aria-hidden="true"
        />
        <Header
          brandName={nmdcSafeenSubseaBrand.name}
          logo={nmdcSafeenSubseaBrand.logo}
          logoAlt={nmdcSafeenSubseaBrand.logoAlt}
          links={nmdcSafeenSubseaNavLinks}
        />

        <div className="relative z-10 mx-auto  min-h-[230px] w-full max-w-[1240px] items-end gap-8 md:min-h-[310px] md:gap-16">
          <div>
            <h1 className="text-[28px] font-bold leading-[1.12] md:pb-12 md:text-[38px] text-center">
              NMDC Group{" "}
              <span className="text-primary-sky-blue">
                Safeen Subsea &amp; AD Ports JV.
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-10 md:py-12">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[minmax(0,650px)_390px] md:items-start md:gap-12">
          <section>
            <p className="text-sm leading-6 text-primary-navy-blue/76">
              SAFEEN supports multiple sectors including oil and gas, offshore
              wind, ports and terminals and large-scale marine infrastructure
              projects. This enables:
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-medium leading-6 text-primary-navy-blue">
              {safeenEnablers.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-sky-blue"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-primary-navy-blue/70">
              The company&apos;s integrated operating model ensures that
              offshore execution is supported by UAE-based infrastructure and
              capabilities.
            </p>
          </section>

          <Image
            src="/images/landing/safeen-vessel.jpg"
            alt="SAFEEN offshore vessel"
            width={520}
            height={300}
            className="h-[230px] w-full rounded-[6px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[#062c45] px-5 py-10 text-white md:px-10 md:py-12">
        <div className="mx-auto w-full max-w-[1240px]">
            <h2 className="text-[24px] font-bold uppercase leading-8">
              Capabilities.
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {safeenCapabilities.map((capability) => (
                <article
                  key={capability}
                  className="rounded-[6px] bg-white p-5 text-sm font-bold leading-6 text-primary-navy-blue"
                >
                  {capability}
                </article>
              ))}
            </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-10 md:py-14">
        <div className="mx-auto w-full max-w-[1240px]">
            <h2 className="text-[22px] font-bold uppercase leading-7 text-[#06447a]">
              OUR PRODUCTS
            </h2>
            <div className="mt-6 grid gap-8">
              {safeenProducts.map((product) => (
                <article
                  key={product.title}
                  className="overflow-hidden rounded-[6px] bg-[#eef5f8]"
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={1240}
                    height={520}
                    className="h-[240px] w-full object-cover object-bottom md:h-[360px]"
                  />
                  <div className="grid gap-5 p-5 md:grid-cols-[180px_1fr_auto] md:items-start md:p-6">
                    <h3 className="text-[20px] font-bold leading-7 text-primary-navy-blue">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-6 text-primary-navy-blue/72">
                      {product.copy}
                    </p>
                    <Link
                      href="#"
                      className="text-sm font-bold leading-5 text-primary-sky-blue transition-colors hover:text-primary-blue"
                    >
                      Download Specifications
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[6px] bg-primary-navy-blue">
              <div className="relative">
                <Image
                  src="/images/landing/safeen-vessel.jpg"
                  alt="SAFEEN Surveyor vessel"
                  width={1240}
                  height={520}
                  className="h-[240px] w-full object-cover md:h-[420px]"
                />
                <button
                  type="button"
                  aria-label="Play SAFEEN vessel video"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-[rgba(7,48,59,0.64)] backdrop-blur-[8px]">
                    <span
                      aria-hidden="true"
                      className="ml-0.5 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-primary-sky-blue"
                    />
                  </span>
                </button>
              </div>
              <div className="flex justify-center gap-2 bg-white py-4">
                <button
                  type="button"
                  aria-label="Previous product"
                  className="flex size-8 items-center justify-center rounded-full border border-content-200 text-primary-navy-blue/60 transition-colors hover:border-primary-sky-blue hover:text-primary-navy-blue"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next product"
                  className="flex size-8 items-center justify-center rounded-full bg-primary-sky-blue text-primary-navy-blue transition-colors hover:bg-primary-blue hover:text-white"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
        </div>
      </section>

      <NmdcFooter />
    </main>
  );
}
