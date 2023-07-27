import "@/styles/globals.css"
import { Metadata } from "next"
import { homeMeta } from "@/meta"
import { Analytics } from "@vercel/analytics/react"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ScrollToTop } from "@/components/Common/scroll-top"
import { AuthProvider } from "@/components/auth-provider"
import ProgressProvider from "@/components/progress-indicator"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = homeMeta

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
              <ProgressProvider>
                {children}
                <TailwindIndicator />
              </ProgressProvider>
            </ThemeProvider>
            <ScrollToTop />
          </AuthProvider>
          <Analytics />
        </body>
      </html>
    </>
  )
}
