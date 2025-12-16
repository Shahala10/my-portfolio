import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shahala Rahshima | Portfolio",
  description:
    "Shahala Rahshima A – Python Developer, AI/ML Enthusiast, and Multimedia & Web Technology student.",
  verification: {
    google: "Y3jLWG_Ly0DrApEsyRdgKtrgU7IOQEVKZ4UC-cHNpDk",
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
        <meta
          name="google-site-verification"
          content="l34AFVcfnOxnJ-2qHx2cNVvYzwaYLprV1lKad1SA7S4"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

