import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.ttf",
  display: 'swap',
});

// change me
export const metadata: Metadata = {
  title: "Omar Ashour | Frontend Developer",
  description: "Portfolio of Omar Ashour, frontend web developer based in Halifax, Nova Scotia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
