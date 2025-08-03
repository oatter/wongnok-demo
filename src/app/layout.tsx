import "./globals.css";

import { Prompt } from 'next/font/google'

const prompt = Prompt({
  subsets: ['thai'],
  weight: ['400', '700']
})


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={prompt.className}>
      <body className="container mx-auto px-4">
        <main>{children}</main>
      </body>
    </html>
  );
}
