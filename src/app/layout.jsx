import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextCart',
  description: 'Purchase your next favorite items from NextCart',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="pt-20 px-4 md:px-10">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
