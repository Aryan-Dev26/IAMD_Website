import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "IAMD - Indian Association of Muscular Dystrophy",
  description: "Empowering Muscular Dystrophy warriors since 1992. Comprehensive rehabilitation, counselling, and support services at India's premier integrated MD facility - Manav Mandir.",
  keywords: "muscular dystrophy, MD, rehabilitation, IAMD, Manav Mandir, therapy, counselling, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
