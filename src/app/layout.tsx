import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premove.org"),
  title: {
    default: "Premove",
    template: "%s · Premove",
  },
  description: "Prepare before move one.",
  applicationName: "Premove",
  keywords: [
    "chess preparation",
    "chess repertoire",
    "opening trainer",
    "tournament prep",
    "opponent scouting",
  ],
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon.png", type: "image/png" },
    ],
    shortcut: "/brand/favicon.png",
    apple: "/brand/premove-app-icon.png",
  },
  openGraph: {
    title: "Premove",
    description: "Prepare before move one.",
    siteName: "Premove",
    type: "website",
    images: [{ url: "/brand/premove-lockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premove",
    description: "Prepare before move one.",
    images: ["/brand/premove-lockup.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-dvh flex-col"
      >
        {children}
      </body>
    </html>
  );
}
