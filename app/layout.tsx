import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { montserrat } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: "Mix AI",
    template: `%s - Mix AI`,
  },
  description: "Mix AI description", // ....
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased font-montserrat font-semibold text-[13px] text-white",
          montserrat.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="container mx-auto max-w-7xl flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
