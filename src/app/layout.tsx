import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Sahil Mansuri — Mobile App Developer | Flutter · Kotlin · Jetpack Compose",
  description:
    "Mobile App Developer with 1+ year of hands-on experience building and maintaining production Flutter applications for iOS and Android. Reached 1M+ downloads on Google Play.",
  keywords: [
    "Sahil Mansuri",
    "Mobile App Developer",
    "Flutter Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "iOS and Android",
    "Balaji Astro Guide",
    "1M+ Downloads",
    "Appic Software LLP",
    "Jaipur",
  ],
  authors: [{ name: "Sahil Mansuri" }],
  openGraph: {
    title: "Sahil Mansuri — Mobile App Developer (Flutter · Kotlin · Jetpack Compose)",
    description:
      "Production mobile developer. Delivered 1M+ Google Play downloads astrology app. Flutter, Kotlin, Clean Architecture, Bloc/Cubit.",
    siteName: "Sahil Mansuri — Developer Portfolio & Lab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Mansuri — Mobile App Developer",
    description:
      "Mobile App Developer specializing in Flutter, Kotlin, Jetpack Compose, and production mobile releases.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white text-[#0a0a0a] font-sans antialiased selection:bg-[#173753] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
