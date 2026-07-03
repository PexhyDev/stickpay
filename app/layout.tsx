import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stickpay.example.com"),
  title: "StickPay | Gateway de pagamentos B2B/B2C",
  description:
    "Aceite pagamentos com segurança e velocidade usando tokenização, relatórios em tempo real e integrações simples.",
  keywords: ["gateway de pagamentos", "pagamentos B2B", "pagamentos B2C", "tokenização", "PCI-DSS"],
  openGraph: {
    title: "StickPay | Aceite pagamentos com segurança e velocidade",
    description:
      "Gateway de pagamentos B2B/B2C com integração rápida, segurança PCI-DSS e observabilidade financeira.",
    url: "https://stickpay.example.com",
    siteName: "StickPay",
    images: [
      {
        url: "/assets/og-stickpay.svg",
        width: 1200,
        height: 630,
        alt: "StickPay gateway de pagamentos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StickPay",
    description: "Gateway de pagamentos B2B/B2C rápido, seguro e pronto para escala.",
    images: ["/assets/og-stickpay.svg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "StickPay",
  description: "Gateway de pagamentos B2B/B2C com tokenização e relatórios em tempo real.",
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
