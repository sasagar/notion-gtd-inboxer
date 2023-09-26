import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Notion GTD Inboxer',
  description: 'Post to Inbox of Notion. For GTD.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="{inter.className} text-gray-900 bg-gradient-to-b from-slate-300 to-slate-200">
        <Header />
        {children}
      </body>
    </html>
  )
}
