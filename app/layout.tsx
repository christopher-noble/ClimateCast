import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'ClimateCast',
  description: 'Weather Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}