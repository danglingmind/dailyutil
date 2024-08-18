import type { Metadata } from "next";
import "./globals.css";
import Menu from "./ui/menu";
import { courierPrime } from "./fonts";
import Footer from "./ui/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

// ReactGA.initialize("G-5K4GSL8LYW");

export const metadata: Metadata = {
  title: "Convert Verse",
  description:
    "A conversion tool that can convert text/sentence in different formats " +
    "and cases and allows you to copy the converted text/sentences. You can generate some " +
    "famous contents as well like lorem ipsum or A quick brown fox.",
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
          className="absolute flex flex-col w-full h-full top-0 left-0 m-0 p-0 overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex-none">
            <Menu />
          </div>
          <div className="flex-grow flex w-full">{children}</div>
          <div className="flex-none">
            <Footer />
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-5K4GSL8LYW" />
    </html>
  );
}
