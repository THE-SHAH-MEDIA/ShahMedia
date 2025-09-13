import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import FloatingDock from "@/components/FloatingDock";
import EnhancedAiChatAssistant from "@/components/EnhancedAiChatAssistant";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "The Shah Media — Local Growth Engine",
  description: "The Local Growth Engine for Shivamogga's Master Craftsmen. Transforming traditional businesses with AI-enhanced digital systems for Interior Designers, Architects, and Premium Contractors.",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/logo-64.webp", sizes: "64x64", type: "image/webp" },
      { url: "/logo-128.webp", sizes: "128x128", type: "image/webp" },
      { url: "/logo.webp", sizes: "192x192", type: "image/webp" }
    ],
    apple: [
      { url: "/logo-128.webp", sizes: "128x128", type: "image/webp" },
      { url: "/logo.webp", sizes: "180x180", type: "image/webp" }
    ],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "The Shah Media — Local Growth Engine",
    description: "The Local Growth Engine for Shivamogga's Master Craftsmen. AI-enhanced digital systems for premium growth.",
    url: "/",
    siteName: "The Shah Media",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "The Shah Media - Local Growth Engine"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shah Media — Local Growth Engine",
    description: "The Local Growth Engine for Shivamogga's Master Craftsmen. AI-enhanced digital systems for premium growth.",
    images: ["/logo.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/logo-64.webp" type="image/webp" sizes="64x64" />
        <link rel="icon" href="/logo-128.webp" type="image/webp" sizes="128x128" />
        <link rel="apple-touch-icon" href="/logo-128.webp" sizes="128x128" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#008080" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shah Media" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-[#F1F1F1] text-[#111111]`}
      >
        {/* Skip to content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus-visible:fixed focus-visible:top-2 focus-visible:left-2 bg-[#007BFF] text-white px-4 py-2 rounded"
        >
          Skip to content
        </a>
        <ErrorBoundary>
          <FloatingDock />
          <EnhancedAiChatAssistant />
          <main id="main-content">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
