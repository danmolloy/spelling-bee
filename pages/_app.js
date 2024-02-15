import '../styles/globals.css'
import { Analytics } from "@vercel/analytics/react"
import { Cutive } from "next/font/google"

const cutive = Cutive({
  subsets: ['latin'],
  variable: '--font-cutive',
  weight: '400'
})

function MyApp({ Component, pageProps }) {
  return ( 
    <main className={`${cutive.variable} font-sans`}>
    <Component {...pageProps} />
    <Analytics />
    </ main>
  )
}

export default MyApp
