"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { nmdcDredgingMarineContent as content } from "../content/content";
import { CloseIcon, MenuIcon } from "./icons";

export type DmNavLink = {
  label: string;
  href: string;
  active?: boolean;
};

type HeaderProps = {
  links: DmNavLink[];
};

const mobileMenuId = "dm-mobile-menu";

export function Header({ links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const header = content.header;

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  const headerContent = (
    <header className="fixed inset-x-0 top-6 z-[100] flex justify-center px-5 md:top-8 md:px-10">
      <div className="relative w-full max-w-[1240px]">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-[rgba(6,24,38,0.62)] px-4 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[18px] md:h-[72px] md:px-[30px] md:py-0">
          <button
            type="button"
            aria-label={isMenuOpen ? header.closeMenuLabel : header.openMenuLabel}
            aria-controls={mobileMenuId}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dm-cyan md:hidden [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:flex"
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
              width={168}
              height={52}
              priority
              className="hidden h-12 w-[158px] object-cover object-center md:block"
            />
            <Image
              src={content.brand.mobileLogo}
              alt={content.brand.logoAlt}
              width={114}
              height={36}
              priority
              className="h-9 w-[114px] object-contain md:hidden"
            />
          </Link>

          <nav
            aria-label={header.primaryLabel}
            className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:items-center md:justify-center md:gap-6 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap text-[15px] font-bold leading-6 transition-colors ${
                  link.active ? "text-dm-cyan" : "text-white hover:text-dm-cyan"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="size-10 shrink-0 md:hidden [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:block" aria-hidden="true" />
        </div>

        <button
          type="button"
          aria-label={header.closeMenuLabel}
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 z-30 bg-black/35 transition-[opacity,visibility] duration-200 md:hidden [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:block ${
            isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />

        <nav
          id={mobileMenuId}
          aria-label={header.mobilePrimaryLabel}
          className={`fixed inset-y-0 left-0 z-40 flex w-[84vw] max-w-[340px] flex-col overflow-hidden bg-[rgba(6,24,38,0.92)] px-5 py-6 shadow-2xl backdrop-blur-[18px] transition-[transform,visibility] duration-300 ease-out md:hidden [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:flex ${
            isMenuOpen ? "visible translate-x-0" : "invisible -translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <Image
              src={content.brand.mobileLogo}
              alt={content.brand.logoAlt}
              width={114}
              height={36}
              className="h-9 w-[114px] object-contain"
            />
            <button
              type="button"
              aria-label={header.closeMenuLabel}
              onClick={() => setIsMenuOpen(false)}
              className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dm-cyan"
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
                    ? "bg-white/10 text-dm-cyan"
                    : "text-white hover:bg-white/10 hover:text-dm-cyan"
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

  return portalTarget ? createPortal(headerContent, portalTarget) : headerContent;
}
