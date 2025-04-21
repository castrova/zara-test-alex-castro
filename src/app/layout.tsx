import '../styles/globals.css'
import ClientLayout from '@/components/ClientLayout/ClientLayout'

export const metadata = {
  title: 'ZARA Challenge',
  description: 'Catálogo de teléfonos móviles',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
