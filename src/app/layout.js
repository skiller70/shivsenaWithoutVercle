import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shivsena',
  description: 'Welcome to Shivsena Delhi',
    
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
