export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export type ImageRef = {
  src: string;
  alt: string;
};

export type CtaLabel = {
  label: string;
  href: string;
};

export type Brand = {
  id: string;
  name: string;
  href: string;
  image: ImageRef;
  logo?: ImageRef;
  label?: string;
};

export type LandingContent = {
  brand: {
    name: string;
    logo: string;
    logoAlt: string;
  };
  nav: { links: NavLink[] };
  hero: {
    background: ImageRef;
    headline: {
      leadingAccent: string;
      neutral: string;
      trailingAccent: string;
    };
    subhead: string;
    cta: { desktop: CtaLabel; mobile: CtaLabel };
  };
  brands: Brand[];
};
