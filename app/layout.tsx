import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopHub - Premium E-commerce Platform",
  description:
    "Discover amazing products with fast delivery, secure payments, and exceptional customer service. Your one-stop destination for premium quality products.",
  keywords: "ecommerce, shopping, products, online store, premium quality",
  authors: [{ name: "ShopHub Team" }],
  openGraph: {
    title: "ShopHub - Premium E-commerce Platform",
    description: "Discover amazing products with fast delivery and secure payments",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopHub - Premium E-commerce Platform",
    description: "Discover amazing products with fast delivery and secure payments",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
