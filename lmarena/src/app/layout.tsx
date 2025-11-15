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
  title: {
    default: "LMArena | Competitive Events Command Center",
    template: "%s | LMArena",
  },
  description:
    "LMArena centralizes tournament operations with real-time analytics, immersive broadcasts, and community-driven experiences for hybrid esports events.",
  metadataBase: new URL("https://agentic-467bfb21.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LMArena | Competitive Events Command Center",
    description:
      "Streamline tournament production with synced schedules, smart analytics, and cinematic viewing built for hybrid esports arenas.",
    url: "https://agentic-467bfb21.vercel.app",
    siteName: "LMArena",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601585161204-4a62aeb2e12c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "LMArena Command Center Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LMArena",
    description:
      "Immersive operations suite for hybrid esports tournaments and live-viewing arenas.",
    site: "@lmarena",
    creator: "@lmarena",
    images: [
      "https://images.unsplash.com/photo-1601585161204-4a62aeb2e12c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  keywords: [
    "esports arena",
    "tournament operations",
    "live match analytics",
    "hybrid events",
    "event control room",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0284c7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
