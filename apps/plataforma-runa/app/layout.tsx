import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RUNA OS",
  description: "Plataforma de mentoria RUNA",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("runa-theme")?.value;
  const theme = themeCookie === "papel" ? "papel" : "forest";

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "#080C09",
          colorPrimary: "#3D4842",
        },
      }}
    >
      <html
        lang="pt-BR"
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} theme-${theme} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
