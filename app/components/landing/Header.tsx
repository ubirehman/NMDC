import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "./icons";
import type { NavLink } from "./types";

type HeaderProps = {
  brandName: string;
  logo: string;
  logoAlt: string;
  links: NavLink[];
};

export function Header({ brandName, logo, logoAlt, links }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-6 z-20 flex justify-center px-5 md:top-8 md:px-10">
      <div className="flex w-full max-w-[1240px] items-center justify-between rounded-full border-[1.4px] border-white/90 bg-[rgba(6,24,38,0.60)] px-4 py-3 backdrop-blur-[17.5px] md:h-[72px] md:px-[30px] md:py-0">
        <button
          type="button"
          aria-label={`Open ${brandName} menu`}
          className="flex size-10 items-center justify-center rounded-full text-white md:hidden"
        >
          <MenuIcon className="size-6" />
        </button>

        <Link
          href="/"
          aria-label={brandName}
          className="flex shrink-0 items-center md:order-none"
        >
          <Image
            src={logo}
            alt={logoAlt}
            width={114}
            height={36}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex md:items-center md:gap-6"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`text-[16px] font-bold leading-6 transition-colors ${
                link.active
                  ? "text-brand-sky"
                  : "text-white hover:text-brand-sky"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="size-10 shrink-0 md:hidden" aria-hidden="true" />
      </div>
    </header>
  );
}
