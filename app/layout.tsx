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
  title: "StickPay | Plataforma de pagamentos Pix",
  description:
    "Gere cobranças Pix, acompanhe status transacionais, receba webhooks e organize sua operação financeira com a StickPay.",
  keywords: ["gateway Pix", "pagamentos Pix", "checkout Pix", "webhook Pix", "conciliação Pix"],
  openGraph: {
    title: "StickPay | Pagamentos Pix com estrutura de operação",
    description:
      "Plataforma para criar cobranças Pix, acompanhar status e manter sistemas sincronizados por webhook.",
    url: "https://stickpay.example.com",
    siteName: "StickPay",
    images: [
      {
        url: "/assets/og-stickpay.svg",
        width: 1200,
        height: 630,
        alt: "StickPay plataforma de pagamentos Pix",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StickPay",
    description: "Plataforma de pagamentos Pix com webhooks, status e conciliação operacional.",
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
  description: "Plataforma de pagamentos Pix com checkout, webhooks e acompanhamento transacional.",
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
