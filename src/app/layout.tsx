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
  title: "Sahil Mansuri — Flutter & Kotlin Developer | iOS & Android Apps & Backend Engineer",
  description:
    "Full-stack mobile engineer specializing in cross-platform iOS & Android mobile apps (Flutter, Dart), native Android (Kotlin), and backend systems (Node.js, Express, MongoDB, Firebase).",
  keywords: [
    "Sahil Mansuri",
    "Flutter Developer",
    "Kotlin Developer",
    "iOS Developer",
    "Android Developer",
    "iOS and Android App Developer",
    "Mobile Engineer",
    "Cross-Platform Mobile Apps",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "REST API",
  ],
  authors: [{ name: "Sahil Mansuri" }],
  openGraph: {
    title: "Sahil Mansuri — Flutter & Kotlin Developer (iOS & Android)",
    description:
      "Building high-performance iOS & Android apps with Flutter, Kotlin & scalable backend systems.",
    siteName: "Sahil Mansuri — Developer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Mansuri — Flutter & Kotlin Developer",
    description:
      "Mobile & Backend Engineer specializing in Flutter, Kotlin, Node.js, and MongoDB.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#030303] text-[#f5f5f7] font-sans antialiased selection:bg-white selection:text-black flex flex-col">
        {children}
      </body>
    </html>
  );
}
