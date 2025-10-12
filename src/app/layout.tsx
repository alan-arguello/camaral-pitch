import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { defaultLocale } from "@/content/deck";
import "./globals.css";

const deckSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-deck-sans",
});

export const metadata: Metadata = {
  title: "Camaral | Pitch",
  description:
    "Camaral uses artificial intelligence to create real-time avatars that scale customer experience and marketing.",
  metadataBase: new URL("https://camaral.ai"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Camaral | Pitch",
    description:
      "Photorealistic AI avatars that qualify leads, onboard customers, and run meetings in real time.",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Camaral - Real-time AI Avatars",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camaral | Pitch",
    description:
      "Deploy avatars that look, sound, and think like your team for marketing and customer experience.",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PLK14YD2BR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLK14YD2BR');
            `,
          }}
        />
      </head>
      <body className={`${deckSans.variable} bg-[var(--brand-bg)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
