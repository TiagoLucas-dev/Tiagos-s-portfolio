import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

import Background from './components/Background';


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio do Tiago Lucas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
          <body className={`${epilogue.variable} antialiased cursor-none dark:bg-neutral-900`}>
              <Providers>
                  <Background />
                  {children}
              </Providers>
          </body>
      </html>
  );
}
