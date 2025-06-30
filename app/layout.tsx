import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNav } from "@/components/FloatingNav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Graphics Garage | Digital Agency",
  description: "Comprehensive digital solutions for web development, design, branding, and marketing.",
  keywords: ["digital agency", "web development", "graphic design", "branding", "marketing", "UI/UX"],
  openGraph: {
    title: "Graphics Garage",
    description: "An all-in-one digital agency offering innovative solutions for your business.",
    type: "website",
    url: "https://graphicsgaragestudio.com",
    images: ["/logo-1.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphics Garage",
    description: "An all-in-one digital agency offering innovative solutions for your business.",
    images: ["/logo-1.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}