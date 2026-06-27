import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StructuredData } from "@/components/StructuredData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: "%s | Iman Zamani",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Technology Operations Executive","CIO","VP Technology","Enterprise Transformation",
    "M&A Integration","Operating Model","AI Readiness","Governance","ITSM","ServiceNow",
    "Private Equity","Dallas Texas","Iman Zamani","Ryan Specialty Group",
  ],
  authors: [{ name: "Iman Zamani", url: SITE_CONFIG.url }],
  creator: "Iman Zamani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Iman Zamani — Technology Operations & Transformation Executive",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/hero.jpg" />
        <StructuredData />
      </head>
      <body>
        <ScrollProgress />
        <CustomCursor />
        <CommandMenu />
        {children}
      </body>
    </html>
  );
}
