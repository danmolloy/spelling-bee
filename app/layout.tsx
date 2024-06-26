import { Metadata } from 'next'
import '../styles/globals.css'
import { Analytics } from "@vercel/analytics/react"
import { Cutive } from "next/font/google"

const cutive = Cutive({
  subsets: ['latin'],
  variable: '--font-cutive',
  weight: '400'
})
 
export const metadata: Metadata = {
  title: 'Spelling Bee',
  description: 'Play Spelling Bee',
}


export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  //const gameData = await fetch("/")
  return (
    <html lang="en">
      <body className={`${cutive.variable} font-sans`}>
        <div>
          {children}
        </div>
      </body>
      <Analytics />
    </html>
  )
}