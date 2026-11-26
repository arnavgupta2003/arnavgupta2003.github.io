import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PROFILE } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} — Engineering Dashboard`,
  description: PROFILE.headline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Navigation Guide" />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-zinc-700 selection:text-white">
        <PostHogProvider>{children}</PostHogProvider>
        {PROFILE.umami.scriptUrl && PROFILE.umami.websiteId ? (
          <Script
            src={PROFILE.umami.scriptUrl}
            data-website-id={PROFILE.umami.websiteId}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
