import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.scss";
import Navigation from "@/components/common/navigation";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
