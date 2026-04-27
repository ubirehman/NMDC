import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./icons";
import type { Brand } from "./types";

type BrandCardProps = {
  brand: Brand;
};

export function BrandCard({ brand }: BrandCardProps) {
  const imagePositionClassName =
    {
      dm: "object-[42%_50%]",
      energy: "object-[46%_50%]",
      infra: "object-[57%_53%]",
      lts: "object-[48%_45%]",
      product: "object-[52%_50%]",
    }[brand.id] ?? "object-center";

  return (
    <Link
      href={brand.href}
      aria-label={brand.name}
      className="group relative block h-[200px] w-[150px] shrink-0 snap-start overflow-hidden rounded-2xl border-[1.2px] border-white bg-white shadow-[0_12px_32px_-6px_rgba(5,20,31,0.76)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5  drop-shadow-md hover:drop-shadow-white focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white focus-visible:shadow-[0_0_28px_0_rgba(255,255,255,0.86)]"
    >
      <Image
        src={brand.image.src}
        alt={brand.image.alt}
        fill
        sizes="150px"
        className={`object-cover ${imagePositionClassName}`}
      />

      <div className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-center rounded-t-lg bg-glass-deep-navy-72 px-2 backdrop-blur-[26.5px]">
        {brand.logo ? (
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={140}
            height={32}
            className="max-h-7 w-auto object-contain"
          />
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
