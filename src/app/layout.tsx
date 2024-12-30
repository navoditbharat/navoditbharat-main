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
  keywords: [
    "Navodit Bharat",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],

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
    images: [
      {
        url: "https://drive.google.com/file/d/1lEW9YhR0r5jq3On8OlnYzbQFpO-AJ0UG/view?usp=drive_link",
        width: 1200,
        height: 630,
        alt: "Navodit Bharat",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Navodit Bharat",
    images: [
      {
        url: "https://drive.google.com/file/d/1lEW9YhR0r5jq3On8OlnYzbQFpO-AJ0UG/view?usp=drive_link",
        width: 1200,
        height: 630,
        alt: "Navodit Bharat",
      },
    ],
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
