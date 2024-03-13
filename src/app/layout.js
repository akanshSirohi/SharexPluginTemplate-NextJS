import { Varela_Round } from 'next/font/google';
import "./globals.css";

const varela = Varela_Round({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "ShareX NextJS",
  description: "NextJS Plugin Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varela.className}>{children}</body>
    </html>
  );
}
