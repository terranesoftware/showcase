import { Archivo } from "next/font/google";
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"]
});
  
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}