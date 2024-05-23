import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proof-of-concept App"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden h-screen bg-slate-800 text-slate-100`}> {/* dark background, white colored text, container class, auto margin on right and left, padding of 4 on all sides */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
