import type { Metadata } from "next";
import { Poppins, Abril_Fatface } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Echoes the bold serif letterforms of the printed RK logo mark, used only
// for the "RK" wordmark now that the header uses text instead of the image.
const brandFont = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RK Cold Pressed Juices — Healthy Fruits & Protein Cups",
  description:
    "RK Cold Pressed Juices: 100% pure cold-pressed juice, fresh fruit cups, and protein snack cups, made fresh every morning and delivered by 9:00 AM, Monday–Saturday.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${brandFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
