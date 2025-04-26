import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BPS Dynamic",
  description: "A Cloud Consulting Website",
  icons: {
    icon: "/images/bpslogo.png",
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
        {/* ✅ Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="uT5QDslz2ucT9c48mLTtsf2VdOgj9Qnz94tVBdN4Lpo"
        />
      </head>
      <body className={poppins.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
