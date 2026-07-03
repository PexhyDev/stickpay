import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stickpay.example.com"),
  title: "StickPay | Subadquirente Pix via MisticPay",
  description:
    "Aceite Pix com segurança e velocidade usando a StickPay como camada de checkout, webhooks e conciliação sobre a MisticPay.",
  keywords: ["gateway Pix", "subadquirente Pix", "MisticPay", "checkout Pix", "webhook Pix"],
  openGraph: {
    title: "StickPay | Aceite Pix com segurança e velocidade",
    description:
      "Camada Pix para criar cobranças, normalizar webhooks e operar sobre a MisticPay.",
    url: "https://stickpay.example.com",
    siteName: "StickPay",
    images: [
      {
        url: "/assets/og-stickpay.svg",
        width: 1200,
        height: 630,
        alt: "StickPay subadquirente Pix",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StickPay",
    description: "Subadquirente Pix com integração MisticPay, webhooks e conciliação.",
    images: ["/assets/og-stickpay.svg"],
  },
  icons: {
    icon: "/assets/stickpay-icon.svg",
    apple: "/assets/stickpay-icon.svg",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "StickPay",
  description: "Subadquirente Pix com checkout, webhooks e integração MisticPay.",
  brand: {
    "@type": "Organization",
    name: "StickPay",
    url: "https://stickpay.example.com",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "BRL",
    lowPrice: "0",
    highPrice: "custom",
    offerCount: "3",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        {children}
        <Script
          id="stickpay-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
