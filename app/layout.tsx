import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/footer'
import React from 'react';

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
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}