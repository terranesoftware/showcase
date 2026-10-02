import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://terranesoftware.com"),
  title: "terrane",
  description: "Everything, eventually.",
  icons: {
    icon: "icon.svg",
    apple: "apple.svg"
  },
  openGraph: {
    images: ["opengraph.png"]
  }
};

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