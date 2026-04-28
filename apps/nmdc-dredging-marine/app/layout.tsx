import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NMDC Dredging & Marine",
    template: "%s | NMDC Dredging & Marine"
  },
  description:
    "NMDC Dredging & Marine standalone website for marine construction, vessels, hydraulic physical modelling, and caisson methods."
};

export const viewport: Viewport = {
  themeColor: "#05263b",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

