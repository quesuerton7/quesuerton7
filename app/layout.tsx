
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
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
