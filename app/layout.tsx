import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anuar Aimoldin - ML Engineer & DSML KZ Founder",
  description: "Personal website of Anuar Aimoldin - Kaggle Master, ML Engineer, and founder of DSML KZ community",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <div className="min-h-screen pt-16 bg-gradient-to-b from-background to-primary/5">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'