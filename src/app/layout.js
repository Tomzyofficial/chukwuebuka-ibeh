import "@/app/styles/globals.css";
import { Sansation } from "next/font/google";

const sansation = Sansation({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Chukwuebuka Cornelius Ibeh - Home",
  description: "Portfolio, work from home, Next.js website building.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sansation.className} antialiased`}>{children}</body>
    </html>
  );
}
