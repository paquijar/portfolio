import "./globals.css";
import Navbar from "./navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
