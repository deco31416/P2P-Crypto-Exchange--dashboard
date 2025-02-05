import "@styles/globals.css"
import { Providers } from "./providers"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "P2P Crypto Exchange",
  description: "Secure P2P cryptocurrency exchange platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </Providers>
      </body>
    </html>
  )
}

