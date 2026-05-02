import Image from "next/image";
import Link from "next/link";
import { Header } from "../../../app/components/landing/Header";
import { ArrowUpRight } from "../../../app/components/landing/icons";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { SafeenVideoCarousel } from "./SafeenVideoCarousel";
import {
  nmdcSafeenSubseaBrand,
  nmdcSafeenSubseaNavLinks,
  safeenCapabilities,
  safeenEnablers,
  safeenHero,
  safeenOverview,
  safeenProducts,
  safeenVideos,
} from "./content";

type SafeenProduct = (typeof safeenProducts)[number];

function getPdfViewerHref(filePath: string, title: string) {
  const params = new URLSearchParams({
    file: filePath,
    title,
    returnTo: "/safeen-subsea",
  });

  return `/pdf-viewer?${params.toString()}`;
}

function getProductImagePosition(title: string) {
  return title === "Safeen NAV" ? "object-[50%_50%]" : "object-center";
}

function SafeenProductCard({ product }: { product: SafeenProduct }) {
  const specificationHref =
    "specificationFile" in product
      ? getPdfViewerHref(product.specificationFile, product.title)
      : product.specificationHref;

  return (
    <article>
      <figure className="relative overflow-hidden rounded-[18px] bg-primary-navy-blue md:rounded-[20px]">
        <Image
          src={product.image}
          alt={product.alt}
          width={1240}
          height={640}
          sizes="(min-width: 768px) 1240px, calc(100vw - 40px)"
          className={`h-[320px] w-full object-cover md:h-[640px] ${getProductImagePosition(product.title)}`}
        />
        <figcaption className="absolute left-5 top-5 flex h-[48px] min-w-[160px] items-center justify-center rounded-[19px] bg-[#113f57]/88 px-6 text-center text-[16px] font-bold leading-6 text-white backdrop-blur-[14px] md:left-8 md:top-8 md:h-[70px] md:min-w-[246px] md:rounded-[22px] md:px-8 md:text-[22px] md:leading-7">
          {product.title}
        </figcaption>
      </figure>

      <div className="mt-6 flex flex-col gap-5 rounded-[20px] bg-[#e5edf6] px-4 py-7 text-primary-navy-blue/78 md:min-h-[162px] md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:px-8 md:py-7">
        <p className="min-w-0 text-[14px] leading-[27px] md:text-[18px] md:leading-[30px]">
          {product.copy}
        </p>
        <Link
          href={specificationHref}
          className="inline-flex items-center gap-2 justify-self-center whitespace-nowrap text-[18px] font-bold leading-6 text-primary-sky-blue transition-colors hover:text-primary-navy-blue md:justify-self-end md:text-[18px]"
        >
          {product.specificationLabel}
          <ArrowUpRight className="size-5" />
        </Link>
      </div>
    </article>
  );
}

export function NmdcSafeenSubseaPage() {
  return (
    <main className="overflow-x-hidden bg-white text-primary-navy-blue">
      <Header
        brandName={nmdcSafeenSubseaBrand.name}
        logo={nmdcSafeenSubseaBrand.logo}
        logoAlt={nmdcSafeenSubseaBrand.logoAlt}
        links={nmdcSafeenSubseaNavLinks}
      />
      <section className="relative isolate h-[318px] overflow-hidden bg-primary-navy-blue px-5 text-white md:h-[487px] md:px-10">
        <Image
          src={safeenHero.image}
          alt={safeenHero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.24)_0%,rgba(3,15,26,0.52)_64%,rgba(3,15,26,0.78)_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end justify-center pb-[107px] md:justify-start md:pb-[128px]">
          <h1 className="max-w-[320px] text-center text-[24px] font-bold leading-[31px] md:max-w-[1240px] md:whitespace-nowrap md:text-left md:text-[48px] md:leading-[58px]">
            {safeenHero.titlePrefix ? `${safeenHero.titlePrefix} ` : ""}
            <span className="text-primary-sky-blue">
              {safeenHero.titleAccent}
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 pb-0 pt-12 md:px-10 md:py-[49px]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[minmax(0,744px)_438px] md:items-center md:gap-[58px]">
          <div className="flex flex-col gap-4 text-[16px] leading-6 text-primary-navy-blue md:text-[20px] md:leading-[30px]">
            <p className="text-xl font-bold">
              {safeenOverview.heading}
            </p>
            <p>
              {safeenOverview.lead}
            </p>
          </div>

          <Image
            src={safeenOverview.image}
            alt={safeenOverview.alt}
            width={438}
            height={399}
            sizes="(min-width: 768px) 438px, calc(100vw - 40px)"
            className="h-[300px] w-full rounded-[20px] object-cover object-bottom md:h-[399px]"
          />
        </div>
      </section>

      <section className="bg-[#001d2d] px-5 py-14 text-white md:px-10 md:py-[118px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <h2 className="text-[32px] font-bold uppercase leading-10 md:text-[48px] md:leading-[58px]">
            Capabilities
          </h2>
          <div className="mt-[39px] grid gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
            {safeenCapabilities.map((capability, index) => (
              <article
                key={capability}
                className="flex min-h-[122px] flex-col gap-3 rounded-[12px] bg-[#0d2e40] px-6 py-6 md:min-h-[170px] md:rounded-[20px] md:px-8 md:py-8"
              >
                <span className="flex w-[56px]  h-[56px] rounded-xl bg-[#314158]">
                    <p className="text-[14px] font-bold leading-none text-primary-sky-blue md:text-[36px] m-auto">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                </span>
                <p className="text-[16px] font-bold leading-6 text-primary-sky-blue md:text-[18px] md:leading-7">
                  {capability}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 md:py-[54px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <h2 className="text-[32px] font-bold uppercase leading-10 text-[#06447a] md:text-[32px] md:leading-10">
            OUR PRODUCTS
          </h2>
          <div className="mt-12 grid gap-11 md:gap-16">
            {safeenProducts.map((product) => (
              <SafeenProductCard key={product.title} product={product} />
            ))}
          </div>

          <div className="mt-10 md:mt-16">
            <SafeenVideoCarousel
              videos={safeenVideos}
              videoClassName="h-[316px] w-full object-cover md:h-[480px]"
            />
          </div>
        </div>
      </section>

      <NmdcFooter />
    </main>
  );
}
