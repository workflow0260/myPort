import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { getSiteUrl, siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#173753",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: `${siteConfig.name} Portfolio`,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    keywords: siteConfig.keywords,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteUrl,
      siteName: `${siteConfig.name} — Mobile App Developer`,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Flutter Developer in Jaipur | Mobile App Developer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: ["/og-image.png"],
      creator: siteConfig.twitterHandle,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Sahil Mansuri",
        jobTitle: "Flutter Developer",
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        email: "mailto:sahilmansuri2010@gmail.com",
        telephone: "+918890029227",
        description:
          "Sahil Mansuri is a Flutter Developer in Jaipur specializing in Flutter, Dart, Kotlin, Jetpack Compose, Firebase, REST APIs and production mobile apps.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        worksFor: {
          "@type": "Organization",
          name: "Appic Software LLP",
          location: "Jaipur, Rajasthan",
        },
        sameAs: [
          "https://github.com/sahil8822",
          "https://www.linkedin.com/in/sahil-mansuri-74a9a0255",
          "https://x.com/Sahilmansur2010",
          "https://www.instagram.com/light_dark_0123/?hl=en",
        ],
        knowsAbout: [
          "Flutter",
          "Dart",
          "Kotlin",
          "Jetpack Compose",
          "Firebase",
          "REST APIs",
          "WebSockets",
          "Mobile App Development",
          "Clean Architecture",
          "Bloc Pattern",
          "Android Development",
          "iOS Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Sahil Mansuri | Flutter Developer Portfolio",
        description:
          "Sahil Mansuri is a Flutter Developer in Jaipur specializing in Flutter, Dart, Kotlin, Jetpack Compose, Firebase, REST APIs and production mobile apps.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#0a0a0a] font-sans antialiased selection:bg-[#173753] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
