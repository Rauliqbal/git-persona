import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Git Persona - GitHub Profile README Generator",
  description:
    "Create beautiful GitHub Profile README files in minutes. Generate professional GitHub profile introductions, skills sections, social links, and developer portfolios with Git Persona.",

  keywords: [
    "GitHub Profile README Generator",
    "GitHub README Generator",
    "GitHub Profile Builder",
    "GitHub Bio Generator",
    "Developer Portfolio Generator",
    "GitHub Markdown Generator",
    "Git Persona",
  ],

  authors: [{ name: "Muhamad Raul" }],

  openGraph: {
    title: "Git Persona - GitHub Profile README Generator",
    description:
      "Generate professional GitHub Profile README files quickly and easily.",
    type: "website",
    siteName: "Git Persona",
  },

  twitter: {
    card: "summary_large_image",
    title: "Git Persona - GitHub Profile README Generator",
    description:
      "Build beautiful GitHub Profile README files with Git Persona.",
  },

  metadataBase: new URL("https://gitpersona.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
