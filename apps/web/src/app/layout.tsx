import localFont from "next/font/local";

import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./components/layout/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Your Comprehensive Solution for Seamless Digital Integration",
  description:
    "IntegratedHub offers a one-stop platform designed to streamline digital operations for businesses of all sizes. Whether you're looking to integrate various tools, optimize workflows, or manage your digital infrastructure, IntegratedHub provides a robust and user-friendly solution to help you achieve efficiency and scalability. Empower your business with the seamless integration of your digital ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
