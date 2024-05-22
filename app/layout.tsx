import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive Rating Component",
  description: "A Frontend Mentor challenge submitted by FScode | Shalri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpass.className} font-body dark flex min-h-screen flex-col items-center justify-center bg-irc-very-dark-blue`}
      >
        {children}
        <div className="relative mx-auto w-full sm:w-[400px]">
          <Toaster />
        </div>
      </body>
    </html>
  );
}
