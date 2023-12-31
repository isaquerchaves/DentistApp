import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Global } from './globals.style'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'DentistApp',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Global>
            <body className={inter.className}>{children}</body>
        </Global>

    )
}
