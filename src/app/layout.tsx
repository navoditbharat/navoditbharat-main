import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navodit Bharat",
  description: "Portfolio of Navodit Bharat",

  metadataBase: new URL("http://navoditbharat.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Navodit Bharat",
    description:
      "Software Engineer | Full-Stack Developer | React, Node.js, TypeScript Expert | Sharing Insights on Web Development, JavaScript Ecosystem, and Scalable Architecture.",
    url: "http://navoditbharat.com/",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Navodit Bharat",
    description:
      "Software Engineer | Full-Stack Developer | React, Node.js, TypeScript Expert | Sharing Insights on Web Development, JavaScript Ecosystem, and Scalable Architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="nhj" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
