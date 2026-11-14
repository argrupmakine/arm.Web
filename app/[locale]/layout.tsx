import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/server-translate";
import JsonLd from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "only light",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const baseUrl = "https://argrupmakine.com.tr";

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
    { locale: "de" },
    { locale: "fr" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale = "tr" } = await params;
  const title = getTranslation(locale, "seo.home.title");
  const description = getTranslation(locale, "seo.home.description");

  const localeMap: Record<string, string> = {
    tr: "tr_TR",
    en: "en_US",
    de: "de_DE",
    fr: "fr_FR",
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Ar Grup Makine",
    },
    description,
    keywords: [
      "Ar Grup Makine",
      "Savunma Sanayi",
      "Otomotiv Metal Parça",
      "İş Makineleri Sac Şekillendirme",
      "Tarım Makineleri Yedek Parça",
      "IATF 16949",
      "CNC Talaşlı İmalat",
      "Robotik Kaynak",
      "Ankara Sincan OSB Metal Sanayi",
    ],
    authors: [{ name: "Ar Grup Makine" }],
    creator: "Ar Grup Makine",
    publisher: "Ar Grup Makine Sanayi ve Ticaret A.Ş.",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        tr: `${baseUrl}/tr`,
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
        fr: `${baseUrl}/fr`,
        "x-default": `${baseUrl}/tr`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Ar Grup Makine",
      locale: localeMap[locale] || "tr_TR",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 600,
          height: 300,
          alt: "Ar Grup Makine Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/favicon/site.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "tr";

  return (
    <html
      lang={locale}
      className={`${openSans.variable} h-full antialiased light`}
      style={{ colorScheme: "only light" }}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="only light" />
        <meta name="supported-color-schemes" content="light" />
        <JsonLd locale={locale} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <LanguageProvider defaultLocale={locale}>
          <Header />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
