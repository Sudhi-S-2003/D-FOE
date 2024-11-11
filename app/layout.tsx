export const metadata = {
  title: 'D FORM',
  description: 'Dynamic Form Link Web',
  authors: [{ name: "Sudhi S", url: '' }],
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
