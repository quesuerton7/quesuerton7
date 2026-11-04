import './globals.css'

export const metadata = {
  title: 'Qué Suertón 7',
  description: 'Sitio oficial de Qué Suertón 7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  )
}
