import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";
import Menu from "./ui/menu";

const inter = Inter({ subsets: ["latin"] });
const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Util",
  description: "A conversion tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courierPrime.className}>
        <div className="absolute flex flex-col w-full h-full top-0 left-0 m-0 p-0">
          <Menu />
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
