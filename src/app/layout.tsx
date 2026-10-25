import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { siteConfig, founder } from "@/content/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline} | Homemade Namkeen Puri in Pune`,
  description: `Order fresh, homemade Namkeen Puri made with love by ${founder.name}. Crispy Ajwain & Methi puris, Spicy Masala Tikha. Delivering across Pune. Order on WhatsApp!`,
  keywords: [
    "namkeen puri",
    "homemade snacks",
    "Pune snacks",
    "crispy puri",
    "ajwain puri",
    "masala puri",
    "Indian snacks online",
    "WhatsApp order",
    "Vaaa Foods",
    "homemade namkeen",
    "festive snacks Pune",
  ],
  authors: [{ name: founder.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    // TODO_OG_IMAGE: uncomment when OG image is added to public/images/
    // images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  // TODO_WEBSITE_URL: update when domain is finalised
  metadataBase: new URL("https://vaaafoods.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body className="bg-cream text-ink font-sans antialiased min-h-screen flex flex-col">
        {children}

        {/* JSON-LD structured data for a local food business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              servesCuisine: "Indian",
              priceRange: "₹",
              founder: {
                "@type": "Person",
                name: founder.name,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
