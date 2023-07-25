import "@/styles/globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { MainNavItems } from "@/lib/nav-items"
import { cn } from "@/lib/utils"
import { ScrollToTop } from "@/components/Common/scroll-top"
import { SiteFooter } from "@/components/Common/site-footer"
import { SiteHeader } from "@/components/Header/site-header"
import { AuthProvider } from "@/components/auth-provider"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html className="scroll-smooth" lang="en" suppressHydrationWarning>
        {/* eslint-disable-next-line @next/next/no-head-element */}
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="flex min-h-screen flex-col">
                <SiteHeader items={MainNavItems} />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
              <TailwindIndicator />
            </ThemeProvider>
            <ScrollToTop />
          </AuthProvider>
          <Analytics />
        </body>
      </html>
    </>
  )
}
