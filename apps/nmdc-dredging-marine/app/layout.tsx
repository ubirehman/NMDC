import type { Metadata, Viewport } from "next";
import { nmdcDredgingMarineContent as content } from "../content/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: content.metadata.titleDefault,
    template: content.metadata.titleTemplate
  },
  description: content.metadata.description
};

export const viewport: Viewport = {
  themeColor: content.metadata.themeColor,
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
