import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/ui/layout/navbar";

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
    <html lang="es-VE" className="scroll-smooth">
      <body className={`${inter.className}  bg-slate-200 dark:bg-slate-800`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <header className="w-full h-fit">
              <Navbar />
            </header>
            <main className="snap-y snap-mandatory h-screen relative w-full overflow-auto">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
