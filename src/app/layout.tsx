import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://souravmahato.in"),
  title: "Sourav Mahato | Full-Stack Developer",
  description:
    "Portfolio of Sourav Mahato, Full-stack developer from India focused on the JavaScript ecosystem.",
  keywords: [
    "Sourav Mahato",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Dancely",
  ],
  authors: [{ name: "Sourav Mahato" }],
  creator: "Sourav Mahato",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://souravmahato.in",
    title: "Sourav Mahato | Full-Stack Developer",
    description:
      "Portfolio of Sourav Mahato, Full-stack developer from India focused on the JavaScript ecosystem.",
    siteName: "Sourav Mahato Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Mahato | Full-Stack Developer",
    description:
      "Portfolio of Sourav Mahato, Full-stack developer from India focused on the JavaScript ecosystem.",
    creator: "@souravmahato",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={cn(
          inter.className,
          "bg-background text-foreground antialiased min-h-screen",
        )}
      >
        <JsonLd />
        {children}
        <Analytics />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
        />
      </body>
    </html>
  );
}
