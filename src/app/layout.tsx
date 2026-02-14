import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Sourav Mahato | Software Developer",
  description: "Portfolio of Sourav Mahato, a Software Developer specialized in Next.js, Node.js, and modern web technologies. Creator of Dancely.",
  keywords: ["Sourav Mahato", "Software Developer", "Full Stack Developer", "Next.js", "React", "Node.js", "Dancely"],
  authors: [{ name: "Sourav Mahato" }],
  creator: "Sourav Mahato",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://souravmahato.in",
    title: "Sourav Mahato | Software Developer",
    description: "Portfolio of Sourav Mahato, a Software Developer specialized in Next.js, Node.js, and modern web technologies.",
    siteName: "Sourav Mahato Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Mahato | Software Developer",
    description: "Portfolio of Sourav Mahato, a Software Developer specialized in Next.js, Node.js, and modern web technologies.",
    creator: "@souravmahato",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={cn(inter.className, "bg-background text-foreground antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
