import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
// import { unstable_ViewTransition as ViewTransition } from "react";
import "../globals.css";
// import NoSSR from "@/components/no-ssr";
// import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import NoSSR from "@/components/no-ssr";

import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "ChenmingTMC",
    template: "%s | Landing Page",
  },
  description: "Frontend developer, optimist, community builder.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <NoSSR>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider>
              <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
                <main className="max-w-[60ch] mx-auto w-full space-y-6">
                  {children}
                </main>

                <Footer />
              </div>
            </NextIntlClientProvider>
          </ThemeProvider>
        </NoSSR>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: "@leerob", url: "https://x.com/leerob" },
    { name: "youtube", url: "https://www.youtube.com/@leerob" },
    { name: "linkedin", url: "https://www.linkedin.com/in/leeerob" },
    { name: "github", url: "https://github.com/leerob" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
