import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Locations } from "@/components/Locations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prime",
  description: "Prime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className=""> {children}</div>

        <Locations />
        <Footer />
      </body>
    </html>
  );
}
