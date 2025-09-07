import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/dictionaries/dictionaries";
import { I18nProvider } from "@/components/I18nContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Mambou Fotie",
  description: "David Mambou Fotie's portfolio",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "fr" | "ja" }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html className="scroll-smooth overflow-y-scroll" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviderWrapper>
          <I18nProvider dictionary={dict}>
            <Navbar />
            {children}
          </I18nProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
