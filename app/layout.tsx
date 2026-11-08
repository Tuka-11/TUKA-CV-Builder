import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TUKA CV Builder",
  description: "5 загвартай CV үүсгэгч. PDF болгон татаж авна.",
};

const FONTS =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Onest:wght@400;500;600;700&family=Unbounded:wght@500;600;700&family=Lora:wght@500;600;700&family=Montserrat:wght@400;500;600;700;800&family=Rubik:wght@400;500;600;700;800&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
