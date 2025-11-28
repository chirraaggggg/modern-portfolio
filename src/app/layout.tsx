import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Chirag Sharma - Portfolio",
    template: "%s | Chirag Sharma"
  },
  description: "Portfolio of Chirag Sharma - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Chirag Sharma", "Portfolio", "Full Stack Developer", "React", "Next.js", "Node.js", "Web Developer"],
  authors: [{ name: "Chirag Sharma" }],
  creator: "Chirag Sharma",
  metadataBase: new URL("https://www.chiragsharma.tech"),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Chirag Sharma - Portfolio",
    description: "Portfolio of Chirag Sharma - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://www.chiragsharma.tech",
    siteName: "Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dhcocqegu/image/upload/v1753737110/OGN_o7spwl.png",
        width: 1200,
        height: 630,
        alt: "Chirag Sharma - Portfolio"
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Sharma - Portfolio",
    description: "Portfolio of Chirag Sharma - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["https://res.cloudinary.com/dhcocqegu/image/upload/v1753737110/OGN_o7spwl.png"],
    creator: "@chiragsharma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
