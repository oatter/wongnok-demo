import "./globals.css";

// import { Prompt } from "next/font/google";
import SessionWrapper from "@/components/session-wrapper";
import NavBar from "@/components/nav-bar";

// const prompt = Prompt({
//   subsets: ["thai"],
//   weight: ["400", "700"],
// });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;700&display=block"
          rel="stylesheet"
        ></link>
      </head>
      <body className="mx-32 font-display">
        
        <NavBar />
        <SessionWrapper>
          <main>{children}</main>
          <h1 className="font-display">ทดสอบ TEST</h1>
        </SessionWrapper>
      </body>
    </html>
  );
}
