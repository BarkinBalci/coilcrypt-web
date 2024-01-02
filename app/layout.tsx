import "/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
