import "./globals.css";
import type { Metadata } from "next";
import { work_Sans } from "./fonts";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "MED LAB",
  description: "Sample By Olalekan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${work_Sans.className} flex flex-col p-5 text-darkcolor`}
      >
        <header>
          <Header />
        </header>
        <main className="flex-grow">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
