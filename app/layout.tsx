import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vistamind.org"),
  title: "Vistamind Social Foundation | Empowering Futures Through Education",
  description:
    "Vistamind Social Foundation works to empower communities and create meaningful opportunities through education, learning and social impact.",
  openGraph: {
    title: "Vistamind Social Foundation",
    description:
      "Empowering communities through education, learning and social impact.",
    url: "https://vistamind.org",
    siteName: "Vistamind Social Foundation",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Vistamind Social Foundation education and community impact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistamind Social Foundation",
    description:
      "Empowering futures through education, learning and social impact.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
