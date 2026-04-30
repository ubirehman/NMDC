"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nmdcLtsContent as content } from "../content/content";
import { CloseIcon, MenuIcon } from "./icons";

export type LtsNavLink = {
  label: string;
  href: string;
  active?: boolean;
};

type HeaderProps = {
  links: LtsNavLink[];
};

const mobileMenuId = "lts-mobile-menu";

export function Header({ links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const header = content.header;

  return (
    <header className="absolute inset-x-0 top-[25px] z-30 flex justify-center px-5 md:top-8 md:px-10">
      <div className="relative w-full max-w-[320px] md:max-w-[1240px]">
        <div className="flex h-[62px] items-center justify-between rounded-full border border-white/20 bg-[rgba(69,79,80,0.82)] px-4 shadow-[0_24px_70px_rgba(0,0,0,0.30)] backdrop-blur-[18px] md:h-[72px] md:bg-[rgba(22,38,43,0.86)] md:px-[30px]">
          <button
            type="button"
            aria-label={isMenuOpen ? header.closeMenuLabel : header.openMenuLabel}
            aria-controls={mobileMenuId}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lts-tan md:hidden"
          >
            {isMenuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>

          <Link
            href="/"
            aria-label={content.brand.name}
            className="flex shrink-0 items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              width={132}
              height={40}
              priority
              className="h-[34px] w-[116px] object-contain md:h-[42px] md:w-[142px]"
            />
          </Link>

          <nav
            aria-label={header.primaryLabel}
            className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:items-center md:justify-center md:gap-[26px]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap text-[17px] font-bold leading-6 transition-colors ${
                  link.active ? "text-lts-tan" : "text-white hover:text-lts-tan"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="size-9 shrink-0 md:hidden" aria-hidden="true" />
        </div>

        <button
          type="button"
          aria-label={header.closeMenuLabel}
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 z-30 bg-black/40 transition-[opacity,visibility] duration-200 md:hidden ${
            isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />

        <nav
          id={mobileMenuId}
          aria-label={header.mobilePrimaryLabel}
          className={`fixed inset-y-0 left-0 z-40 flex w-[84vw] max-w-[340px] flex-col overflow-hidden bg-[rgba(6,42,54,0.96)] px-5 py-6 shadow-2xl backdrop-blur-[18px] transition-[transform,visibility] duration-300 ease-out md:hidden ${
            isMenuOpen ? "visible translate-x-0" : "invisible -translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              width={132}
              height={40}
              className="h-[40px] w-[132px] object-contain"
            />
            <button
              type="button"
              aria-label={header.closeMenuLabel}
              onClick={() => setIsMenuOpen(false)}
              className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lts-tan"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-full px-4 py-3 text-sm font-bold leading-5 transition-colors ${
                  link.active
                    ? "bg-white/10 text-lts-tan"
                    : "text-white hover:bg-white/10 hover:text-lts-tan"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
