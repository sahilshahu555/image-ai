import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight:['400','500','600','700',],
  variable:'--font-ibm-flex'
});

export const metadata: Metadata = {
  title: "ImageAI",
  description: "AI Powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBM_PLEX antialiased",IBM_Plex.variable)}>
        {children}
      </body>
    </html>
  );
}
