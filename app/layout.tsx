export const metadata = {
  title: 'Safari Eco Energy Solutions',
  description: 'Transforming waste into energy, powering a sustainable future for Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
