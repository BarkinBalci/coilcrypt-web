import "/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "react-hot-toast";

import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
      <Providers>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
          </Providers>
      </body>
    </html>
  );
}
