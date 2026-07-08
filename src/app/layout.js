import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ibad Khan | Frontend Developer",
  description: "Frontend developer building modern, performant web experiences with React, Next.js, and Tailwind CSS. Based in Hyderabad.",
  openGraph: {
    title: "Ibad Khan | Frontend Developer",
    description: "Frontend developer building modern, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink" style={{ fontVariationSettings: "'cv01' 1, 'cv05' 1, 'cv09' 1, 'cv11' 1, 'ss03' 1, 'ss07' 1, 'dlig' 1" }}>
        {children}
      </body>
    </html>
  );
}