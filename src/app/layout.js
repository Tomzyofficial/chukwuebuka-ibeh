import "@/app/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Chukwuebuka Cornelius Ibeh - Home",
  description:
    "Portfolio, work from home, Next.js website building. Explore my projects, skills, and professional experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
