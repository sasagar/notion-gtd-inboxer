import './globals.css'
// import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Notion GTD Inboxer',
  applecationName: 'Notion GTD Inboxer',
  description: 'Post to Inbox of Notion. For GTD.',
  genarator: 'Next.js',
  manifest: '/manifest.json',
  themeColor: "#111827",
  authors: [{ name: 'SASAPIYO', url: 'https://kent-and-co.com' }],
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",

  openGraph: {
    type: "website",
    url: "https://gtd.bktsk.com",
    title: 'Notion GTD Inboxer',
    description: 'Post to Inbox of Notion. For GTD.',
    siteName: 'Notion GTD Inboxer',
    images: [{
      url: "https://gtd.bktsk.com/images/ogp.png",
    }],
  },

  metadataBase: new URL('https://gtd.bktsk.com'),

  icons: {
    icon: "/icon-192x192.png",
    apple: "/icon-512x512.png",
    shortcut: "/icon-192x192.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} flex text-gray-900 bg-gradient-to-b from-slate-300 to-slate-200 box-border`}>
        <Header />
        <div className='box-border safe-bottom min-h-screen pt-14 sm:pt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
