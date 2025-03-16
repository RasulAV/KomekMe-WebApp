import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import '@/scss/theme.scss'
import Providers from '@/utils/providers'
import { Toaster } from 'react-hot-toast'

import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta_sans',
})
const playfair = Playfair_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Komek Me | IT-решения для вашего бизнеса',
  description: 'Профессиональные IT-услуги для развития и оптимизации вашего бизнеса',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={` relative overflow-x-hidden  bg-white text-base antialiased dark:bg-dark-300 ${inter.variable} ${jakarta_sans.variable} ${playfair.variable}`}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeSwitcher />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
              },
              duration: 3000,
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
