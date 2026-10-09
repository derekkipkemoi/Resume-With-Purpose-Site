import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://resumewithpurpose.com"),
  title: "Resume With Purpose | Build Better Resumes with Resumify",
  description:
    "Create, import, edit, preview and export professional resumes with Resumify by Resume With Purpose.",
  applicationName: "Resume With Purpose",
  openGraph: {
    title: "Resume With Purpose",
    description:
      "Create a professional resume designed for the opportunity you want.",
    url: "https://resumewithpurpose.com",
    siteName: "Resume With Purpose",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
