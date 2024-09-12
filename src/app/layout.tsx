import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cybrical Tech - Leading IT Solutions & Services",
  description: `We provide the best IT solutions and services. Cybrical Tech is more than just an information technology firm; we are your partners in technological progress. With a comprehensive range of services spanning from cloud computing, cybersecurity, software development, IT consulting, and managed services, our team of experts is dedicated to empowering businesses to achieve operational excellence and digital transformation. At Cybrical Tech, we combine cutting-edge technology with industry expertise to deliver tailored solutions that drive innovation, efficiency, and growth.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
