import './globals.css'

export const metadata = { title: 'Brightside Journal', description: 'Notes from a small design studio.' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><div className="wrap">{children}</div></body>
    </html>
  )
}
