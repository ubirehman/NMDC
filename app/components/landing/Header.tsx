"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, MenuIcon } from "./icons";
import type { NavLink } from "./types";

type HeaderProps = {
  brandName: string;
  logo: string;
  logoAlt: string;
  links: NavLink[];
  className?: string;
};

const mobileMenuId = "primary-mobile-menu";

export function Header({
  brandName,
  logo,
  logoAlt,
  links,
  className,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  const headerContent = (
    <header
      className={`fixed inset-x-0 top-6 z-[100] flex justify-center px-5 md:top-8 md:px-10 ${className ?? ""}`}
    >
      <div className="relative w-full max-w-[1240px]">
        <div className="flex h-14 items-center justify-between rounded-full border-[1px] border-gray-50/20 bg-[rgba(6,24,38,0.60)] bg-glass-navy-60 px-4 backdrop-blur-[17.5px] md:h-[72px] md:px-[30px] md:py-0">
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
            className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:items-center md:justify-center md:gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap text-[16px] font-bold leading-6 transition-colors ${
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

        <button
          type="button"
          aria-label={`Close ${brandName} menu`}
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 z-30 bg-black/35 transition-[opacity,visibility] duration-200 md:hidden ${
            isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />

        <nav
          id={mobileMenuId}
          aria-label="Mobile primary"
          className={`fixed inset-y-0 left-0 z-40 flex w-[82vw] max-w-[340px] flex-col overflow-hidden  shadow-2xl shadow-white bg-[rgba(6,24,38,0.88)] bg-glass-navy-88 px-5 py-6 backdrop-blur-[17.5px] transition-[transform,visibility] duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "visible translate-x-0"
              : "invisible -translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <Image
              src={logo}
              alt={logoAlt}
              width={114}
              height={36}
              className="h-8 w-auto"
            />
            <button
              type="button"
              aria-label={`Close ${brandName} menu`}
              onClick={() => setIsMenuOpen(false)}
              className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sky focus-visible:outline-primary-sky-blue"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
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
          </div>
        </nav>
      </div>
    </header>
  );

  return portalTarget ? createPortal(headerContent, portalTarget) : headerContent;
}
