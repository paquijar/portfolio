import "./globals.css";
import { Navbar } from "@ui/.";
import { LayoutProps } from "./layout.types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-500">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
