import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/ui/layout/navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE,
  description: "Portafolio de KrashMello",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-VE">
      <body className={`${inter.className}  bg-slate-200 dark:bg-slate-800`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <header className="h-fit">
              <Navbar />
            </header>
            <main className=" h-screen relative w-full overflow-auto">
              {children}
            </main>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
