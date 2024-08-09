import type { Metadata } from "next";
import "./globals.css";
import Menu from "./ui/menu";
import { courierPrime } from "./fonts";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Convert Verse",
  description: "A conversion tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${courierPrime.className}`}>
        <div
          className="absolute flex flex-col justify-between w-full h-full top-0 left-0 m-0 p-0 overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <Menu />
          <div className="w-full">{children}</div>
          <div className="flex items-end justify-end">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
