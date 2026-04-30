import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./icons";
import type { Brand } from "./types";

type BrandCardProps = {
  brand: Brand;
};

export function BrandCard({ brand }: BrandCardProps) {
  const isDredgingMarine = brand.id === "dm";
  const imagePositionClassName =
    {
      dm: "object-[42%_50%]",
      energy: "object-[46%_50%]",
      infra: "object-[57%_53%]",
      lts: "object-[48%_45%]",
      product: "object-[52%_50%]",
    }[brand.id] ?? "object-center";
  const logoFrameClassName =
    {
      dm: "h-10 w-[118px]",
      energy: "h-10 w-[118px]",
      infra: "h-10 w-[118px]",
      lts: "h-[34px] w-[124px]",
    }[brand.id] ?? "h-10 w-[118px]";
  const logoImageClassName = brand.id === "lts" ? "object-contain" : "object-cover";
  const logoFrameOverflowClassName =
    brand.id === "lts" ? "overflow-visible" : "overflow-hidden";
  const cardThemeClassName = isDredgingMarine
    ? "border-white hover:border-primary-sky-blue hover:shadow-[0_0_34px_0_rgba(41,183,227,0.70)] active:border-primary-sky-blue active:shadow-[0_0_20px_0_rgba(41,183,227,0.58)] focus-visible:border-primary-sky-blue focus-visible:outline-primary-sky-blue focus-visible:shadow-[0_0_34px_0_rgba(41,183,227,0.70)]"
    : "border-white drop-shadow-md hover:drop-shadow-white focus-visible:outline-white focus-visible:shadow-[0_0_28px_0_rgba(255,255,255,0.86)]";
  const labelThemeClassName = isDredgingMarine
    ? "group-hover:bg-primary-sky-blue group-focus-visible:bg-primary-sky-blue group-active:bg-primary-blue"
    : "";

  return (
    <Link
      href={brand.href}
      aria-label={brand.name}
      className={`group relative block h-[200px] w-[150px] shrink-0 snap-start overflow-hidden rounded-2xl border-[1.2px] bg-white shadow-[0_12px_32px_-6px_rgba(5,20,31,0.76)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${cardThemeClassName}`}
    >
      <Image
        src={brand.image.src}
        alt={brand.image.alt}
        fill
        sizes="150px"
        className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-[1.02] ${imagePositionClassName}`}
      />

      <div
        className={`absolute inset-x-0 bottom-0 flex h-12 items-center justify-center rounded-t-lg bg-glass-deep-navy-72 px-2 backdrop-blur-[26.5px] transition-colors duration-200 ${labelThemeClassName}`}
      >
        {brand.logo ? (
          <span className={`relative block shrink-0 ${logoFrameOverflowClassName} ${logoFrameClassName}`}>
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              fill
              sizes="118px"
              className={`${logoImageClassName} transition-transform duration-200 group-hover:scale-[1.03] group-active:scale-100`}
            />
          </span>
        ) : (
          <span className="flex w-full items-center justify-between gap-2 pl-1">
            <span className="whitespace-pre text-left text-xs font-medium leading-[1.5] text-white">
              {brand.label}
            </span>
            <ArrowRight className="mr-1 size-5 shrink-0 text-white" />
          </span>
        )}
      </div>
    </Link>
  );
}
