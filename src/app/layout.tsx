import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./provider";
// import SentryInit from "../components/SentryInit";
// import CustomFeedbackButton from "../components/CustomFeedbackButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenzy Portofolio",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <SentryInit /> */}
          {children}
          {/* <CustomFeedbackButton /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
