import type { Metadata } from 'next';
import Nav from '@/app/components/Nav';

export const metadata: Metadata = {
  title: 'Numbers App',
  description: 'mindful numbers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Nav />
      <main>
      {children}
      </main>
      </body>
    </html>
  )
}
