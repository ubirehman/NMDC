"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import type { NavLink } from "./types";

type HeaderProps = {
  brandName: string;
  logo: string;
  logoAlt: string;
  links: NavLink[];
};

const mobileMenuId = "primary-mobile-menu";

export function Header({ brandName, logo, logoAlt, links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-6 z-20 flex justify-center px-5 md:top-8 md:px-10">
      <div className="relative w-full max-w-[1240px]">
        <div className="flex items-center justify-between rounded-full border-[1.4px]  bg-[rgba(6,24,38,0.60)] bg-glass-navy-60 px-4 py-3 backdrop-blur-[17.5px] md:h-[72px] md:px-[30px] md:py-0">
          <button
            type="button"
            aria-label={isMenuOpen ? `Close ${brandName} menu` : `Open ${brandName} menu`}
            aria-controls={mobileMenuId}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sky focus-visible:outline-primary-sky-blue md:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>

          <Link
            href="/"
            aria-label={brandName}
            className="flex shrink-0 items-center md:order-none"
            onClick={() => setIsMenuOpen(false)}
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
                    ? "text-brand-sky text-primary-sky-blue"
                    : "text-white hover:text-brand-sky hover:text-primary-sky-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="size-10 shrink-0 md:hidden" aria-hidden="true" />
        </div>

        <nav
          id={mobileMenuId}
          aria-label="Mobile primary"
          className={`md:hidden absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[24px] border border-white/80 bg-[rgba(6,24,38,0.88)] bg-glass-navy-88 px-4 py-3 backdrop-blur-[17.5px] transition-[opacity,transform,visibility] duration-200 ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-full px-4 py-3 text-sm font-bold leading-5 transition-colors ${
                link.active
                  ? "bg-white/10 text-brand-sky text-primary-sky-blue"
                  : "text-white hover:bg-white/10 hover:text-brand-sky hover:text-primary-sky-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
